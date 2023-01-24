### useEffect clean up function

```ts
useEffect(()=>{
console.log("effect runs!")(1)(4)

//return a clean up function
return () =>{
console.log("wait! before running the effect, I should clean here")(2)
// clear something from the previous effect
console.log("okay done! you can run ")(3)
}


},[toggle])
```

=> 콘솔 찍힌게 보면
1) effect runs 가 맨 처음 찍힌다.
2) clean up function이 실행된다.
3) clean up이 끝났다.
4) 다시 effect runs가 찍힌다.

=> 메모리 누수를 막아주고 우리의 앱 속도를 더 빠르게 해준다는 장점이 있다.

#### 예시

```ts
useEffect(()=>{
console.log("effect")
const interval = setInterval(()=>{
  setNumber(prev =>prev+1);
  },1000);
  
return () =>{
 clearInterval(interval)
}
},[]);

```
매 렌더마다 interval을 클린한다. 메모리에 자리를 항상 차지하지 않게 된다


### useEffect 2번 호출

api call을 하는 함수를 하나 작성했고, 그것을 useEffect 빈 배열로 호출이 되게 해주었다.
그런데 React 18부터 development with StrictMode에서는 useEffect가 2번 호출된다고 한다.

production에서는 이런 현상이 없다고 한다. 그것도 모르고 왜 자꾸 api호출이 2번되지 찾아보고 있었네 ㅠㅠ..

