> context API란? : 수단일뿐 사실상 상태관리 자체는 리액트 컴포넌트의 useState와
> useReducer로 하는 것이다.

## 리덕스와 어떤 차이점을 가지고 있는가?

리덕스 : 컴포넌트에서 글로벌 상태의 특정 값을 의존하게 될 때, 해당 값이 바뀔
때만 리렌더링되도록 최적화되어있다. 따라서, 글로벌 상태 중 의존하지 않는 값이
바뀌게 될 때에는 컴포넌트에서 낭비 렌더링이 발생하지 않을 것이다. 반면,
context에는 이런 성능 최적화가 이루어지지 않았다.! 컴포넌트에서 만약 context의
특정 값을 의존하는 경우, 해당 값말고 다른 값이 변경될 때에도 컴포넌트에서는
리렌더링이 발생한다.

context를 사용할 때는 관심사 분리가 굉장히 중요하다. 서로 관련없는 상태면 같은
context에 있으면 안되고, context를 따로 따로 만들어야 한다. 그리고
업데이트용과 상태용 context를 분리하는 것도 중요하다.

## useReducer란?

useState: 앱 컴포넌트 내부에서 상태관리 useReducer: 컴포넌트와 상태 업데이트
로직 분리하여 컴포넌트 외부에서도 상태 관리를 할 수 있다.

> state: 현재 상태 / action: 업데이트와 관련된 정보를 가진 객체

useReducer를 사용하면 컴포넌트의 상태 업데이트 로직을 컴포넌트에서 분리시킬 수
있다. reducer는 현재 상태와 액션 객체를 파라미터로 받아와서 새로운 상태를
반환해주는 함수. reducer에서 반환하는 상태는 곧 컴포넌트가 지닐 새로운 상태가
된다. 여기서 Action은 업데이트를 위한 정보를 가지고 있다. 주로 type값을 지닌
객체형태로 사용하지만,꼭 따라야할 규칙은 없다. type값을 대문자와 \_로 구성하는
관습이 있지만 꼭 따르지 않아도 된다.

```js
const [state, dispatch] = useReducer(reducer, initialState);
dispatch({ type: "INCRENMENT", payload: 1 });
```

`state`:앞으로 컴포넌트에서 사용할 수 있는 객체 dispatch:액션을 발생시키는 함수
(dispatch는 setState함수) 컴포넌트에서 관리하는 값이 여러 개가 되어서 상태의
구조가 복잡해진다면 useReducer로 관리하는 것이 편하다.

`payload`:action에서 핵심이 되는 부분으로 데이터를 어떤 store에서 리듀서를
전달하고 싶은지 type:action을 설명하는 key값. payload는 value값이다.
액션객체에는 type이라는 키가 필수로 포함되어야 한다. 보통 payload 키를 넣어
type에 대한 값을 지정한다.

dispatch는 액션을 발생시키며 update를 위한 정보를 가지고 있다.
