import React from 'react';

import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';
import Header from './components/Header';

if(!localStorage.getItem('items')){
  localStorage.setItem('items', JSON.stringify([
    {
      task: 'Organize Garage',
      id: 1528817077286,
      completed: false
    },
    {
      task: 'Bake Cookies',
      id: 1528817084358,
      completed: false
    }
  ]))
}

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      todoItems: JSON.parse(localStorage.getItem('items')),
      inputText: '',
    }
  }

  handleChange = e => {
    this.setState({
      inputText: e.target.value
    });
  }

  addTodo = (e) => {
    e.preventDefault();
    this.setState({
      todoItems: [
        ...this.state.todoItems,
        { task: this.state.inputText,
        id: Date.now(),
      completed: false }
      ],
      inputText: "",
    });
  }

  clearAll = (e) => {
    e.preventDefault();
    this.setState({
      todoItems: [],
      inputText: ''
    })
  }

  completeTask = (e, item) => {
    e.target.classList.toggle("line-through");
    item.completed = !item.completed;
  }

  clearCompleted = (e) => {
    e.preventDefault();
    this.setState({
      todoItems: this.state.todoItems.filter(x => x.completed === false)
    })
  }

  saveList = (e) => {
    e.preventDefault();
    localStorage.setItem('items', JSON.stringify(this.state.todoItems));
  }

  render() {
    return (
      <div className="Todo">
        <Header />
        <TodoList 
          todoItems={this.state.todoItems}
          completeTask={this.completeTask}
        />
        <TodoForm 
          inputText={this.state.inputText}
          handleChange={this.handleChange}
          addTodo={this.addTodo}
          clearAll={this.clearAll}
          clearCompleted={this.clearCompleted}
          saveList={this.saveList}
          />
      </div>
    );
  }
}

export default App;
