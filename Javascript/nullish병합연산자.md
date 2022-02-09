## nullish 병합 연산자

nullish병합 연산자 ??를 사용하면 짧은 문법으로 여러 피연산자 중 그 값이 '확정되어있는' 변수를 찾을 수 있다.
`a ?? b `의 평가 결과는 다음과 같다.

- a가 null도 아니고 undefined도 아니면 a
- 그 외의 경우는 b

```js
let firstName = null;
let lastName = null;
let nickName = "바이올렛";

//null이나 undefined가 아닌 첫번째 피연산자
alert(firstName ?? lastName ?? nickName ?? "익명의 사용자"); //바이올렛
```

### ??와 ||의 차이

nullish 병합 연산자는 ||와 상당히 유사해 보인다.
그런데 두 연산자 사이에는 중요한 차이점이 있다.

- ||는 첫번째 truthy값을 반환한다.
- ??는 첫번째 정의된 값을 반환한다.

```js
height = height ?? 100;
//height에 값이 정의되지 않은 경우 height엔 100이 힐당된다.
이제 ??와 ||을 비교해보자.
let height=0;
alert(height ||100);//100
alert(height ?? 100);//0;
```

`height ||100`은 height에 0을 할당했지만 0을 falsy한 값으로 취급했기에 null이나 undefined를 할당한 것과 동일하게 처리한다.
반면, `height ??100`의 평가 결과는 height가 정확하게 null이나 undefined일 경우에만 100이 된다.
