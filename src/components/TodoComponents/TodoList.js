import React from 'react';
import Todo from './Todo';

const TodoList = (props) => {
    return (
    <ul className="TodoList">
        {props.todoItems.filter(x => x.task.includes(props.searchText)).map(x => <Todo item={x} key={x.id.toString()} completeTask={props.completeTask} />)}
    </ul>
    );
}

export default TodoList;