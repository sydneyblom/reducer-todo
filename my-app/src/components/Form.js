import React, { useState } from 'react';
import {Divider, Form, Button } from 'semantic-ui-react'

export default function TodoForm({dispatch}) {
  const [ newTodoText, setNewTodoText ] = useState('');

  const handleChanges = (e) => {
    setNewTodoText(e.target.value);
  };

  const addTodo = (e) => {
    e.preventDefault();
    setNewTodoText('');
    dispatch(
      { type: "ADD_TODO",
        payload: newTodoText
      }
    );

    setNewTodoText('');
  };

  const clearCompleted = (e) => {
    e.preventDefault();
    dispatch(
      {
        type: "CLEAR_COMPLETED"
      }
    );
  }

  return (
    <>
      <Form>
      <Divider hidden />
        <Form.Input
          type="text" 
          placeholder="Add New Item" 
          name="newTodoText"
          value={newTodoText}
          onChange={handleChanges}
        />
            <Divider hidden />
        <Button onClick={addTodo}>Add Todo</Button>
        <Button onClick={clearCompleted}>Clear Completed</Button>
      </Form>
    </>
  )
}