### 크로스도메인 ,CORS란??

API통신을 할 때, CORS 에러가 난 경우가 몇번 있었다.
CORS관련 이슈는 모두 CORS정책을 위반했기 때문에 발생하는 것이다.
CORS라는 방어막이 존재하기에 우리가 이곳 저곳에서 가져오는 리소스가 안전하다는 최소한의 보장을 받을 수 있다고 한다.

CORS는 Cross-Origin Resource Sharing의 줄임말로 교차 출처 리소스 공유라고 해석할 수 있다. 교차 출처는 다른 출처를 의미하는 것이다.


#### origin 출처가 무엇인가?

서버의 위치를 의미하는 https://google.com과 같은 URL들은 마치 하나의 문자열 같아 보여도, 사실은 여러 개의 구성요소로 이루어져 있다.

<img src="https://velog.velcdn.com/images/chloeee/post/53b04590-29ff-4200-a32b-b15eea18dd04/image.png" width="500px" />

출처는 Protocol과 Host 그리고 위 그림에는 없지만 :80, :443과 같은 포트 번호까지 모두 합친 것을 의미한다. `즉, 서버의 위치를 찾아가기 위해 필요한 가장 기본적인 것들을 합쳐놓은 곳`

또한 출처 내의 포트 번호는 생략이 가능한데, 이는 각 웹에서 사용하는 HTTP, HTTPS 프로토콜의 기본 포트 번호가 정해져 있기 때문이다.

#### Same Origin Policy

SOP는 같은 출처에서만 리소스를 공유할 수 있다라는 규칙을 가진 정책이다.
그러나 웹이라는 오픈 스페이스 환경에서 다른 출처에 있는 리소스를 가져와서 사용하는 일은 굉장히 흔한 일이라 무작정 막을 수 없는 노릇이니, 몇 가지 예외 조항을 두고 이 조항에 해당하는 
리소스 요청은 출처가 다르더라도 허용하기로 했는데, 그 중 하나가 CORS 리소스 요청이다.

다른 출처로 리소스를 요청한다면 SOP정책을 위반한 것이되고, 거기다가 SOP의 예외조항인 CORS 정책까지 지키지 않으면 아예 다른 출처의 리소스를 사용할 수 없게 되는 것이다.


#### 같은 출처는 무엇이고 다른 출처는 무엇인가

1. https://chloe/github.io:80

이 URL 구성 요소 중 Scheme, Host,Port 이 3가지만 동일하면 된다. 
`Scheme` : https://
`Host`: chloe/github.io
`Port`: :80

스킴이 다르거나, 호스트가 다르면 `다른 출처`가 된다.
포트같은 경우는 브라우저 구현에 따라 다르다. 같은 출처일 수도 있고 아닐 수도 있다.

여기서 중요한 사실은 출처를 비교하는 로직이 서버에 구현된 스펙이 아니라 `브라우저에 구현되어있는 스펙`이라는 것이다.

### CORS는 어떻게 동작하는가

그럼 어떤 방법으로 서로 다른 출처를 가진 리소스를 안전하게 사용할 수 있을까?
기본적으로 웹 클라이언트 어플리케이션이 다른 출처의 리소스를 요청할 때는 HTTP프로토콜을 사용하여 요청을 보내게 되는데,
이때 브라우저는 요청 헤더에 Origin이라는 필드에 요청을 보내는 출처를 함께 담아보낸다.
`Origin: https://chloe/github.io`

이후 서버가 이 요청에 대한 응답을 할 때, 응답 헤더의 Access-Control-Allow-Origin이라는 값에 이 리소스를 접근하는 것이 허용된 출처를 내려주고, 이후 응답을 받은 브라우저는 자신이 보냈던 요청의 Origin과 서버가 보내준 응답의 Access-Control-Origin을 비교한 후 이 응답이 유효한 응답인지를 결정한다.

#### Preflight Request

프리플라이트 방식은 일반적으로 웹 어플리케이션을 개발할 때 가장 마주치는 시나리오다. 이 시나리오에 해당하는 상황일 때 브라우저는 요청을 한번에 보내지 않고 예비 요청과 본 요청으로 나누어서 서버로 전송한다.

이 때 브라우저가 본 요청을 보내기 전에 미리 보내는 요청을 예비요청 Preflight이라고 부른다. 이 예비 요청에는 HTTP메소드 중 `Option메소드`가 사용된다. 예비 요청의 역할은 본 요청을 보내기 전 브라우저 스스로 이 요청을 보내는 것이 안전한지 확인하는 것이다.

