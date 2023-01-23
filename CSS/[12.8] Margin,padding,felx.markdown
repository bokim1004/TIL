### margin 가급적 쓰지마라

나는 위치를 이동시킬 때 margin으로 요소의 위치를 잡고 하는데.. margin은 가급적 쓰지말라고 한다.

- 마진은 주위에 보이지 않는 밀어내는 힘을 만들어서 주위에 영향을 미치는 구조다.
- 레이아웃을 해결하는 방법에는 margin보다 더 좋은 방법들이 많다.

### 레이아웃은 거의 대부분 Flexbox로 가능하다.

margin을 사용하지 않고 flexbox를 통해서 레이아웃을 만들어내는 방법이 있다.

### flexbox에 대해 알아보자!

가로 배치: flex-direction:row;
세로 배치: flex-direction:column;

#### 배치하는 방향과 cross한 축의 위치를 결정 align-items

가운데 정렬: align-items:center;
위 : align-items:flex-start;
아래: align-items:flex-end;
꽉채우는 방식: algin-items:stretch;

#### 배치하는 방향과 나란한 축의 배치를 결정 justify-content

기본은 왼쪽, 가운데는 center, 오른쪽은 end를 쓰면 된다.
나란한 축의 특징은 space-between이라는 스펙이 있다는 것

### 가운데 정렬하고 싶다?

margin:auto를 사용해서 가운데 정렬을 할 수도 있지만 가급적 마진쓰지말고
아래처럼 쓰자

```js
display:flex;
align-items:center;
justify-content:center;
```

### padding

패딩은 컨테이너를 기준으로 내부로 여백을 두는 것이다.

### gap

각각의 컨텐츠들이 있을 때 이 컨텐츠들의 간격을 만들어내는 방법!
margin을 쓰지 않고 간격을 만들 수 있는 gap이라는 속성이 있다.
갭을 입력하면 그 사이의 간격을 일정하게 만들 수 있다.
그러나.. 갭을 쓸 수 없는 브라우저들이 있다.. 비교적 최신 스펙이기에..

### space

마진을 안쓰고 갭을 쓸 수 있다. 그럼에도 디자인에 따라 다른 간격을 넣어야 하는 경우가 있다.

#### 해결 방법?

1. gap방식을 쓰기 위해 둘 엘리먼트만 묶어서 별도의 컨테이너를 만든다.
2. 그냥 빈 `<div></div>`를 만들고 width나 height를 입력한다.
   => 더 직관적으로 여기에 간격이 얼만큼 떨어져있구나 알 수 있다.

### flex

flex :1
컨텐츠는 보통 부모의 크기에 따라가며 자동으로 크기가 늘어나야 하는 영역이 존재한다.
남는 영역에 flex를 지정하여 자동으로 늘어나야할 크기를 확보해준다.

flex:1은 폴어서 보면

```js
flex-grow:1;
flex-shrink:1;
flex-basis:0%;

```

flex-basis가 0이므로 점유 크기를 0으로 만든 후 화면 비율에 따라 유연하게 늘어나거나 줄어들 수 있음을 만드는 속성이다.
부모의 크기에 따라 동일한 비율로 늘어나고 줄어든다.

```js
<div class="hbox">
  <button>버튼</button>
  <div class="flex">여기가 늘어나는 제목 영역</div>
  <button>버튼</button>
</div>
```

> 참고 :https://velog.io/@teo/CSS-%EA%B3%B5%EB%B6%80-%EC%96%B4%EB%96%BB%EA%B2%8C-%ED%95%B4%EC%95%BC-%ED%95%98%EB%82%98%EC%9A%94-%EC%9D%B4%EB%A1%A0%ED%8E%B8-feat.-figma
