## React.memo를 사용한 컴포넌트 리렌더링 방지

컴포넌트의 props가 바뀌지 않았다면, 리렌더링을 방지하여 컴포넌트의 리렌더링 성능 최적화를 해줄 수 있는
`React.memo`라는 함수에 대해 알아보자.
이 함수를 사용한다면 컴포넌트에서 리렌더링이 필요한 상황에서만 리렌더링을 하도록 설정해줄 수 있다.

```js
const CreateUser = ({ username, email, onChange, onCreate }) => {
  return (
    <div>
      <input
        name="username"
        placeholder="계정명"
        onChange={onChange}
        value={username}
      />
      <input
        name="email"
        placeholder="이메일"
        onChange={onChange}
        value={email}
      />
      <button onClick={onCreate}>등록</button>
    </div>
  );
};

export default React.memo(CreateUser);
```

렌더링 최적화하지 않을 컴포넌트에 React.memo를 사용하는 것은, 불필요한 props 비교만 하는 것이기에 실제로 렌더링을 방지할 수 있는 상황이 있는 경우에만 사용해야 한다.

컴포넌트가 React.memo()로 래핑될 때, React는 컴포넌트를 렌더링하고 결과를 메모이징한다. 그리고 다음 렌더링이 일어날 때 props가 같다면, React는 메모이징된 내용을 재사용한다.

## 언제 React.memo()를 써야할까

React.memo()는 함수컴포넌트에 적용되어 같은 props에 같은 렌더링 결과를 제공한다.
React.memo()를 사용하기 가장 좋은 케이스는 함수형 컴포넌트가 같은 props로 자주 렌더링될거라 예상될 떄이다.

> 컴포넌트가 같은 props로 자주 렌더링되거나, 무겁고 비용이 큰 연산이 있는 경우, React.memo()로 컴포넌트를 래핑할 경우가 있다.
