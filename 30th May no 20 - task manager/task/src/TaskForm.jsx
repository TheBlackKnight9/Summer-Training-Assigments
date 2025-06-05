import React, { useState } from "react";
import axios from "axios";

function TaskForm({ setTasks }) {
  const [todo, setTodo] = useState("");
  const [userId, setUserId] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("https://dummyjson.com/todos/add", {
        todo,
        completed: false,
        userId: Number(userId),
      });
      setTasks(prev => [res.data, ...prev]);
      setTodo("");
      setUserId("");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Task Title" value={todo} onChange={(e) => setTodo(e.target.value)} required />
      <input type="number" placeholder="User ID" value={userId} onChange={(e) => setUserId(e.target.value)} required />
      <button type="submit">Add Task</button>
    </form>
  );
}

export default TaskForm;
