### React를 쓰는 이유? 

리액트는 웹 3세대 특징으로 등장. 규모가 커지고 복잡한 애플리케이션을 개발하며 생산성을 향상시키고 많은 양의 데이터 관리와 코드 유지 및 보수를 더욱 편리하게 하기 위해 다양한 프론트엔드 프레임워크가 등장하게 된다.

리액트는 사용자 인터페이스 UI를 만들기 위한 자바스크립트 라이브러리로 리액트는 가상돔을 통해 UI를 빠르게 업데이트한다.

리액트는 `UI데이터를 관리하는 방법을 제공`한다. UI 데이터는 컴포넌트 내부에서 관리되는 상탯값과 부모 컴포넌트에서 내려주는 속성값으로 구성된다.

UI데이터가 변경되면 화면을 다시 그려야 한다. 리액트와 같은 UI라이브러리를 사용하지 않는다면 UI 데이터가 변경될 때마다 돔 요소를 직접 수정해야 한다. 그런데 돔 요소를 직접 수정하다보면 코드 복잡해진다. 그래서 리액트는 화면을 그리는 모든 코드를 컴포넌트 함수에 선언형으로 작성하도록 했다.

UI데이터가 변경되면 리액트가 컴포넌트 함수를 이용해서 화면을 자동으로 갱신해주며 이것이 리액트의 가장 중요한 역할

리액에xm서 UI데이터는 반드시 `상탯값과 속성값으로 관리`해야 한다. 이것이 바로 리액트의 `핵심(state,props)` 이 값으로 관리하지 않으면 UI 데이터가 변경돼도 화면이 갱신되지 않을 수 있다.

**프레임워크와 라이브러리의 차이점?**

프레임워크: 제공받은 틀, 규약을 가지고 무언가를 만드는 일, 어떤 프로그램을 만들기 위한 요소와 룰을 제공해줌으로서 소프트웨어의 생산성과 품질을 높이는 역할을 하는 것

라이브러리: 소프트웨어를 개발하기 쉽게 `어떤 기능을 제공하는 도구들`

어떤 차이? 프레임 워크를 가지고 프로그램을 만들기 시작하면 어떤 규약을 꼭 지키며 만들어야 하지만 라이브러리는 도구기에 자유롭게 어떤 도구를 써도 무방하다.