import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

const apiBaseUrl = "http://localhost:3000/api/v1/tasks";

function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");
  const [editTaskId, setEditTaskId] = useState(null);
  const [editTaskText, setEditTaskText] = useState("");

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      const response = await axios.get(apiBaseUrl);
      setTasks(response.data.tasks);
    } catch (error) {
      console.error("Error fetching tasks:", error);
    }
  };

  const handleAddTask = async () => {
    if (!newTask) return;
    try {
      const response = await axios.post(apiBaseUrl, { title: newTask });
      setTasks([...tasks, response.data.task]);
      setNewTask("");
    } catch (error) {
      console.error("Error adding task:", error);
    }
  };

  const handleDeleteTask = async (id) => {
    try {
      await axios.delete(`${apiBaseUrl}/${id}`);
      setTasks(tasks.filter((task) => task._id !== id));
    } catch (error) {
      console.error("Error deleting task:", error);
    }
  };

  const handleEditTask = (id, title) => {
    setEditTaskId(id);
    setEditTaskText(title);
  };

  const handleUpdateTask = async () => {
    try {
      const response = await axios.patch(`${apiBaseUrl}/${editTaskId}`, {
        title: editTaskText,
      });
      setTasks(
        tasks.map((task) =>
          task._id === editTaskId ? response.data.task : task
        )
      );
      setEditTaskId(null);
      setEditTaskText("");
    } catch (error) {
      console.error("Error updating task:", error);
    }
  };

  return (
    <div className="App">
      <h1>Task Manager</h1>
      <div className="task-input">
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Add a new task"
        />
        <button onClick={handleAddTask}>Add Task</button>
      </div>
      <ul className="task-list">
        {tasks.map((task) => (
          <li key={task._id}>
            {editTaskId === task._id ? (
              <div>
                <input
                  type="text"
                  value={editTaskText}
                  onChange={(e) => setEditTaskText(e.target.value)}
                />
                <button onClick={handleUpdateTask}>Update</button>
              </div>
            ) : (
              <div>
                {task.title}
                <button onClick={() => handleEditTask(task._id, task.title)}>
                  Edit
                </button>
                <button onClick={() => handleDeleteTask(task._id)}>
                  Delete
                </button>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
