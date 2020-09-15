import React from "react"
import Todo from "./Todo"

const List = ({ todos,todoClick, removeItem }) => {
  
  const renderTodos = () => {
    return todos.map(todo => {
      return (
        <Todo
          key={todo.id}
          id={todo.id}
          todo={todo.todo}
          complete={todo.complete}
          todoClick={todoClick}
          removeItem={removeItem}
        />
      )
    })
  }

  return (
    <div>
      {renderTodos()}
    </div>
  )
}

export default List