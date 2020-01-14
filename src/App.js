import React, { Component } from "react"
import TodoForm from "./components/TodoComponents/TodoForm"
import TodoList from "./components/TodoComponents/TodoList"
import "./Todo.css"

const toDo = [
  {
    task: "Feed Animals",
    id: 123,
    completed: false
  },
  {
    task: "Walk Dog",
    id: 124,
    completed: false
  },
  {
    task: "Buy Ammo",
    id: 1235,
    completed: false
  },
  {
    task: "Clean Firearms",
    id: 1246,
    completed: false
  },
  {
    task: "Wash Car",
    id: 1237,
    completed: false
  },
  {
    task: "Laundry",
    id: 1248,
    completed: false
  }
]

class App extends Component {
  constructor() {
    super()
    this.state = {
      toDoList: toDo,
      toDoText: ""
    }
    console.log(this.state)
  }

  toggleItem = id => {
    const newToDoList = this.state.toDoList.map(item => {
      if (item.id === id) {
        return {
          ...item,
          completed: !item.completed
        }
      } else {
        return item
      }
    })
    // update toDosList
    this.setState({
      toDoList: newToDoList
    })
    // window.localStorage.setItem("newToDoList", JSON.stringify(toDo))
  }

  //add new todos
  addItem = itemName => {
    const newItem = {
      task: itemName,
      id: Date.now(),
      completed: false
    }
    this.setState({
      toDoList: [...this.state.toDoList, newItem]
    })
    // localStorage.setItem("toDoList", JSON.stringify(newItem))
  }

  removeItem = () => {
    this.setState({
      toDoList: this.state.toDoList.filter(element => {
        return element.completed === false
      })
    })
  }

  handleChanges = e => {
    // update state with each keystroke
    this.setState({
      toDoText: e.target.value
    })
  }

  // class property to submit form
  handleSubmit = e => {
    e.preventDefault()
    this.addItem(this.state.toDoText)
    e.target.reset()
    this.setState({
      toDoText: ""
    })
  }

  render() {
    localStorage.setItem("toDoList", JSON.stringify(this.state.toDoList))
    return (
      <div className="App">
        <h2>Todo List</h2>
        <TodoForm
          toDoText={this.toDoText}
          handleChanges={this.handleChanges}
          handleSubmit={this.handleSubmit}
        />
        <TodoList
          toDo={this.state.toDoList}
          toggleItem={this.toggleItem}
          removeItem={this.removeItem}
        />
      </div>
    )
  }
}

export default App
