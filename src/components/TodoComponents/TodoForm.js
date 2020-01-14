import React from "react"
import Input from "@material-ui/core/Input"
import Button from "@material-ui/core/Button"

const TodoForm = props => {
  return (
    <div>
      <form onSubmit={props.handleSubmit} noValidate autoComplete="off">
        <input
          type="text"
          name="item"
          placeholder="Todo..."
          value={props.toDoText}
          onChange={props.handleChanges}
        />
        &nbsp;
        <button variant="contained" color="primary">
          Add Todo
        </button>
      </form>
    </div>
  )
}

export default TodoForm
