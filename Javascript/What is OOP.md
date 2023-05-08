### 리터럴

리터럴이란 값을 표현하는 방식이다.

```js
숫자:3,
문자:'안녕',
객체:{이름:'클로이'}
```
```js
class TV {
name=",
price=0;
size=''
constructor(name,price,size){
//생성자
//this는 지금 여기에 있는 속성값을 가져오라는 의미
this.name=name
this.price=price
this.size=size
생성자는 값을 초기화해준다.
}
}

let tv1 =new TV('MTV,200,'56inch');
this code is the same with the below.

let tv1 ={
name:'MTV',
price:200,
size:"56inch"
}

```
for example, If I want to make two classes.
```js
class TV {
name=",
price=0;
size=''
}

class AC {
name=",
price=0;
color="
}
```
In this example, I find the two properties are same in the both classes.
In that case, I can use extends like this.

```js
class Product {//추상화
name=",
price=0;
}

class TV extends Product { //상속(부모가 가진 값을 내거인 것 처럼 쓰는 것)
size='';
constructor(name,price,size){
//부모로부터 값을 가져오니까 여기서는 this가 아니라 super를 사용해야함
super(name,price)

this.size=size
생성자는 값을 초기화해준다.
}
//변수들과 변수에 관련된 함수들을 같은 클래스에 넣을 수 있다. 이런 것을 바로 캡슐화라고 함
//this.price에 직접적으로 들어가는게 아니라 함수를 통해 접근한다.
getPrice(){
return this.price+'만원'
}
}
class AC extends Product {
color='';
}

```
### 객체와 프로토타입의 차이는?
