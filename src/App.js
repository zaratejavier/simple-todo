import React, { useState } from 'react';
import './App.css';
import Sky from './images/sky.jpg';
import List from './List';
import TodoForm from './TodoForm';

function App() {
  const [state, setState] = useState([
    {
      id: 1,
      todo: "Learn React",
      complete:true,
    },
    {
      id: 2,
      todo: "Learn Node.js",
      complete:false,
    },
    {
      id: 3,
      todo: "Go on a walk",
      complete:false,
    }
  ])

  const addItem = (item) => {
    const newTodo = { id: Math.floor(Math.random() * 100), todo: item, complete: false }
    setState([...state, newTodo])
  }

  const handleClick = (id) => {
    const newTodos = state.map((todo) => {
      debugger
      if (todo.id === id) {
        return {
          ...todo,
          complete: !todo.complete,
        }
      }
      return todo
   })
    setState(newTodos)

  }

  return (
    <div className="app">
      <h1 className="app__title">Welcome to the simplest Todo App</h1>

      <div className="app__list">
        <h1 className="app__size">Todos({state.length})</h1>
        <div className="app__todos">
          <TodoForm addItem={addItem}/>
          <List todos={state} todoClick={handleClick} />
        </div>
      </div>
    </div>
  );
}

export default App;
