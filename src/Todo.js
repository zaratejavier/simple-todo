import React from "react"

const Todo = ({id, todo, complete, todoClick}) => {
  return (
    <p
      style={complete ? styles.complete : styles.todo}
      onClick={() => todoClick(id)}
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
