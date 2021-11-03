<h1>변수</h1>;

<div>
  {" "}
  변수는 값을 저장(할당)하고 그 저장된 값을 참조하기 위해 사용한다. 한번 쓰고
  버리는 값이 아닌 유지(캐싱)할 필요가 있는 값은 변수에 담아 사용한다. 또한 변수
  이름을 통해 값의 의미를 명확히 할 수 있어 코드의 가독성이 좋아진다. 변수는
  위치(주소)를 기억하는 저장소이다. 위치란 메모리 상의 주소(address)를 의미한다.
  즉, 변수란 메모리 주소에 접근하기 위해 사람이 이해할 수 있는 언어로 지정한
  식별자이다.
</div>;

<h1>데이터 타입</h1>;

<div>자바스크립트의 모든 값은 데이터 타입을 갖는다.7가지 데이터 타입</div>;
<div>원시 타입(primitive data type)</div>;
<div>number,string,boolean,null,undefined,symbol</div>;

<div>객체 타입(object data type)</div>;
<div>object</div>;

<h1>연산자</h1>;
<div>
  연산자는 하나 이상의 표현식을 대상으로 산술, 할당, 비교, 논리, 타입 연산 등을
  수행해 하나의 값을 만든다.
</div>;
//산술 연산자
var area = 5 * 4;
//문자열 연결 연산자
var str = "My name is" + "Lee";
//할당 연산자
var color = "red";
//논리 연산자
var bar = 5 > 3 && 2 < 4; //true
//인스턴스 생성 연산자
var today = new Date();
