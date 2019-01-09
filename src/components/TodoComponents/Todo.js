import React from 'react';
import TodoList from './TodoList';
import TodoForm from './TodoForm';

const Todo = (props) => {
    return (
        <div>
            <TodoList />
            <TodoForm />
        </div>
    );
}

export default Todo;