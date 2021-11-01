<div>브라우저 동작원리</div>;

<div>
  브라우저의 핵심 기능은 사용자가 참조하고자 하는 웹페이지를 서버에 요청하고
  서버에 응답을 받아 브라우저에 표시하는 것 브라우저는 서버로부터
  HTML,CSS,JS,이미지 파일등을 응답받는다. HTML,CSS파일은 렌더링 엔진의
  HTML파서와 CSS파서에 의해 파싱되어 DOM,CSSOM 트리로 변환되고 렌더트리로
  결합된다. 이렇게 생성된 렌더트리를 기반으로 브라우저는 웹페이지를 표시한다.
  JS는 렌더링 엔진이 아닌 자바스크립트 엔진이 처리한다. HTML파서는 script태그를
  만나면 자바스크립트 코드를 실해앟기 위해 DOM생성 프로세스를 중지하고
  자바스크립트 엔진으로 제어 권한을 넘긴다. 제어권한을 넘겨받은 자바스크립트
  엔진은 script태그 내의 자바스크립트 코드 또는 script태그의 src attribute에
  정의된 자바스크립트 파일을 로드 파씽하여 실행한다. 자바스크립트 실행이
  완료되면 다시 HTML 파서로 제어권한을 넘겨서 브라우저가 중지했떤 시점부터
  DOM생성을 재개한다.
</div>;

<div>
  이처럼 브라우저는 동기적으로 HTML,CSS,JS를 처리한다.이는 script태그 위치에
  따라 블로킹이 발생하여 DOM생성이 지연될 수 있다는 것을 의미한다. body요소의
  가장 아래에 자바스크립트를 위치시키는 것이 좋다/ 왜?? HTML요소들이 스크립트
  로딩 지연으로 인해 렌더링에 지장받는 일이 발생하지 않아 페이지 로딩 시간이
  단축된다. DOM이 완성되지 않은 상태에서 자바스크립트가 DOM을 조작한다면 에러가
  발생한다
</div>;
