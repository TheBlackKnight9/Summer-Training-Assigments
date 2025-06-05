import React from "react";
import axios from "axios";

function TaskItem({ task, setTasks }) {
  const handleToggle = async () => {
    try {
      const res = await axios.put(`https://dummyjson.com/todos/${task.id}`, {
        completed: !task.completed,
      });
      setTasks(prev => prev.map(t => t.id === task.id ? { ...t, completed: res.data.completed } : t));
    } catch (err) {
      console.error(err);
    }
  };

  const handleDelete = async () => {
    try {
      await axios.delete(`https://dummyjson.com/todos/${task.id}`);
      setTasks(prev => prev.filter(t => t.id !== task.id));
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div style={{ margin: "10px 0" }}>
      <input type="checkbox" checked={task.completed} onChange={handleToggle} />
      <strong>{task.todo}</strong> (User ID: {task.userId}) 
      <button onClick={handleDelete} style={{ marginLeft: "10px" }}>Delete</button>
    </div>
  );
}

export default TaskItem;
