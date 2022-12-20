#### Recoil atom,selector차이는 무엇인가?

Recoil은 react를 지원하는 전용 상태관리이다.

`atom`은 하나의 상태를 의미한다. react에서 흔히 볼 수 있는 State와 같은 개념으로 atom값을 변경시 해당 atom을 구독하고 있는 모든 컴포넌트들이 
리렌더링되며 해당 변경된 atom의 값을 사용하게 된다.
redux에서는 reducer단위로 state를 구성하였으나 atom은 이런 reducer단위가 아닌 더 잘게 쪼개진 state단위로 상태 관리할 수 있게 된다.
atom을 생성하기 위해서는 다음과 같은 2가지의 값을 필수로 설정해주어야 한다.
- key : 고유한 key 값
- default: atom의 초기값을 정의한다. 
atom을 생성한 뒤 component에서 해당 atom을 사용할 땐, useState를 통해 hook방식으로 사용하는 것처럼 Recoil에서 제공하는 hook함수를 통해 사용할 수 있다.


`Selector`는 atom의 상태에 의존하는 동적인 데이터를 생성한다. selector에서는 `get`함수를 통해 atom정보들을 1개 이상 가져올 수 있다. 이를 통해 조합하여 간단히 새로운 
데이터를 생성할 수 있다.물론 atom의 정보가 바뀌면 atom을 의존하는 selector도 자동으로 리렌더링된다.
 또한 한개 이상의 atom정보를 업데이트 하도록 `set함수`를 받을 수 있다.
 
예시
```ts
export const inputState = atom({
    key: 'inputState',
    default: '',
});

export const countState = atom({
    key: 'countState', // 해당 atom의 고유 key
    default: 0, // 기본값 
});

export const countInputState = selector({
    key: 'countTitleState',
    get: ({ get }) => {
        return `현재 카운트는 ${get(countState)} 이고 입력값은 ${get(inputState)} 입니다.`;
    },
});

function SelectorCount() {
    const [ count, setCount ] = useRecoilState(countState); // useRecoilState 을 통한 value, setter 반환
    const [ input, setInput ] = useRecoilState(inputState); // useRecoilState 을 통한 value, setter 반환
    const countInput = useRecoilValue(countInputState);  // useRecoilValue 을 통한 selector 의 get value 반환

    return (
        <div>
            <h2>읽기 쓰기 카운트 컴포넌트</h2>
            <p>카운트 {count}</p>
            <p>selector {countInput}</p>
            <input value={input} onChange={(e) => setInput(e.target.value)} />
            <button onClick={() => setCount(count + 1)}>숫자 증가</button>
            <button onClick={() => setCount(count - 1)}>숫자 감소</button>
        </div>
    );
}
```

#### Set을 통해 selector에서 복수개의 atom 수정

Selector에서는 set이라는 함수를 통해 여러 개의 atom정보를 동시에 수정할 수 있다. 

```ts
export const countInputState = selector({
    key: 'countTitleState',
    get: ({ get }) => {
        return `현재 카운트는 ${get(countState)} 이고 입력값은 ${get(inputState)} 입니다.`;
    },
    set: ({ set }, newValue) => { // 2번째 파라미터 에는 추가로 받을 인자를 나타냅니다.
        set(countState, Number(newValue)); // count atom 수정
        set(inputState, newValue + ''); // input atom 수정
    },
});
```

 참고:https://blog.woolta.com/categories/1/posts/209
