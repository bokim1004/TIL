## Remix는 Next.js와 어떻게 다른가?

- Remix는 정적 컨텐츠를 제공할 때 Next.js만큼 빠르거나 더 빠르다.
- Remix는 동적 컨텐츠를 제공할 때 Next.js보다 빠르다
- Remix는 느린 네트워크에서도 빠른 사용자 경험을 가능하게 한다.
- Remix는 자동으로 에러와 인터럽트, 경쟁 상태를 처리하지만 Next.js는 그렇지 않다.
- Next.js는 동적 컨텐츠를 제공하기 위한 클라이언트 사이드 자바스크립트를 장려하지만, Remix는 그렇지 않다.
- Next.js는 데이터 뮤테이션을 위한 클라이언트 사이드 자바스크립트가 필요하지만, Remix는 필요하지 않다.
- Next.js빌드 시간은 데이터에 따라 선형적으로 증가하지만, Remix의 빌드 시간은 거의 즉각적이며 데이터와 분리되어 고려됩니다.
- Next.js는 데이터 확장 시 아키텍처를 애플리케이션의 구조를 변경하고 성능을 희생해야 한다.
- 우리는 Remix의 추상화가 더 나은 애플리케이션 코드로 이어진다고 생각한다.

Remix는 모던하며 빠르고 탄력적인 사용자 경험을 구축하기 위한 엣지 네이티브, 풀 스택 자바스크립트 프레임 워크이다. 클라이언트와 서버를 기본으로 통합해 코드에 대해 덜 생각하고 제품에 대해 더 많은 생각을 할 수 있다.

## Remix는 Next.js와 어떻게 다를까?

- Remix가 속도를 위해 SSG에 의존하지 않는다.
- 즉 Remix는 SSG(정적 사이트 생성)을 제공하지 않음
- 페이지 로딩 속도는 좋은 앱을 구성하는 요소의 일부일 뿐임
- 대신 코드 스플리팅 및 비동기 렌더링으로 어느 정도 속도의 단점을 극복하며, 더 나은 UX에 집중한다 함.

## Remix의 핵심은 Nested Routes임

Nested Routes를 통해 Remix는 거의 모든 로딩 상태를 제거함
대부분의 웹앱은 컴포넌트 내부에서 fetch해 요청 폭호수, 느린 로딩 속도 및 버벅거림을 만든다.
Remix는 서버에서 데이터를 병렬로 로드하고 완전한 형식의 HTML문서를 보낸다. 훨씬 더 빠르고 버벅거림이 없다.

## 리믹스는 서버 사이드 렌더링할 수 있는 리액트 ( 사이트 속도가 빠르다)

## 서버-유저 간 전송/수신이 매우 쉽다/ => 데이터 베이스에서 데이터꺼내는 코드 바로 작성 가능하다.

유저가 서버로 데이터 보내는 것도 매우 쉽다. (ajax요청 필요없다)

## 라우팅 그냥 너무 쉽다

## remixes 데이터에 대해 read와 write모두를 제공한다.

## Remix를 통해 서버와 클라이언트 코드를 유기적으로 짤 수 있다.

만약 서버에서 데이터를 가져와서 렌더링을 하고 싶다면 간단하게 아래와 같이 loader를 렌더만 해주면 되었다.

```js
export let loader: LoaderFunction = async () => {
  let jokeListItems = await db.joke.findMany({
    take: 5,
    select: { id: true, name: true },
    orderBy: { createdAt: "desc" },
  });
  let data: LoaderData = { jokeListItems };
  return data;
};
```

그리고 사용하는 client쪽에서는 useLoaderData hook을 사용하여 별도의 loading indicator나 useEffect를 사용하지 않아도 데이터를 바로 사용할 수 있었다.

```js
let data = useLoaderData<LoaderData>();
```

action은 loader와 유사하지만 한 가지 차이점이 있다. 바로 호출되는 시점이다. `loader`는 언제나 페이지를 접근했을 때 실행되는 반면,
`action`은 유저가 GET이 아닌 POST,PUT,DELETE와 같은 액션을 수행하였을 떄 실행된다.
즉, form이 Submit되는 항목이 호출되었을 때 실행되어 서버 사이드에서 처리가 필요한 코드를 실행해줄 수 있다.
클라이언트에서 form이 Submit되었을 때, 서버에서는 클라이언트로부터 받은 데이터를 기반으로 DB에 write를 수행하고, 클라이언트를 redirect시키는 것을 볼 수 있다.

기존 React에서 사용했던 `isLoading`,`useEffect`와 같은 boilerplate가 단 하나도 필요하지 않다는 점이다.

## 😀 Remix를 쓰면 왜 좋은지, 언제 쓰면 좋은가?

remix는 좋은 웹사이트를 만들기 위한 많은 기능들을 굉장히 쉬운 형태로 제공한다.
Optimistic UI,Race condition check, Error Handling, Form Validation등 클라이언트에서 처리하기 다소 까다로웠던 것들도
remix에서는 쉽게 해결 가능함.
간단한 프로젝트에는 사용할 것 같으나 아직 커뮤니티가 작기에 큰 프로젝트에 사용하기에는 많은 어려움이 있을 것으로 보임
