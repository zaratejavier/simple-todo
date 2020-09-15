import React from "react"

const Todo = ({id, todo, complete}) => {
  return (
    <p
      style={complete ? styles.complete : styles.todo}
    >
      {todo}
    </p>
  )
}

const styles = {
  todo: {
    cursor: "pointer"
  },
  complete: {
    textDecoration: "line-through",
    cursor: "pointer",
  },
}

export default Todo