<img src="https://velog.velcdn.com/images/chloeee/post/2f60cb57-b03a-4bcd-ad31-9185a7ca1e6f/image.png" width="500px" />

우리가 자바스크립트의 fetch API를 사용하여 브라우저에게 리소스를 받아오라는 명령을 내리면 브라우저는 서버에게 예비 요청을 먼저 보내고,
서버는 이 예비요청에 대한 응답으로 현재 자신이 어떤 것들을 허용하고,어떤 것들을 금지하는지에 대한 정보를 응답헤더에 담아서 브라우저에게 다시 보내주게 된다.

이후, 브라우저는 자신이 보낸 예비 요청과 서버가 응답에 담아준 허용 정책을 비교한 후, 이 요청을 보내는 것이 안전하다고 판단되면 같은 엔드 포인트로 다시 본 요청을 보내게 된다. 이후 서버가 본 요청에 대한 응답을 하면 브라우저는 최종적으로 이 응답데이터를 자바스크립트에게 넘겨준다.


```js
OPTIONS https://evanmoon.tistory.com/rss

Accept: */*
Accept-Encoding: gzip, deflate, br
Accept-Language: en-US,en;q=0.9,ko;q=0.8,ja;q=0.7,la;q=0.6
Access-Control-Request-Headers: content-type
Access-Control-Request-Method: GET
Connection: keep-alive
Host: evanmoon.tistory.com
Origin: https://evan-moon.github.io
Referer: https://evan-moon.github.io/2020/05/21/about-cors/
Sec-Fetch-Dest: empty
Sec-Fetch-Mode: cors
Sec-Fetch-Site: cross-site
```
실제로 브라우저가 보낸 요청을 보면, 단순히 Origin에 대한 정보 뿐만 아니라 자신이 예비 요청 이후에 보낼 본요청에 대한 다른 정보들도 함께 포함되어있다.
이 예비 요청에서 브라우저는 `Access-Control-Request-Headers`를 사용하여 자신이 본 요청에서 `Content-Type`헤더를 사용할 것을 알려주거나, `Access-Control-Request-Method`를 사용하여 이후 Get 메소드를 사용할 것을 서버에게 미리 알려주고 있다.

이렇게 티스토리 서버에 예비 요청을 보내면, 이제 티스토리 서버가 이 예비 요청에 대한 응답을 보내준다.

```js
OPTIONS https://evanmoon.tistory.com/rss 200 OK

Access-Control-Allow-Origin: https://evanmoon.tistory.com
Content-Encoding: gzip
Content-Length: 699
Content-Type: text/xml; charset=utf-8
Date: Sun, 24 May 2020 11:52:33 GMT
P3P: CP='ALL DSP COR MON LAW OUR LEG DEL'
Server: Apache
Vary: Accept-Encoding
X-UA-Compatible: IE=Edge
```
티스토리서버는 이 리소스에 접근 가능한출처는 오직 `https://evanmoon.tistory.com`뿐이라고 브라우저에게 얘기해준 것이고,
필자가 이 요청을 보낸 출처는 `https://evan-moon.github.io`이므로 서버가 허용해준 출처와는 다른 출처이다.
결국 브라우저는 이 요청이 CORS정책을 위반했다고 판단하고 에러를 뱉게 된다.

이때 예비 요청에 대한 응답에서 에러가 발생하지 않고 정상적으로 200이 떨어졌는데 콘솔 창에는 빨간 에러가 표시되기에 많은 사람들이 헷갈려한다. CORS 정책위반으로 인한 에러는 예비 요청의 성공여부와 별 상관이 없다.
브라우저가 CORS정책위반 여부를 판단하는 시점은 예비 요청에 대한 응답을 받은 이후이기 때문이다.
물론 예비 요청 자체가 실패해도 똑같이 CORS정책위반으로 처리될 수 있지만, 중요한건 예비 요청의 성공실패 여부가 아니라 응답헤더에 `Access-Control-Allow-Origin` 값이 존재하는가이다.만약 예비 요청이 실패해서 200이 아닌 상태코드가 내려오더라도 헤더에 저 값이 제대로 들어가 있다면 CORS정책 위반이 아니라는 의미다.

