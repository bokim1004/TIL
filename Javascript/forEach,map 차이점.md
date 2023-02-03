#### forEach

배열에만 사용되는 매서드인 forEach는 for문과 마찬가지로 반복적인 기능을 수행한다.
함수를 argument로 받고 각 배열 원소들을 한번 실행한다. 새로운 배열을 리턴하는 map과 달리 undefined를 리턴한다.

```js
const myAwesomeArray = [
  { id: 1, name: "john" },
  { id: 2, name: "Ali" },
  { id: 3, name: "Mass" },
];

myAwesomeArray.forEach((element) => console.log(element.name));
// >>>>>>>>> Output : john
//                    Ali
//                    Mass
```

### Map

map도 배열의 반복문 역할을 하지만 forEach와 다른 점이 있다면 반환값(return 값)이 있다.
map은 함수를 파라미터로 받는다. 새로운 배열을 리턴한다.

```js
const myAwesomeArray = [5, 4, 3, 2, 1];
myAwesomeArray.map((x) => x * x);
// Output:[25,16,9,4,1]
```

### forEach,map차이점

1. 반환 값
   map()과 forEach()의 차이점은 리턴 값이 다르다는 것이다.
   forEach()는 undefined를 리턴하지만 map()은 새로운 배열을 리턴한다.

```js
const myAwesomeArray = [1, 2, 3, 4, 5];
myAwesomeArray.forEach((x) => x * x);
//>>>>>>>>>>>>>return value: undefined

myAwesomeArray.map((x) => x * x);
//>>>>>>>>>>>>>return value: [1, 4, 9, 16, 25]
```

2. Ability to chain other methods

map()은 chainable하다. 이 말은 즉, reduce(), sort(),filter()를 붙일 수 있다는 것을 의미한다.
forEach()는 불가능하다.

```js
const myAwesomeArray = [1, 2, 3, 4, 5];
myAwesomeArray.forEach((x) => x * x).reduce((total, value) => total + value);
//>>>>>>>>>>>>> Uncaught TypeError: Cannot read property 'reduce' of undefined
myAwesomeArray.map((x) => x * x).reduce((total, value) => total + value);
//>>>>>>>>>>>>>return value: 55
```

3. Mutability

`mutable object`란 생성된 후 변경가능한 상태의 객체를 말한다.

map()메소드는 같은 양의 데이터와 변경된 새로운 배열을 리턴한다.
forEach()는 undefined를 리턴하기는 하나 콜백과 함께 기존 배열을 변경할 수 있다.
그러므로 map()은 불변성에 의존하나 forEach()는 변경가능한 메소드이다.

### 결론

반환되는 배열이 필요없다면 map()이 필요없다.
그렇지 않다면 forEach나 For반복문을 쓰면 된다.
배열의 모든 element를 돌거나 반환되는 배열이 필요없다면 forEach를 사용하면 됨
만약 배열이 [1,2,3]이고 forEach()를 사용하면 1/2/3/ 따로 output이 나온다. 그저 배열을 돌 뿐이다. 리턴값은 undefined다.
