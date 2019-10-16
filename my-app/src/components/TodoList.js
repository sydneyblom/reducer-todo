import React, { useReducer } from 'react';

import Todo from './TodoItem';
import TodoForm from './Form';
import { reducer, initialTodoState } from '../reducers/todoReducer'


const TodoList = () => {
    const [state, dispatch] = useReducer(reducer, initialTodoState);


    return (
        <div className="todo-list">
      {
        state.map( (todo) => {
          return <Todo todo={todo} key={todo.id} dispatch={dispatch} />
        })
      }
      <TodoForm dispatch={dispatch} />

        </div>
    )
}

export default TodoList;



