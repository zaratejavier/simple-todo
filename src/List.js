import React from "react"
import Todo from "./Todo"

const List = ({ todos }) => {
  
  const renderTodos = () => {
    return todos.map(todo => {
      return (
        <Todo key={todo.id} id={todo.id} todo={todo.todo} complete={todo.complete} />
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