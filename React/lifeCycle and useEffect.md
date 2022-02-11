## react life cycle

class 컴포넌트 때는 라이프 사이클이 컴포넌트에 중심이 맞춰져 있었다.
클래스가 마운트되려고 할 때(componentWillMount),마운트되고나서 (componentDidMount),
업데이트되었을때(componentDidUpdate),언마운트(componentWillUnmount)될 때 실행됐다.

그러나, 함수형 컴포넌트에서는 좀 다르게 적용한다. 특정 데이터에 대해서 라이프 사이클이 진행된다.
데이터는 여러개 일 수 있으므로, 클래스 컴포넌트에서는 componentWillMount, componentDidMount, componentDidUpdate, componentWillUnmount를 컴포넌트 당 한 번씩만 사용했다면, useEffect는 데이터의 개수에 따라 여러 번 사용하게 된다.

```js
useEffect(() => {
  console.log("hidden changed");
}, [hidden]);
```

위 코드는 컴포넌트가 첫 렌더링될 때 한번 실행되고, 그 다음부터는 hidden이 바뀔때마다 실행된다.
즉, componentDidMount와 componentDidUpdate가 합쳐진 셈.

componentWillUnmount의 역할도 담당할 수 있다. return으로 함수를 제공하면 된다.

```js
useEffect(() => {
  console.log("hidden changed");
  return () => {
    console.log("hidden이 바뀔 예정입니다");
  };
}, [hidden]);
```

마운트될 때 처음 한번만 실행하고 싶다면 빈 배열을 넣어주면 된다.

```js
useEffect(() => {
  console.log("mounted");
  return () => {
    console.log("unmount");
  };
}, []);
```

반대로 컴포넌트가 리렌더링될 떄마다 실행하게 할 수도 있다. 두번째 배열을 아예 안 넣으면 데이터와 관련없이 리렌더링시마다 실행된다.

```js
useEffect(() => {
  console.log("rerendered");
});
```
