### Array.prototype.filter()

filter()메서드는 주어진 함수의 테스트를 통과하는 모든 요소를 모아 새로운 배열로 반환한다.

```js
const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

const result = words.filter(word => word.length > 6);

// Expected output: Array ["exuberant", "destruction", "present"]

```

### Array.prototype.reduce()

reduce()메소드는 배열의 각 요소에 대해 주어진 리듀서 함수를 실행하고, 하나의 결과값을 반환한다.
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
3. 현재 인덱스(idx)
4. 원본 배열(src)

리듀서 함수의 반환값은 누
