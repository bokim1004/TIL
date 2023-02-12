##  MPA VS SPA

### MPA란?
MPA(Multiple Page Application)으로 여러개의 페이지로 이루어진 앱을 의미한다.
페이지 마다 해당하는 문서(HTML)가 있고 페이지 이동 시 해당하는 문서를 서버에서 전송한다.
데이터가 변경될 때마다, 웹 브라우저에 보여주기 위해 새로운 페이지가 서버로부터 요청된다.
이런 과정은 브라우저에 보여주기까지 시간이 걸리기에 user experience에 영향을 줄 수 있다,

### MPA장점
1. Performs well on the search engine. SEO에 좋다.
2. Provides a visual map of the web app to the user.

### MPA단점

1. 비교적 개발이 복잡하다.
2. 백엔드와 프론트가 결합되어있다.

### SPA란?

SPA(Single Page Application) 으로 하나의 페이지로 이루어진 앱을 의미한다.
페이지의 이동없이 하나의 페이지에서 내용이 변경되며 보여주는 웹 페이지다.
SPA는 기존 웹 어플리케이션보다 빠르다. 왜냐하면 로직을 서버가 아닌 웹 브라우저에서 실행하기 때문이다. 그리고 처음 페이지 로드된 후, 전체 HTML대신 데이터만 보내지기애 bandwidth를 줄여준다.


### SPA 장점

1.더 빠르고 스무스하다.
2. 개발과 배포가 더 쉽다.
3. 디버그하기 더 좋다.
4. Can be transited to mobile apps by reusing the same backend code.

### SPA 단점

1. SEO에 좋지는 않다. 그러나 서버사이드 렌더링으로 검색엔진에 최적화시킬 수 있다.
2. 사이트 간 스크립팅(cross-site scripting) 때문에 MPA에 비해 보안이 약하다.
3.  SPA는  single sharing link를 제공한다.



참고: https://medium.com/@goldybenedict/single-page-applications-vs-multiple-page-applications-do-you-really-need-an-spa-cf60825232a3
