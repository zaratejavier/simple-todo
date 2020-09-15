import React from "react"

const Todo = ({id, todo, complete, todoClick, removeItem}) => {
  return (
    <div className="todo">
      <p
        style={complete ? styles.complete : styles.todo}
        onClick={() => todoClick(id)}
      >
        {todo}
      </p>
      <button onClick={() => removeItem(id)}>Delete</button>
    </div>  
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