어떤 경우엔 예비요청없이 본 요청만으로 CORS정책 위반 여부를 검사하기도 한다.

#### Simple Request

단순 요청은 예비요청을 보내지 않고 바로 서버에게 본 요청부터 한 후, 서버가 이에 대한 응답의 헤더에 `Access-Control-Allow-Origin`과 같은 값을 보내주면 그 때 브라우저가 CORS 정책 위반 여부를 검사하는 방식이다.

<img src="https://velog.velcdn.com/images/chloeee/post/5aa5316c-f1f4-4142-a511-7a93a75ba577/image.png" width="500px" />
  
그러나 아무 때나 단순요청을 하는 것은 아니고 특정 조건을 만족하는 경우에만 예비요청을 생략할 수 있다. 게다가 이 조건이 좀 까다롭기에 일반적인 방법으로 웹 어플리케이션 아키텍쳐를 설계하게되면 거의 충족시키기 어려운 조건들이라 거의 경험하기 어렵다고 한다.


#### Credentialed Request

이 방법은 인증된 요청을 사용하는 방법이다. 이 시나리오는 CORS의 기본적인 방식이라기보다 다른 출처 간 통신에서 좀 더 보안을 강화하고 싶을 때 사용한다.
기본적으로 브라우저가 제공하는 비동기 리소스 요청 API인 XMLHTTPRequest객체라 fetch API는 별도의 옵션없이 브라우저의 쿠키 정보나 인증과 관련된 헤더를 함부로 요청에 담지 않는다. 이 때 요청에 인증과 관련된 정보를 담을 수 있게 해주는 옵션이 바로 Credentials옵션이다.
요청에 인증정보가 담겨있는 상태에서 다른 출처의 리소스를 요청하게 되면 브라우저는 CORS정책위반 여부를 검사하는 룰에 다음 2가지를 추가한다.
1) Access-Control-Allow-ORigin에는 *를 사용할 수 없으며, 명시적인 URL이어야 한다.
2) 응답헤더에는 반드시 Access-Control-Allow-Credentials:true가 존재해야 한다.


### CORS 해결 방법

#### Access-Control-Allow-Origin 세팅하기

CORS정책위반으로 인한 문제를 해결하는 가장 대표적인 방법은, 그냥 정석대로 서버에서 `Access-Control-Allow-Origin`헤더에 알맞은 값을 세팅해주는 것이다. `*`을 사용해서 이 헤더를 세팅하게 되면 모든 출처에서 오는 요청을 받아먹겠다는 것으로 당장은 편하지만,
바꿔 생각하면 정체도 모르는 이상한 출처에서 오는 요청까지 모두 받아먹겠다는 오픈 마인드와 다를 것이 없으므로 보안적으로 심각한 이슈가 발생할 수 있다.
그러니 가급적이면 `Access-Control-Allow-Origin: https://chloe/github.io`같이 출처를 명시해주도록 하자.

#### 프론트에서 CORS 해결하려면?

CORS에러를 가장 많이 마주치는 환경은 바로 로컬에서 프론트엔드 개발을 하는 경우다. 백엔드에는 이미 Access-Control-Allow-Origin헤더가 세팅되어있지만 이 중요한 헤더에다가 `http://localhost:3000`같은 범용적인 출처를 넣어주는 경우는 드물다.

프론트엔드 개발자는 대부분 웹팩과 webpack-dev-server를 사용하여 개발 환경을 구축하는데, 이 라이브러리가 제공하는 프록시 기능을 사용하면 아주 편하게 CORS정책을 우회할 수 있다.

#### 요청을 img태그에 넣으면 어떨까?

SOP정책에는 다른 출처의 리소스에 접근할 수 있는 몇가지 예외 조항이 존재하고, 그 중 하나가 CORS정책을 지킨 요청이다.
CORS정책을 지킨 요청을 제외한 SOP의 예외조항은 실행가능한 스크립트,렌더될 이미지, 스타일 시트정도가 있다.
그럼 다른 예외 조항이 적용된 요청을 보내면 CORS를 우회할 수 있지 않을까?

```js
<img src="https://evanmoon.tistory.com/rss">
<script src="https://evanmoon.tistory.com/rss"></script>
```
물론 이런 식으로 접근하면 CORS를 위반하지 않고 요청 자체는 성공한다. 
그리고 브라우저의 개발자 도구의 네트워크 탭에서 이 요청들의 헤더를 자세히 살펴보면 Sec-Fetch-Mode: no-cors라는 값이 포함되어 있는 것을 볼 수 있다.

