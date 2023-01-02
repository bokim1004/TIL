#### React query란 무엇인가?

리액트 쿼리는 서버에서 가져온 데이터를 웹 브라우저 앱에서 사용하기 쉽게 도와주는 기술이다.
서버는 클라이언트에게 데이터베이스에 있는 정보를 전달해주는 역할을 한다.
여기서 서버는 api서버, 클라이언트는 웹 브라우저에서 실행되는 우리가 작성한 리액트 앱을 의미한다.

데이터 베이스에서 가져온 데이터를 클라이언트에게 보여주기 위해 우리는 ajax를 이용한다.
이떄 서버에서 가져오는 데이터를 `서버의 상태`라고 이야기 한다.

`client State`
 - 클라이언트에서 자체적으로 만드는 state
 - server에서 전달받은 값으로 만는 state

external state는 리덕스, 리코일 등등
internal state는 context api, useState가 있다.

`리액트는 서버의 상태 값을 받아오는데 정해진 모범 답안이라는 것이 없다.`


#### React query는 아래와 같은 문제들을 해결해준다.

1) 간편한 server state 수급 방식

앱이 간단하면 useState와 contextApi만 사용하더라도 대부분의 client state를 다룰 수 있다.
하지만 복잡도가 올라가고 성능 향상에 대한 필요성이 생기는 시점이 예상된다면 이미 잘 만들어진 상태 관리 도구를 선택하는게 가장 합리적인 선택이 될지도 모른다.

react-query는 hook 기반의 로직들로 되어있어 해당 훅을 사하는 컴포넌트에서 상태 값의 변경을 간편하게 파악하여 리렌더링을 유발하게 해준다.

2) 캐시
react query는 `데이터의 캐시 처리를 간편하게 할 수 있는 인터페이스`를 제공한다.
- 몇 초 이후에는 데이터가 유효하지 않은 것으로 간주하고 데이터를 다시 불러온다.
- 데이터에 변경점이 있는 경우에만 리렌더링을 유발한다.
- 유저가 탭을 이동했다가 다시 돌아왔을 때 데이터를 다시 불러온다.
- 데이터를 다시 호출할 때 응답이 오기 전까지는 이전 데이터를 계속 보여준다. 필요에 따라서는 로딩바와 같은 대안 UI를 보여주기 위해 loading state를 기본적으로 제공한다.

#### 코드로 살펴보자

```ts
import * as React from 'react';
import axios from 'axios';

interface Iperson {
    id: number;
    name: string;
    phone: string;
    age: number;
}

const BasicLoading = (): JSX.Element => {

    const [isLoading, setIsLoading] = React.useState<boolean>(false); // 로딩 state
    const [persons, setPersons] = React.useState<Iperson[]>([]); // person state

    React.useEffect(() => {
        getPersons();
    }, [])

    const getPersons = async () => {
        setIsLoading(true); // 로딩 중 체크
        const res = await axios.get('http://localhost:8080/persons'); // API 호출

        if(res) {
            setIsLoading(false); // 로딩 중 체크 해제
            setPersons(res.data); // 결과값 적재
        }
    }

    return (
        <div>
            {isLoading 
                ? <h2>Loading ...</h2>
                : persons.map((person) => {
                    return (
                        <div key={person.id}>
                            <h2>{person.id}: {person.name}</h2>
                        </div>
                    )
                })}
        </div>
    )
}

export default BasicLoading;
```

React query를 사용하게 되면 여러 불필요한 작업을 제거할 수 있다.


```ts
import * as React from 'react';
import axios from 'axios';
import { useQuery } from 'react-query';

interface Iperson {
    id: number;
    name: string;
    phone: string;
    age: number;
}

const QueryLoading = (): JSX.Element => {

    const getPersons = () => {
        const res = useQuery(['persons'], () => axios.get('http://localhost:8080/persons')); // API 호출

        // 로딩 중일 경우
        if(res.isLoading) {
            return (
                <h2>Loading...</h2>
            )
        }

        // 결과값이 전달되었을 경우
        if(res.data) {
            const persons: Iperson[] = res.data.data;

            return (
                persons.map((person) => {
                    return (
                        <div key={person.id}>
                            <h2>{person.id}: {person.name}</h2>
                        </div>
                    )
                })
            )
        }
    }

    return (
        <div>
            {getPersons()}
        </div>
    )
}

export default QueryLoading;
```

#### React query 사용하면 좋은 점
- 복잡한 오해가 발생될 수 있는 코드들을 대체해줄 수 있음
- 새로운 서버 상태 연결에 대한 걱정 없이 관리하기 쉽고 새로운 기능을 더 쉽게 구축할 수 있음
- 사용자들에게 서비스가 빠르고 반응성이 좋다고 느껴질 수 있도록 해줌
- 메모리 성능을 높이는데 도와줌

