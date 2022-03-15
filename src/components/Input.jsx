const Input = (props) => {
  
  return (
    <div>
      <label>Input Task: </label>
      <input type="text" name="task" onChange={props.handleChange} value={props.input}/>
      <button onClick={props.addTask} className="add-button">Add</button>
    </div>
  )
}

export default Input
