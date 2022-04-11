import { connect } from 'react-redux';
import Todos from '../Components/Todos';
import { insert, remove, changeInput, toggle } from '../modules/todos';

const TodosContainer = ({ input, todos, changeInput, insert, toggle, remove }) => {
  return (
    <Todos
      input={input}
      todos={todos}
      onChangeInput={changeInput}
      onInsert={insert}
      onToggle={toggle}
      onRemove={remove}
    />
  );
};
export default connect(
  state => ({
    input: state.todos.input,
    todos: state.todos.todos,
  }),
  {
    changeInput,
    insert,
    toggle,
    remove,
  },
)(TodosContainer);
