import { createAction, handleActions } from 'redux-actions';

const CHANGE_INPUT = 'todos/CHANGE_INPUT';
const INSERT = 'todos/INSERT';
const TOGGLE = 'todos/TOGGLE';
const REMOVE = 'todos/REMOVE';

export const changeInput = createAction(CHANGE_INPUT, input => input);
let id = 3;
export const insert = createAction(INSERT, text => ({
  id: id++,
  text,
  done: false,
}));
export const toggle = createAction(TOGGLE, id => id);
export const remove = createAction(REMOVE, id => id);

const initalState = {
  input: '',
  todos: [
    {
      id: 1,
      text: '리덕스 마저 공부하기',
      done: false,
    },
    {
      id: 2,
      text: '운동 30분하기',
      done: false,
    },
  ],
};
const todos = handleActions(
  {
    [CHANGE_INPUT]: (state, { payload: input }) => ({ ...state, input }),
    [INSERT]: (state, { payload: todo }) => ({ ...state, todos: [...state.todos, todo] }),
    [TOGGLE]: (state, { payload: id }) => ({
      ...state,
      todos: state.todos.map(todo => (todo.id === id ? { ...todo, done: !todo.done } : todo)),
    }),
    [REMOVE]: (state, { payload: id }) => ({ ...state, todos: state.todos.filter(todo => todo.id !== id) }),
  },
  initalState,
);

export default todos;
