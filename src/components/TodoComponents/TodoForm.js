import React from "react"
import TextField from "@material-ui/core/TextField"
import Button from "@material-ui/core/Button"

const TodoForm = props => {
  return (
    <div>
      <form onSubmit={props.handleSubmit} noValidate autoComplete="off">
        <TextField
          type="text"
          name="item"
          placeholder="Todo..."
          value={props.toDoText}
          onChange={props.handleChanges}
          id="standard-basic"
          label="Add New ToDo"
          variant="standard"
        />
        &nbsp;
        <Button
          className="add-butt"
          type="submit"
          variant="contained"
          color="primary"
        >
          Add Todo
        </Button>
      </form>
    </div>
  )
}

export default TodoForm
