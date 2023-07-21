import  { useState } from 'react';

const ToDoList = () => {

  const [tasks, setTasks] = useState([]);

  const [taskInput, setTaskInput] = useState('');


  const handleAddTask = (e) => {
    e.preventDefault();
    if (taskInput.trim() === '') return;
   
    setTasks([...tasks,taskInput]);
    setTaskInput('')
  }

  const removeTask = (id) => {
    const updatedTask = tasks.filter((task)=> task.id !== id);
    console.log(updatedTask);
    setTasks(updatedTask);



  }

  
    return (
        <div className="container mt-4">
        <h3>ToDo List</h3>
        <div className="row">
          <div className="col-md-8">
          <form onSubmit ={handleAddTask}>
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Enter a new task"
              value={taskInput}
              onChange={(e)=>setTaskInput(e.target.value)}
            />
            <br />
            <button className="btn btn-primary" type="submit">Add Task</button>
          </div>
        </form>

        </div>
        </div>

      <div className="row">
          <div className="col-md-8">
          <ul className="list-group">
          {tasks.map((task) => (
            <li className="list-group-item d-flex justify-content-between align-items-center" key={task.id}>
              {task}
              <button
                className="btn btn-danger btn-sm"
                onClick={() => removeTask(task.id)}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
            
        </div>
      </div>
     
      </div>
    );
};

export default ToDoList;