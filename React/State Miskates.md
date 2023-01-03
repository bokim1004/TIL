### State Mistakes Every Junior React Developer Makes

**1. setState를 할 때, functional update approach를 하자.**

```ts
const [number,setNumber] =useState(0);

const increase = () =>{
setNumber(number +1 );
}

const increaseAsync = () =>{
setTimeout(()=>{
//이렇게 하면 새로 number를 만드는게 아니라 메모리에서 현재값을 업데이트하게 되는 것이다.
setNumber((prev)=>prev+1);
},2000)
}

```
만약에 increaseAsync함수 안에 setNumber를 `setNumber(number+1)` 이렇게 해버리면
increaseAsync버튼 누르고 2초 안기다리고 increase를 여러번 눌렀을 때, increase 여러번 누른 값 (ex 8) 은 기억 못하고 increaseAsync함수에서 2초 지나고 1개 플러스 된 값 (ex.3)으로 보여지게 된다. 된다.
그래서 이런 경우엔 functional update approach를 사용하자.

**2. useState 객체 값에서 특정 값만 바꾸고 싶을 경우**

```ts
const [user,setUser] = useState({
name:"john",
email:"john@gmail.com",
images:["profile.png","cover.png"]
})

const changeUser=() =>{
setUser((prev) =>({...prev, name:input})));
}
위와같이 작성하면 name값만 input값으로 변경시킬 수 있다.
```

**3. 여러개의 input값에 대한 상태관리를 하는 법**
- 각각의 값에 대해 useState를 만들 필요가 없다.

```js
const [user,setUser]=useState ({
name:"",
surName:"",
email:"",
password:"",
country:""
})

const handleChange = (e) =>{
각각의 name이 다르니 그에 대한 값도 다르게 할 수 있는 것이다.
setUser(prev => ({...prev,[e.target.name]:e.target.value}))
}
아래에서 name값을 각각 지정해준다.
<input type="text" name="name" onChange={handleChange} />
<input type="text" name="surName" onChange={handleChange} />
<input type="text" name="email" onChange={handleChange} />
<input type="text" name="password" onChange={handleChange} />
<input type="text" name="country" onChange={handleChange} />
```
