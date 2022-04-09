import { createAction, handleActions } from 'redux-actions';
// 액션 타입 정의 모듈이름/액션 이름
// 나중에 프로젝트가 커졌을 때 액션의 이름이 충돌되지 않도록.
const INCREASE = 'counter/INCREASE';
const DECREASE = 'counter/DECREASE';

// 액션 생성 함수
export const increase = createAction(INCREASE);
export const decrease = createAction(DECREASE);

const initalState = {
  number: 0,
  mouse: 'mouse',
};

// Counter Reducer
// action.type에 따라서 number의 상태를 정의.

// function counter(state = initalState, action) {
//   switch (action.type) {
//     case INCREASE:
//       return {
//         number: state.number + 1,
//       };
//     case DECREASE:
//       return {
//         number: state.number - 1,
//       };
//     default:
//       return state;
//   }
// }

// handleActions(object, init) - reducer를 좀더 간편하게 작성하도록 도와줌.
// object ->  액션에 대한 업데이트 함수 init -> 초기상태

const counter = handleActions(
  {
    [INCREASE]: (state, action) => ({ number: state.number + 1 }),
    [DECREASE]: (state, action) => ({ number: state.number - 1 }),
  },
  initalState,
);
export default counter;
