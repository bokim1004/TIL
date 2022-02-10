## 타입스크립트의 장점

1. typescript를 사용하는 가장 큰 이유 중 하나는 정적타입을 지원한다는 거이다.

```js
function sum(a: number, b: number) {
  return a + b;
}
sum("x", "y");
```

Typescript는 정적 타입을 지원하므로 컴파일 단계에서 오류를 포착할 수 있는 장점이 있다.
명시적인 정적 타입 지정은 개발자의 의도를 명확하게 코드로 기술할 수 있다.

## type과 interface의 차이는 무엇인가요?

> 타입을 확장하는 방법
> type과 interface는 타입을 확장하는 방법에 차이가 있다.
> Type은 &연산자, interface는 extends키워드를 이용한다.

```js
interface Istudent2 extends IStudent {
  age: number;
}
type TStudent2 = TStudent & {
  age: number,
};
```

> interface의 경우 동일한 이름으로 다시 interface를 정의해 확장하는 것이 가능하다.

```js
interface IStudent {
  id: number;
  name: string;
}
interface IStudent {
  age: number;
}
```

## 어떨 때에 JS를 쓰고 어떨 때에 TS를 쓰는 것이 좋을까?

- Javascript는 비교적 작은 프로젝트에 적합하고 Typescript는 대규모 프로젝트에 적합하다.
- Typescript는 객체지향 언어이므로 코드 재사용,단순,깨끗,일관성 등 다양한 장점을 가짐

## enum은 무엇인가? object와의 차이점은?

enum은 열거형을 의미한다.
Enum은 값들의 집합을 명명하고 이를 사용하도록 만든다.

```js
enum MyStatus {
sleep = '자는 중';
study='공부하는 중';
play='노는 중';
work='일하는 중';
}
```

> 객체와의 차이?

- object는 코드 내에서 새로운 속성을 자유롭게 추가할 수 있지만, enum은 선언할 떄 이후에 변경할 수 없다.
- object 속성값은 JS가 허용하는 모든 타입이 올 수 있지만, enum의 속성값으로는 문자열 혹은 숫자만 가능하다.
