<div>함수 선언식</div>;
function funcDeclarations() {
  return "A function declaration";
}
funcDeclarations();
<p>일반적인 프로그래밍 언어에서의 함수 선언과 비슷한 형식</p>;

<p>함수 표현식</p>;
var funcExpression = function () {
  return "A function expression";
};
funcExpression();

<p>함수 선언식과 표현식의 차이점</p>;

<div>
  함수 선언식은 호이스팅에 영향을 받지만, 함수 표현식은 호이스팅에 영향을 받지
  않는다. 함수 선언식은 코드를 구현한 위치와 관계없이 자바스크립트 특징인
  호이스팅에 따라 브라우저가 자바스크립트를 해석할 때 맨 위로 끌어올려진다.
</div>;

<span>아래 코드를 보자</span>;
//함수 표현식 sumNumbers에서 var도 호이스팅이 적용되어 위치가 상단으로 끌어올려졌다.
//하지만 실제 sumNumbers에 할당될 function로직은 호출된 이후에 선언되므로,
// sumNumbers는 함수로 인식하지 않고 변수로 인식한다.
var sumNumbers;
logMessage();
sumNumbers();
sumNumbers = function () {
  return 10 + 20;
};

<p>함수 표현식의 장점</p>;
//함수 표현식이 호이스팅에 영향을 받지 않는다는 특징이외에도 함수 선언식보다 유용하게 쓰이는 경우는 다음과 같다.
<p>클로져로 사용, 콜백으로 사용(다른 함수의 인자로 넘길 수 있다)</p>;

<div>함수 표현식으로 클로져 생성하기</div>;

//클로저는 함수를 실행하기 전에 해당 함수에 변수를 넘기고 싶을 때 사용된다.
function tabsHandler(index) {
  return function tabClickEvent(event) {
    //바깥 함수인 tabsHandler()의 index인자를 여기서 접근할 수 있다.
    console.log(index); // 탭을 클릭할 때마다 해당 탭의 index값을 표시
  };
}
var tabs = document.querySelectorAll(".tab");
var i;
for (i = 0; i < tabs.length; i++) {
  tabs[i].onclick = tabsHandler(i);
}

// 위 예제는 모든 .tab요소에 클릭 이벤트를 추가하는 예제다.
//주목할 점은 클로져을 이용해 tabClickEvent()에서 바깥함수 tabsHandler()의 인자값 index를 접근했다는 점이다.
// 그런데 의문점은 위에서 사용한 것은 함수 선언식이 아닌가? 함수 선언식에도 클로저가 적용되는것인가???

//좋은 예를 봐보자.
var list = ["item1", "item2", "item3"];
var i;
var doSomethingHandler = function (itemIndex) {
  return function doSomething(evt) {
    //클로저가 생성되어, itemIndex를 인자로 참조할 수 있게 된다.
    console.log(list[itemIndex]);
  };
};
for (i = 0; i < list.length; i++) {
  list[i].onclick = doSomethingHandler(i);
}
