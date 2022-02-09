## Optional chaining

`optional chaining연산자(?.)`는 체인의 각 참조가 유효한지 명시적으로 검증하지 않고, 연결된 객체 체인 내에 깊숙이 위치한 속성값을 읽을 수 있다.

객체의 속성값에 대해 접근할 수 있고, 참조하는 대상이 null이나 undefined가 아니라면 속성에 대한 접근이 가능하며, 만약 nullish할 경우 undefined를 반환한다.

=> 데이터가 있는지 없는지 확인작업해줄 때 필수!! (데이터가 null이거나 undefined일 수 있기에)
