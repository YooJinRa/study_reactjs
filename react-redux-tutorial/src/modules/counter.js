import { createAction, handleActions } from "redux-actions";

// action type setting
const INCREASE = 'counter/INCREASE';
const DECREASE = 'counter/DECREASE';

// action create function setting

// 방법 1
// export const increase = () => ({ type: INCREASE });
// export const decrease = () => ({ type: DECREASE });

// 방법 2 ::: redux-actions 패키지 활용 : 액션 생성 함수를 더 짧은 코드로 작성할 수 있음
export const increase = createAction(INCREASE);
export const decrease = createAction(DECREASE);

// reducer
const initialState = { // 상태 초기값 설정
  number: 0,
};

// 방법 1
// function counter(state = initialState, action) {
//   switch (action.type) {
//     case INCREASE:
//       return {
//         number: state.number + 1
//       };
//     case DECREASE:
//       return {
//         number: state.number - 1
//       };
//     default:
//       return state;
//   }
// }

// 방법 2 ::: redux-actions 패키지 활용
const counter = handleActions(
  {
    [INCREASE]: (state, action) => ({ number: state.number + 1 }),
    [DECREASE]: (state, action) => ({ number: state.number - 1 }),
  },
  initialState,
);

export default counter;