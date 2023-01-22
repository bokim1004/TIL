### Array.prototype.filter()

filter()메서드는 주어진 함수의 테스트를 통과하는 모든 요소를 모아 새로운 배열로 반환한다.

```js
const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

const result = words.filter(word => word.length > 6);

// Expected output: Array ["exuberant", "destruction", "present"]

```

### Array.prototype.reduce()

reduce()메소드는 배열의 각 요소에 대해 주어진 리듀서 함수를 실행하고, 하나의 결과값을 반환한다.
배열의 각 요소를 순회하며 callback함수의 실행 값을 누적하여 결과값을 반환한다.
```js
const array1 = [1, 2, 3, 4];

// 0 + 1 + 2 + 3 + 4
const initialValue = 0;
const sumWithInitial = array1.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  initialValue
);

console.log(sumWithInitial);
// Expected output: 10
```

리듀서 함수는 네개의 인자를 가진다.
1. 누산기 (acc)
2. 현재 값 (cur)
3. 현재 인덱스(idx) =>optional
4. 원본 배열(src) =>optional

리듀서 함수의 반환값은 누산기에 할당되고, 누산기는 순회 중 유지되므로 결국 최종결과는 하나의 값이 된다.

`arr.reduce(callback[, initialValue])`

callback: 배열의 각 요소에 대해 실행할 함수, 다음 네가지 인수를 받는다
accumulator: 누산기는 콜백의 반환값을 누적한다.콜백의 첫 번째 호출이면서 initialValue를 제공한 경우에 initialValue의 값이다.
currentValue: 처리할 현재요소
currentIndex: 처리할 현재 요소의 인덱스

reduce()는 빈 요소를 제외하고 배열 내에 존재하는 각 요소에 대해 callback함수를 한번씩 실행하는데, 콜백함수는 네 인수를 받는다(accumulator,currentValue,currentIndex,array)




