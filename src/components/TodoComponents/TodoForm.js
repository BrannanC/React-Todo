import React from 'react';

const TodoForm = (props) => {
    return <form className="TodoForm" onSubmit={props.addTodo}>
            <input className="text-input"
                name="inputText"
                value={props.inputText}
                type="text"
                placeholder="Add new ToDo"
                onChange={props.handleChange}
            />
      <button className="todoFormButton" type="submit">Add Todo</button>
      <button className="todoFormButton" onClick={props.clearCompleted}>Clear Completed Tasks</button>
      <button className="todoFormButton" onClick={props.saveList}>Save list</button>
      <button className="todoFormButton" onClick={props.clearAll}>Clear All</button>
      <input className="search-input"
            name="searchText"
            value={props.searchText}
            type="text"
            placeholder="Search"
            onChange={props.handleChange}
        />
    </form>
}

export default TodoForm;