import React from 'react';

import Todo from './components/TodoComponents/Todo';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';

class App extends React.Component {
  constructor(){
    super();

  }

  render() {
    return (
      <div>
        <Todo />
      </div>
    );
  }
}

export default App;
