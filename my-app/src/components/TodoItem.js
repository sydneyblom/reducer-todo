import React from 'react';
import { Card } from 'semantic-ui-react'

export default function Todo({todo, dispatch}) {
  const toggleCompleted = (e) => {
    dispatch({
      type: 'TOGGLE_COMPLETED',
      payload: todo.id
    })
  }

  return (
    <div 
      onClick={toggleCompleted} 
      className={`todo${todo.completed ? " completed" : ""}`}>
           <div className='card-container'>
        <Card style= {{margin:'5px'}}>
      <p>{todo.item}</p>
      </Card>
      </div>
    </div>
  );
  }
    