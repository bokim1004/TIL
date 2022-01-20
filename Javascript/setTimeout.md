### setTimeout(callback, 0) 은 어떻게 동작하는가?

`setTimeout`은 일정 시간 간격 이후에 함수가 한번 실행된다.
setTimeout함수는 WebAPI함수인데, 해당함수의 인자로 콜백 함수를 넣는 행위 자체가 이벤트 큐로 이동하는 것이다.

`setTimeout(()=>{console.log('hello');},500)`
위 코드를 보면 0.5초 뒤에 이벤트 큐로 들어가게 된다.

차례대로 살펴보면,

1. 코드블록에서 해당 코드가 실행되면서 call stack에 올라온다.
2. setTimeout을 JS의 콜스택에서 실행한다.
3. JS의 콜스택에서는 setTimeout에 관련된 액티브 레코드가 제거된다.
4. 그리고 브라우저는 setTimeout을 실행한다.
5. 현재는 콜스택과 QUEUE에 아무것도 없으므로 EVENT LOOP은 동작을 기다리며 뺑글뺑글 돌고있다.
6. 브라우저에서 등록된 setTimeout실행을 끝냈다. 그러면 해당 메서드에 전달됐던 콜백이 Queue로 넘어간다.
7. Event Loop는 런타임 환경을 살펴보다 QUEUE에 콜백 메서드가 들어온걸 발견했고 여기서 멈춘다.
8. JS의 콜스택을 확인한다. 만약 콜스택에서 무언가 실행되고 있다면 EVENT LOOP는 QUEUE에 대기한채 기다리고 있는다.
9. JS의 콜스택이 비어졌고 그러면 이제 EVENT LOOP는 QUEUE에 있는 콜백메서드를 JS의 콜스택으로 이동시킨다.
10. 이동된 콜백메서드는 이제 실행이된다.
