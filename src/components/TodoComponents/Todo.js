import React from "react"

const ToDo = props => {
  return (
    <div>
      <p
        className={`item${props.item.completed ? "-completed" : ""}`}
        onClick={() => props.toggleItem(props.item.id)}
      >
        {props.item.task}
      </p>
    </div>
  )
}

export default ToDo
