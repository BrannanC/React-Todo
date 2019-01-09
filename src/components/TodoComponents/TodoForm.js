import React from 'react';

const TodoForm = (props) => {
    return <form className="TodoForm" onSubmit={props.addTodo}>
            <input className="text-input"
                value={props.inputText}
                type="text"
                placeholder="Add new ToDo"
                onChange={props.handleChange}
            />
      <button className="todoFormButton" type="submit">Add Todo</button>
      <button className="todoFormButton" onClick={props.clearCompleted}>Clear Completed Tasks</button>
      <button className="todoFormButton clearAll" onClick={props.clearAll}>Clear All</button>
      
    </form>
}

export default TodoForm;