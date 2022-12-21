
#### Code Splitting과 Dynamic Import
웹사이트의 속도가 너무 느릴 때, 성능 개선을 위해 할 수 있는 것이 `code splitting`이다.
코드 분할 => 어떤 코드를 분할하는가? 번들 코드

React같은 SPA웹앱을 개발하고나면 웹팩같은 모듈번들러로 코드를 번들하고 html파일에서 번들된 자바스크립트파일을 불러와서 웹앱을 브라우저에 실행한다.
그런데 번들 파일이 다 불러와져야 웹앱이 실행되다 보니까, 웹앱의 크기가 커질수록 성능에 악영향을 준다.

`코드 스플리팅은 번들 파일의 코드를 분할하여 모든 코드를 한번에 불러오지 않고 사용자가 필요로할 때 필요한 코드만 불러오는 개념`
여기서 코드 스플리팅의 기초 개념은 `dynamic import`에 대해 알아야 한다.

`Dynamic import는 동적 불러오기`다. 기존에 코드 파일의 가장 상위에서 import를 사용해 불러오는 것은 `static import 정적 불러오기`다.
정적 불러오기같은 경우, 문서의 가장 상위에 위치해야하고 블록문 안에 위치할 수 없는 등의 제약 사항이 있다.
**동적 불러오기는 import()구문을 사용한다. 동적 불러오기는 코드의 위치에 관계없이 사용이 가능하기에, 모듈들을 사용자가 필요로 할 때에 불러오게 할 수 있다.**


#### React.lazy

리액트에서 컴포넌트 파일을 정의하고 동적 불러오기를 사용하면 에러가 발생한다.
컴포넌트를 동적으로 불러오기 위해선 `React.lazy`를 사용해야 한다.

```ts
import { Suspense } from 'react';

const SomeComponent = React.lazy(() => import('./SomeComponent'));

const MyComponent = () => {
  return (
    <Suspense fallback={<div>로딩 중. . .</div>}>
      <SomeComponent />
    </Suspense>
  );
}

```

React.lazy는 import()구문을 반환하는 콜백함수를 인자로 받는다. React.lazy로 불러온 컴포넌트는 단독으로 쓰일 수 없고, React.Suspense컴포넌트로 하위에서 렌더링되어야 한다.
`Suspense`컴포넌트는 fallback prop을 필수로 가진다. fallback prop은 로딩 표시기로 사용할 컴포넌트를 받는다.

참고: https://velog.io/@code-bebop/dynamic-import%EC%99%80-React.lazy
