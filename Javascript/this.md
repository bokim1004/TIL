### this란 무엇인가?

자바스크립트 함수는 호출될 때, 매개변수로 전달되는 인자값 이외에, arguments객체와 this를 암묵적으로 전달 받는다.


```js
function square(number) {

console.log(arguments)
console.log(this);
return number * number ;
}

square(2);
```

### 함수 호출방식과 this 바인딩

자바스크립트의 경우 함수 호출 방식에 의해 this에 바인딩할 어떤 객체가 동적으로 결정된다. 
다시말해, 함수를 선언할 때 this에 바인딩할 객체가 정적으로 결정되는 것이 아니라 `함수를 호출할 때 함수가 어떻게 호출되었는지에 따라 this에 바인딩할 객체가 동적으로 결정된다.`

함수를 호출하는 방식은 아래와 같다.

```js

var foo = function () {
  console.dir(this);
};
//1. 함수호출
foo();

//2. 메소드 호출

var obj = {foo:foo};
obj.foo(); //obj

//3.생성자 함수 호출
var instance = new foo(); //instance

//4.apply/call/bind 호출
var bar = {name:'bar'};
foo.call(bar); //bar
foo.apply(bar); //bar
foo.bind(bar); /bar
```

### 1. 함수 호출

전역 객체는 모든 객체의 유일한 최상위 객체를 의미하며 일반적으로 browser-side에서는 window,Server-side(Node.js)에서는 global객체를 의미한다.
```js
//in browser console
this === window //true

// in Terminal
this === global //true
```
전역 객체는 전역 스코프를 갖는 전역 변수를 프로퍼티로 소유한다. 글로벌 영역에 선언한 함수는 전역객체의 프로퍼티로 접근할 수 있는 전역 변수의 메소드다.

```js
var ga = 'Global variable';
console.log(ga);
console.log(window.ga);

function foo() {
console.log('invoked');
}
window.foo();
```

기본적으로 this는 전역객체에 바인딩된다. 전역함수는 물론이고 내부함수의 경우도 this는 외부함수가 아닌 전역객체에 바인딩된다.

```js
function foo() {
  console.log("foo's this: ",  this);  // window
  function bar() {
    console.log("bar's this: ", this); // window
  }
  bar();
}
foo();
```
