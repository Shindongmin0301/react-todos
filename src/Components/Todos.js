import { StyledHeading, StyledTodosWrap, StyledForm, StyledTodoItem } from '../styles/StyledTodos';
import { AiOutlineDelete } from 'react-icons/ai';
import { useEffect } from 'react';

const TodoItem = ({ todo, onToggle, onRemove }) => {
  return (
    <StyledTodoItem done={todo.done}>
      <input type="checkbox" checked={todo.done} readOnly={true} onClick={() => onToggle(todo.id)} />
      <span onClick={() => onToggle(todo.id)}>{todo.text}</span>
      <button onClick={() => onRemove(todo.id)}>
        <AiOutlineDelete />
      </button>
    </StyledTodoItem>
  );
};

const Todos = ({ input, todos, onChangeInput, onInsert, onToggle, onRemove }) => {
  const onSubmit = e => {
    e.preventDefault();
    onInsert(input);
    onChangeInput('');
  };

  useEffect(() => {
    return () => {
      console.log('disapper');
    };
  }, [todos]);
  return (
    <StyledTodosWrap>
      <StyledHeading>Todo</StyledHeading>
      <StyledForm onSubmit={onSubmit}>
        <input type="text" value={input} onChange={e => onChangeInput(e.target.value)} />
        <button>+</button>
      </StyledForm>
      <div style={{ marginTop: '2rem', background: '#f8f9fa', overflow: 'auto', height: '420px' }}>
        {todos.map(todo => (
          <TodoItem key={todo.id} todo={todo} onToggle={onToggle} onRemove={onRemove} />
        ))}
      </div>
    </StyledTodosWrap>
  );
};

export default Todos;
