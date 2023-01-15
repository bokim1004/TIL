### Restful API란?


API는 `어플리케이션 간에 지정된 형식으로 요청과 응답을 할 수 있도록 연결하는 수단`이다.
Rest API는 인터넷 식별자 URI (Uniform Resource Identifier)와 HTTP를 기반으로 하고 브라우저 간 호환성이 좋은 JSON형식을 주로 사용한다.
`Rest의 가장 중요한 특성은 각 요청이 어떤 정보나 동작을 위한 것인지, 그 요청의 모습 자체만으로 추론이 가능하다.`
Rest는 문서, 그림, 데이터등의 자원을 이름으로 구분해서 해당 자원에 대한 상태, 정보를 주고받는 것을 의미한다.

Restful하게 만든 API는 요청을 보내는 주소만으로도 대략 이게 뭘하는 요청인지 파악이 가능하다.
서버에 Rest API로 요청을 보낼 때는 HTTP라는 규약에 따라 신호를 전송한다,
Rest API에서는 다양한 HTTP Method중에서도 (Get,Post,Put,Delete,Patch)4가지 혹은 5가지를 사용한다.

<br/>
API만들 때, 데이터를 주고받는 기능도 함께 넣는다.
Restful API에서는 CRUD를 하나의 주소로 관리한다.

> Create(생성): POST,
> Read(불러와줘):Get,
> Update(바꿔줘):Put(전체),
> patch(일부만 변경), Delete(지워줘):DELETE

**결국, Rest API는 HTTP요청을 할 때, 어떤 URI에 어떤 method를 사용할지에 대한 개발자들 사이에서 사용되어지는 약속이다.**
클라이언트는 서버로 다양한 형식을 통해 정보를 보낼 수 있다. 현재 가장 유명한
형식은 JSON이다. JSON은 중괄호로 시작하며 key,value로 이루어져있다.

//{키(key) :값(value)}

JSON활용 예 1.그 정보는 JSON으로 보냈다. 2.로그인 API응답보낼 때 JSON안에 같이
넣어서 보낼게요!

클라이언트와 서버는 요청과 응답을 주고받고, 그때 필요한 데이터들을
JSON형식으로 주고 받는다.

### 인터페이스?
기계와 인간간의 소통창구를 인터페이스라고 한다.
사용자가 명령을 넣는 것뿐 아니라 그 결과와 정보들을 받아오기 위한 티비의 스크린, 컴퓨터의 모니터또한 인터페이스에 속한다.
컴퓨터와 인간의 소통을 위한 것이 User Interface라고 한다.

참고: https://www.youtube.com/watch?v=iOueE9AXDQQ

