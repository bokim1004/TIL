<div>Restful API란?</div>;

<div>
  API는 클라이언트, 서버와 같은 서로 다른 프로그램에서 요청과 응답을 주고받을 수
  있게 만든 체계
</div>;
<div>API만들 때, 데이터를 주고받는 기능도 함께 넣는다.</div>;
<div>Restful API에서는 CRUD를 하나의 주소로 관리한다.</div>;
<div>
  Create(생성): POST,{`n`}
  Read(불러와줘):Get, {`n`}
  Update(바꿔줘):Put(전체),{`n`}
  patch(일부), Delete(지워줘):DELETE
</div>;

<div>
  정리해보면 API는 소프트웨어가 다른 소프트웨어의 기능을 쓰기 위해 중간에 필요한
  체계. 쉽게 말해 기능을 사용하기 위해 주소로 요청을 보내면 응답을 해주는
  소프트웨어의 체계
</div>;
<div>
  클라이언트는 서버로 다양한 형식을 통해 정보를 보낼 수 있다. 현재 가장 유명한
  형식은 JSON이다. JSON은 중괄호로 시작하며 key,value로 이루어져있다.
</div>;
//{키(key) :값(value)}
<div>
  JSON활용 예 1.그 정보는 JSON으로 보냈다. 2.로그인 API응답보낼 때 JSON안에 같이
  넣어서 보낼게요!
</div>;
<div>
  클라이언트와 서버는 요청과 응답을 주고받고, 그때 필요한 데이터들을
  JSON형식으로 주고 받는다.
</div>;
