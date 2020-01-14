import React from "react"
import ToDo from "./Todo"
import Button from "@material-ui/core/Button"

const TodoList = props => {
  return (
    <div className="todo-list">
      {props.toDo.map(item => (
        <ToDo key={item.id} item={item} toggleItem={props.toggleItem} />
      ))}
      <Button
        className="clear-btn"
        onClick={(props.completed, props.removeItem)}
        variant="contained"
        color="secondary"
      >
        Clear Completed
      </Button>
    </div>
  )
}

export default TodoList
