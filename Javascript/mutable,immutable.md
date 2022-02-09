## immutable과 mutable은 무엇이 다른 것인가요?

`Mutable한 객체`는 생성된 이후에 상태가 변경될 수 있는 객체이고, `immutable한 객체`는 생성된 이후에 상태가 변경되지 않는 객체를 말한다.
자바스크립트에서 Object와 Array를 제외한 모든 타입은 Immutable한 타입이다.

## Immutable

Immutable객체는 내용이 변하지 않는 객체를 말한다.
객체는 다양한 이유로 불변적일 수 있는데, 아래예시를 한번 보자.

- 성능을 향상시키기 위함( 객체가 미래에 변할 계획이 없을 때)
- 메모리 사용을 줄이기 위함(전체 객체를 복사하지 않고 객체 참조를 만듦)
- Thread-safety(쓰레드끼리 자원 공유할 때 안전하다는 뜻 같음)
  여러개의 쓰레드가 서로 간섭하지 않고 같은 객체를 참조할 수있음

## Mutable

Mutable은 바뀔 수 있는 변수 타입을 말한다. Javascript에서는 object와 array만 Mutable한 타입이고, 원시타입은 Immutable하다.

#### 가장 핵심적인 것은 mutable은 원본 데이터를 변화시키려는 속성이 있고, immutable은 원본데이터를 유지하려는 속성이 있다.
