## 자바스크립트 비동기 처리

비동기 처리란 무엇일까요?현재 실행 중인 것이 완료되지 않더라도 다음 코드를 먼저 실행하는 방식이다.
비동기처리는 동시에 여러 작업을 가능하게한다는 장점이 있지만, 비동기 함수가 많을 경우 어떤 코드가 먼저 실행되는지 알 수 없고 가독성이 나쁘다.
이런 문제를 해결하기 위해 여러 비동기 프로그래밍 방법이 생겼고 크게 콜백 함수, Promise,async/await 패턴이 존재한다.

## 콜백함수 

비동기 방식을 처리하는 방법으로 콜백함수, promise,async/await이 있다.

   콜백함수는 특정 함수에 매개변수로 전달된 함수로, 함수 안에서 어떤 특정한 시점에 다시 호출되는 함수를 말한다.

```js
const callbackFunction = (callback) => {
  console.log("callbackFunction");
  callback();
};
callbackFunction(() => console.log("전달한 callback"));
```

콜백함수의 단점은 콜백지옥에 빠질 수 있다는 것.
`콜백지옥`이란 javascript를 이용한 비동기 프로그래밍시 발생하는 문제로, 함수의 매개변수로 넘겨지는 콜백함수가 반복되어 코드의 들여쓰기 수준이 감당하기 힘들정도로 깊어지는 현상을 말한다.

##  Promise

```js
const promiseData = new Promise((res, rej) => {
  res("something data");
});
promiseData.then((data) => {
  console.log(data);
});
```

Promise를 정의할 때에 인자값으로 resolve(res),reject(rej) 인자 값을 전달한다. 그리고 안에서 res로 어떤 값을 전달한다.
rej는 에러를 전달한다.
promise객체를 담은 변수에 then을 사용하여 전달받은 data를 console.log(data)로 콘솔창에 출력하는 것을 볼 수 있다.
`then은 작업수행이 완료되면 실행이 되게 된다.`

promise도 콜백 헬을 해결할 수 업섰지만, 비동기 함수의 후속 처리가 콜백 함수에 비해 다루기 훨씨 쉬워졌다.

### promise then의 연결/순서대로 처리

순서대로 비동기를 처리해야할 때는 then을 연결하여 해결할 수 있다.

```js
const funcPromise1 = () => {
  const promiseData = new Promise((res, rej) => {
    setTimeout(() => res("something data 1"), 4000);
  });
  return promiseData;
};

const funcPromise2 = () => {
  const promiseData = new Promise((res, rej) => {
    setTimeout(() => res("something data 2"), 2000);
  });
  return promiseData;
};

const funcPromise3 = () => {
  const promiseData = new Promise((res, rej) => {
    setTimeout(() => res("something data 3"), 2000);
  });
  return promiseData;
};

//Promise 중첩 수행
funcPromise1()
  .then((data) => {
    console.log(data);
    return funcPromise2();
  })
  .then((data) => {
    console.log(data);
    return funcPromise3();
  })
  .then((data) => {
    console.log(data);
  });
```

## async/await

Promise는 여전히 콜백 함수를 사용하기에 콜백 헬의 문제를 해결할 수 없었다.
ES8에서 보다 간단하고 가독성 좋게 비동기 처리를 동기 처러처럼 구현하는 async/await가 도입되었다.

async/await은 promise를 기반으로 동작하며, then/catch/finally같은 후속 처리 메서드 없이 마치 동기처럼 사용할 수 있다.

```js
const funcAsync = async () => {
  return "async";
};
funcAsync().then((result) => {
  console.log(result);
});
```

await 키워드를 사용해보자 => 기다리다의 의미를 가지고 있다.

```js
const funcAsync = async () => {
  await delaySecond(3);
  return "async";
};
```

delaySecond가 완료되길 기다렸다가 완료됐을 때 다음 순서인 return 'async'를 수행하게 된다.

#### 자바스크립트의 비동기가 가능한 이유

자바스크립트 역시 싱글 스레드로 한 번에 하나의 코드만 실행시킬 수 있다.
자바스크립트가 비동기가 가능한 이유는 이벤트 루프덕분이다.
이벤트 루프는 자바스크립트가 아닌 브라우저에 내장되어있는 기능 중 하나이다.
즉, 자바스크립트는 싱글 스레드이지만, 브라우저에서는 이벤트 루프 덕분에 멀티 스레드로 동작하여 비동기 작업이 가능하다.

이벤트 루프는 실행 할 함수를 관리하는 역할로 콜 스택과 큐의 함수를 계속 확인한다.
만약 콜 스택이 비어있고 큐에 대기 중인 함수가 있다면, 순차적으로 큐에 대기중인 함수를 콜스택으로 이동시킨다.
