import React, { useState } from "react"

const TodoForm = (props) => {
  const [todo, setTodo] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault();
    props.addItem(todo)
    setTodo("")
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        required
        placeholder="Enter Item"
        onChange={(e) => setTodo(e.target.value)}
        value={todo}
      />
      <button>Add</button>
    </form>
  )
}

export default TodoForm