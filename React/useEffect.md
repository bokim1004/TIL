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
