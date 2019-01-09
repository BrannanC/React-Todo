import React from 'react';

const TodoForm = (props) => {
    return <form onSubmit={props.addTodo}>
              <input
        value={props.inputText}
        type="text"
        placeholder="Add new Character"
        onChange={props.handleChange}
      />
    </form>
}

export default TodoForm;