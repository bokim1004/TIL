프론트엔드 개발을 할 때, 비즈니스 로직과 뷰 로직을 분리해야한다는 이야기를 많이 들었다.
결국 알아야 하는 것은 프론트엔드의 아키텍쳐이다.

### MVI Model - View - Intent

MVI아키텍쳐 특징은 기존 MVC나 MVVM과 다른 점은 이 구성이 하나의 컴포넌트가 아니라 앱 전체에 적용이 된다는 것이다.
그래서 전체적으로 데이터의 방향성이 단방향으로 연결이 되고 데이터가 전역적으로 구성이 된다는 점이 특징이다.
뷰는 모델에 의존적이지만 비즈니스 로직은 뷰와의 의존성이 없기에 화면 변화에 유연하며 별도로 테스트를 하기 쉽다.

비즈니스 로직은 2가지 레이어로 나눌 수 있다.

1) 사용자가 View를 통해서 전달한 UI Event를 어떠한 데이터 변화를 하게할지 전달하는 역할 => 사용자의 의도를 파악하는 것 (Intent)
2) 전달받은 요청에 따라서 적절히 데이터를 변화하는 역할 => 데이터를 다루므로 Model이라고 함

`비즈니스 로직` : 1)데이터를 관장하는 Model, 2) 사용자의 행동을 데이터 변화로 매핑하는 Intent 영역으로 분리
`Model`은 다시 1) 변화를 감지하고 변경사항을 전파하는 영역 2) 데이터를 변화하는 로직을 구분하여 작성

<img src="https://velog.velcdn.com/images/chloeee/post/c6a0a8a4-a107-4e27-bfc3-9dd8b3b67649/image.png" width="800" />


### 어떻게 비즈니스 로직과 뷰로직을 분리해서 개발할 수 있을까? (참고)
https://sairys.medium.com/react-separating-responsibilities-using-hooks-b9c90dbb3ab9
https://www.masterborn.com/blog/Separation_of_concerns_in_react_apps
