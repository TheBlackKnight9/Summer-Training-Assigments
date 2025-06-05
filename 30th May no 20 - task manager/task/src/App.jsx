import React, { useState, useEffect } from "react";
import axios from "axios";
import TaskList from "./TaskList";
import TaskForm from "./TaskForm";


function App() {
  const [tasks, setTasks] = useState([]);

 
  const fetchTasks = async () => {
    try {
      const res = await axios.get("https://dummyjson.com/todos");
      setTasks(res.data.todos); 
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <div className="container">
      <h1>Task Manager</h1>
      <TaskForm setTasks={setTasks} />
      <TaskList tasks={tasks} setTasks={setTasks} />
    </div>
  );
}

export default App;
