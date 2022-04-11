import styled from 'styled-components';

export const StyledTodosWrap = styled.div`
  width: 450px;
  height: 600px;
  margin: 0 auto;
  margin-top: 100px;
  background: #023047;
  border-radius: 12px;
  box-shadow: 2px 2px 12px rgba(0, 0, 0, 0.2);
  overflow: hidden;
`;
export const StyledHeading = styled.h1`
  text-align: center;
  padding-top: 1.5rem;
  letter-spacing: 2px;
  color: #ffb703;
`;
export const StyledForm = styled.form`
  display: flex;
  input {
    font-size: 1.2rem;
    letter-spacing: 2px;
    width: 300px;
    padding: 12px;
    flex: 1;
    &:focus {
      outline: none;
    }
  }
  button {
    cursor: pointer;
    padding: 4px 12px;
    background: #fb8500;
    border: none;
    border-radius: 4px;
    font-size: 2rem;
  }
`;

// Todo Item

export const StyledTodoItem = styled.div`
  display: flex;
  align-items: center;
  padding: 12px 12px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.3);

  span {
    flex: 1;
    cursor: pointer;
    text-decoration: ${({ done }) => (done ? 'line-through' : '')};
  }
  button {
    cursor: pointer;
    border: none;
    background: inherit;
    font-size: 1.4rem;
  }
`;
