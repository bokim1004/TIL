## 자바스크립트 비동기 처리

비동기 처리란 무엇일까요?현재 실행 중인 것이 완료되지 않더라도 다음 코드를 먼저 실행하는 방식이다.
비동기처리는 동시에 여러 작업을 가능하게한다는 장점이 있지만, 비동기 함수가 많을 경우 어떤 코드가 먼저 실행되는지 알 수 없고 가독성이 나쁘다.
이런 문제를 해결하기 위해 여러 비동기 프로그래밍 방법이 생겼고 크게 콜백 함수, Promise,async/await 패턴이 존재한다.

`동기` : 요청을 보낸 후 해당 응답을 받아야 다음 동작을 실행 (ex.은행)
`비동기` : 요청을 보낸 후 응답에 관계없이 다음 단계를 실행 (ex.카페)



비동기 방식을 처리하는 방법으로 콜백함수, promise,async/await이 있다.

## 콜백함수 

콜백은 다른 함수가 실행을 끝낸 뒤 실행되는(콜백되는) 함수를 말한다.
자바스크립트에서 함수는 객체이다. 이 때문에 함수는 다른 함수의 인자로 쓰일 수도, 어떤 함수에 의해 리턴될 수도 있다. 이런 함수를 고차 함수라고 부르고 인자로 넘겨지는 함수를 콜백 함수라고 부른다.
즉, 콜백함수는 다른 함수에 매개변수로 넘겨진 함수를 의미한다.
또 다른 표현으로는 함수 안에서 실행하는 또 다른 함수라고 할 수 있다.

간단한 예시

```js
function fn(arg) {
   arg();
}

val = function() { console.log("callback"); }

fn(val)
```

fn함수 선언부를 보면 arg라는 매개변수를 받아서, arg();를 함수로 호출하고 있다.
fn은 arg라는 함수를 받아서 호출하는 함수라는 것을 알 수 있다.
val이라는 함수는 지금 바로 실행되지 않지만 다른 함수의 입력값으로 전달되어 다른 함수에 의해 나중에 호출되게 되는 것이다.

`또 다른 예시`


```js
function doHomework(subject) {
  alert(`Starting my ${subject} homework.`);
}
```
doHomework() 함수의 두 번째 인자로 callback을 넘겨줌으로써 콜백 함수를 추가해보자. 
이제 우리는 doHomework() 함수를 호출할 때 두 번째 인자 자리에서 콜백 함수를 정의할 수 있다.

```js
function doHomework(subject, callback) {
  alert(`Starting my ${subject} homework.`);
  callback();
}

doHomework('math', function() {
  alert('Finished my homework');
});
```


콜백함수의 단점은 콜백지옥에 빠질 수 있다는 것.
`콜백지옥`이란 javascript를 이용한 비동기 프로그래밍시 발생하는 문제로, 함수의 매개변수로 넘겨지는 콜백함수가 반복되어 코드의 들여쓰기 수준이 감당하기 힘들정도로 깊어지는 현상을 말한다. 이런 코드는 가독성이 떨어지고 코드를 수정하기 어려워진다.

##  Promise

```js
const promiseData = new Promise((res, rej) => {
  res("something data");
});
promiseData.then((data) => {
  console.log(data);
});
```
Promise는 비동기 작업을 대기(pending), 성공(fulfill), 실패(reject)의 상태로 표현하는 자바스크립트 객체이다.
대기 중인 promise는 값과 함께 성공할 수도 실패할 수도 있다.
`new Promise()`와 같이 Promise객체를 생성하면 대기 상태가 된다.
Promise를 정의할 때에 인자값으로 resolve(res),reject(rej) 인자 값을 전달한다. 그리고 안에서 res로 어떤 값을 전달한다.
rej는 에러를 전달한다.
promise객체를 담은 변수에 then을 사용하여 전달받은 data를 console.log(data)로 콘솔창에 출력하는 것을 볼 수 있다.
`then은 작업수행이 완료되면 실행이 되게 된다.`
프로미스를 사용하면, 비동기 메서드를 마치 동기 메서드처럼 값을 반환할 수 있다.

프로미스의 비동기 처리 상태가 변화하면 이에 따른 후속처리를 해야 한다.
예를 들어, 프로미스가 fulfilled상태가 되면 프로미스의 처리 결과를 가지고 무언가를 해야 하고,
rejected상태가 되면 프로미스의 처리 결과를 가지고 에러처리를 해야 한다.
이를 위해 프로미스는 후속처리 메서드 `then,catch,finally`를 제공한다.


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

### promise 단점?

에러를 잡을 때, 몇번째에서 발생했는지 알아내기도 어렵고 특정 조건에 따라 분기를 나누는 작업도 어렵고,
특정 값을 공유해가면서 작업을 처리하기도 까다롭다.


## async/await

ES8에서 보다 간단하고 가독성 좋게 비동기 처리를 동기 처리처럼 구현하는 async/await가 도입되었다.
프로미스의 후속처리 메서드(then,catch,finally)없이 마치 동기처리처럼 프로미스가 처리 결과를 반환하도록 구현할 수 있다.

async/await은 promise를 기반으로 동작하며, then/catch/finally같은 후속 처리 메서드 없이 마치 동기처럼 사용할 수 있다.
즉, promise를 더욱 쉽게 사용할 수 있게 해준다.
함수 앞에 async를 붙이면 해당 함수는 자동으로 프로미스를 반환하게 된다. 비동기로 처리되는 부분에 await를 붙이면 해당 프로미스가 끝날 때까지 기다린다. 리턴 값은 resolve()값과 같다.

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

### try-catch

try-catch문을 사용하면 에러 발생 시 스크립트가 죽는 것을 방지하고 에러 상황을 잡아 예외처리를 할 수 있다.

#### 자바스크립트의 비동기가 가능한 이유

자바스크립트 역시 싱글 스레드로 한 번에 하나의 코드만 실행시킬 수 있다.
자바스크립트가 비동기가 가능한 이유는 이벤트 루프덕분이다.
이벤트 루프는 자바스크립트가 아닌 브라우저에 내장되어있는 기능 중 하나이다.
즉, 자바스크립트는 싱글 스레드이지만, 브라우저에서는 이벤트 루프 덕분에 멀티 스레드로 동작하여 비동기 작업이 가능하다.

이벤트 루프는 실행 할 함수를 관리하는 역할로 콜 스택과 큐의 함수를 계속 확인한다.
만약 콜 스택이 비어있고 큐에 대기 중인 함수가 있다면, 순차적으로 큐에 대기중인 함수를 콜스택으로 이동시킨다.

참고:https://medium.com/@oasis9217/%EB%B2%88%EC%97%AD-javascript-%EB%8F%84%EB%8C%80%EC%B2%B4-%EC%BD%9C%EB%B0%B1%EC%9D%B4-%EB%AD%94%EB%8D%B0-65bb82556c56