Sec-Fetch-Mode 헤더는 요청 모드를 설정하는 필드인데, 브라우저는 이 필드의 값이 no-cors인 경우에는 다른 출처라고 해도 CORS 정책 위반 여부를 검사하지 않는다. 하지만 한 가지 슬픈 점은 브라우저가 이 헤더에 값이 포함된 요청의 응답을 자바스크립트에게 알려주지 않는다는 것이다. 즉, 우리는 코드 레벨에서 절대 이 응답에 담긴 내용에 접근할 수가 없다
CORS를 우회하려는 시도보다는 CORS정책을 지키자.

  
#### 마지막

CORS정책은 브라우저의 구현 스펙이기에 정책위반으로 문제를 겪는 사람은 대부분 프론트엔드 개발자이지만, 정작 문제를 해결하기 위해서는 백엔드 개발자가 서버 어플리케이션의 응답 헤더에 올바른 `Access-Control-Allow-Origin`이 내려올 수 있도록 세팅해줘야 한다.

`webpack-dev-server`의 프로싱 옵션을 사용하여 자체적으로 해결할 수 있지만, 이 방법은 로컬 개발환경에서만 통하는 방법이고 근본적인 문제해결 방법이 아니기에 결국 운영환경에서 CORS정책 위반 문제를 해결하기 위해서는 백엔드 개발자의 도움이 필요하다.
  
#### ajax
  
  Ajax란 Asynchronous JavaScript and XML의 약자이다.
  자바스크립트를 이용해서 비동기식으로 XML을 이용하여 서버와 통신하는 방식이다.
  한마디로 자바스크립트를 통해서 서버에 데이터를 비동기 방식으로 요청하는 것이다.
  비동기식이란 여러가지 일이 동시적으로 발생한다는 뜻으로, 서버와 통신하는 동안 다른 작업을 할 수 있다는 의미한다.

#### XML
  XML은 HTML과 매우 비슷한 문자 기반의 마크업 언어(text-based markup language)이다.
 
#### HTML과 XML의 차이?
  HTML은 웹페이지 구조를 만들기 위한 표준 마크업 언어이고,
  XML은 사람과 기계가 읽을 수 있는 형식으로 문서를 인코딩하기 위한 규칙 집합을 정의하는 마크업언어이다.
  
  HTML은 웹페이지 구조를 개발하는데 사용되고 XML은 다양한 플랫폼 간에 데이터 교환을 하는데 사용된다.


웹 개발시 자바스크립트로 외부 서버 경로로 ajax 요청을 날리면 에러가 나면서 요청이 실패한다.
외부로 요청이 안되는 것은 자바스크립트 엔진 표준 스펙에 `동일 출처정책(same-origin-policy)`이라는 보안 규칙이 있기 때문이다.
이 정책에 의해 자바스크립트는 다른 웹페이지에 접근할 때는 같은 출처의 페이지에만 접근이 가능하다.

이 정책이 초기에는 웹 사이트의 보안을 위한 좋은 방법으로 생각되었으나 요즘은 여러 도메인에 걸쳐서 구성되는 대규모 웹프로젝트가 많고 REST API등을 이용한 외부 호출이 많아지는 상황에서는 거추장스러운 기술이 되기도 한다.

그래서 만들어진 추가 정책이` CORS(cross-origin Resource Sharing)`이다. 이 정책의 특징은 `서버에서 외부 요청을 허용할 경우 ajax요청이 가능해지는 방식`이다. cors는 웹 브라우저에서 외부 도메인 서버와 통신하기 위한 방식을 표준화한 스펙이다. 웹 브라우저가 사용하려는 정보를 읽을 수 있도록 허가된 도메인 집합을 서버에게 알려주는 HTTP헤더를 추가하는 방식으로 Cross Domain문제를 해결한다.


참고: https://inpa.tistory.com/entry/WEB-%F0%9F%93%9A-CORS-%F0%9F%92%AF-%EC%A0%95%EB%A6%AC-%ED%95%B4%EA%B2%B0-%EB%B0%A9%EB%B2%95-%F0%9F%91%8F#thankYou
  https://hanamon.kr/htm-xml-%EC%B0%A8%EC%9D%B4%EC%A0%90/
  
  https://evan-moon.github.io/2020/05/21/about-cors/
