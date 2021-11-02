<div>Var,let,const 차이점</div>;

<div>
  var는 함수 레벨 스코프,let,const는 블록레벨 스코프. var로 선언한 변수는 선언
  전에 사용해도 에러가 나지 않지만 let,const는 에러가 발생한다. var는 이미
  선언되어있는 이름과 같은 이름으로 변수를 또 선언해도 에러가 나지 않지만
  let,const는 이미 존재하는 변수와 같은 이름의 변수를 또 선언하면 에러가 난다.
  var,let은 변수 선언 시 초기 값을 주지 않아도 되지만 const는 반드시 초기값을
  할당해야 한다.
</div>;

<div>
  var의 경우, 호이스팅되면서 초기 값이 없으면 자동으로 undefined를 초기 값으로
  하여 메모리를 할당한다. 그래서 var의 경우 선언 전에 해당 변수를 사용하려고
  해도 메모리에 해당 변수가 존재하기에 에러가 발생하지 않는다.
</div>;

<div>
  let,const의 경우, 호이스팅이 되면서 초기값이 없다면 var처럼 자동으로 초기값을
  할당하지 않는다. 그래서 값이 할당되기 전까지 메모리를 할당하지 않기에 선언전에
  사용하려고 하면 메모리에 해당변수가 존재하지 않아서 에러를 발생시킨다. 변수가
  선언되고 해당 변수에 값이 할당되기 전까지를 TDZ라고 한다.
</div>;
