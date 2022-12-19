## HTTP

Hyper Text Transfer Protocol로, 인터넷에서 데이터를 주고받을 수 있는 프로토콜(규칙)
모든 프로그램이 이 규칙에 맞춰 개발해서 서로 정보를 교환할 수 있게 된 것이다.

HTTP는 클라이언트가 요청을 생성하기 위한 연결을 연 다음 응답을 받을 때까지 대기하는 전통적인 클라이언트-서버 모델을 따른다.
HTTP는 무상태 프로토콜이며, 이는 서버가 두 요청 간에 어떠한 상태나 데이터를 유지하지 않음을 의미한다.

## HTTP 동작방식

클라이언트가 브라우저를 통해서 어떠한 서비스를 URI를 통해 서버에 요청하면 서버에서는 해당 요청에 대한 결과를 응답하는 형태로 동작한다.

## HTTP 요청 메서드

`GET` : 특정 리소스를 받기 위한 요청. 리소스의 생성, 수정 및 삭제 등에 사용해서는 안된다.
`POST`: 리소스를 생성하거나 컨트롤러를 실행하는데 사용한다.
`PUT`: 변경가능한 리소스를 업데이트하는데 사용되며 항상 리소스 식별 정보를 포함해야 한다.
`PATCH`:변경가능한 리소스의 부분 업데이트에 사용된다. (PUT을 사용해 전체 객체를 업데이트하는 것이 관례여서 거의 사용되지 않는다)
`DELETE`:특정 리소스를 제거하는 데 사용한다.

## http 1.1 과 http 2.0의 차이는 무엇인가?

HTTP1.1은 기본적으로 연결당 하나의 요청과 응답을 처리하기에 동시전송 문제와 다수의 리소스를 처리하기에 속도와 성능이슈를 가지고 있다.
그렇기에, 특정응답지연, 헤비한 Header구조라는 문제점등을 가지고 있었다.
HTTP2가 세상에 등장했다. 이는 성능뿐만 아니라 속도면에서도 월등하다. 한 커넥션에 여러 개의 메세지를 동시에 주고 받을 수 있고,
요청 리소스 간 의존관계를 설정하고, HTML문서상에 필요한 리소스를 클라이언트 요청없이 보낼 수 있고, Header정보를 압축전송할 수 있다.
