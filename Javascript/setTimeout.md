### setTimeout(callback, 0) 은 어떻게 동작하는가?

`setTimeout`은 일정 시간 간격 이후에 함수가 한번 실행된다.
setTimeout함수는 WebAPI함수인데, 해당함수의 인자로 콜백 함수를 넣는 행위 자체가 이벤트 큐로 이동하는 것이다.

`setTimeout(()=>{console.log('hello');},500)`
위 코드를 보면 0.5초 뒤에 이벤트 큐로 들어가게 된다.
