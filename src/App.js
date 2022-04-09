import './App.css';

import CounterContainer from './Containers/CounterContainer';
import TodosContainer from './Containers/TodosContainer';

function App() {
  return (
    <div className="App">
      <CounterContainer />
      <hr />
      <TodosContainer />
    </div>
  );
}

export default App;
