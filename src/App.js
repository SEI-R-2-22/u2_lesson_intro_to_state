import { useState } from 'react'
import './styles/App.css'
import Tasks from './components/Tasks'
import Input from './components/Input'

const App = () => {

  const [tasks, setTasks] = useState([
    "Sweep",
    "Do Dishes",
    "Make Bed",
    "Feed Dog"
  ])

  const [input, setInput] = useState('')

  const addTask = () => {
    let myNewList = [...tasks, input]
    setTasks(myNewList)
    setInput('')
  }

  const removeTask = (index) => {
    let taskList = [...tasks]
    taskList.splice(index, 1)
    setTasks(taskList)
  }

  const handleChange = (event) => {
    setInput(event.target.value)
  }
  
  return (
    <div className="app">
      <Input handleChange={handleChange} addTask={addTask} input={input}/>
      <Tasks tasks={tasks} removeTask={removeTask}/>
    </div>
  )
}

export default App
