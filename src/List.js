import React from "react"

const List = ({ todos }) => {
  
  const renderTodos = () => {
    return todos.map(todo => {
      return (
        <div>{todo.todo}</div>
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