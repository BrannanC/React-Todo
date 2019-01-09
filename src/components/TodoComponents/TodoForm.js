import React from 'react';

const TodoForm = (props) => {
    return <form onSubmit={props.addTodo}>
              <input
        value={props.inputText}
        type="text"
        placeholder="Add new Character"
        onChange={props.handleChange}
      />
      <button type="submit">Add Todo</button>
      <button onClick={props.clearAll}>Clear All</button>
    </form>
}

export default TodoForm;