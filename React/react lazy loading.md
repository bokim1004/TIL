
### React App이 매우 느린 경우 해결 방법

1. React lazy loading을 이용하자.
`lazy`는 처음에 렌더될때까지 컴포넌트 코드의 로딩을 연기할 수 있게 해준다.
아래와 같이 사용할 수 있다.
```js
import { lazy } from 'react';

const MarkdownPreview = lazy(() => import('./MarkdownPreview.js'));
```
위 코드처럼 dynamic import()를 사용하고, 이는 번들러나 프레임워크의 지원을 필요로 할지도 모른다.
로딩될 때 어떤 것을 보여줘야할지 명확히 할 필요가 있는데, lazy component를 감싸는 suspense boundary가 필요하다.

```js
<Suspense fallback={<Loading />}>
  <h2>Preview</h2>
  <MarkdownPreview />
 </Suspense>
```
