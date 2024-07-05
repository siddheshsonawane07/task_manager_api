import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

const apiBaseUrl = "http://localhost:3000/api/v1/tasks";

function App() {
  const [tasks, setTasks] = useState([]);
  const [taskName, setTaskName] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      const response = await axios.get(apiBaseUrl);
      console.log("Fetched tasks:", response.data);
      setTasks(response.data.tasks);
    } catch (error) {
      console.error("Error fetching tasks:", error);
    }
  };

  const handleDeleteTask = async (id) => {
    try {
      await axios.delete(`${apiBaseUrl}/${id}`);
      setTasks(tasks.filter((task) => task.id !== id));
    } catch (error) {
      console.error("Error deleting task:", error);
    }
  };

  const handleInputChange = (event) => {
    setTaskName(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post(apiBaseUrl, {
        name: taskName,
        completed: false, // Assuming you want new tasks to start as incomplete
      });
      console.log("Task created:", response.data.task);
      setTaskName(""); // Clear input after successful submission
      fetchTasks(); // Refresh task list after adding new task
    } catch (error) {
      console.error("Error creating task:", error);
      setErrorMessage("Failed to create task. Please try again.");
    }
  };

  const handleCheckboxChange = async (id, completed) => {
    try {
      const response = await axios.patch(`${apiBaseUrl}/${id}`, {
        completed: !completed, // Toggle completed status
      });
      console.log("Task updated:", response.data.task);
      fetchTasks(); // Refresh task list after updating task
    } catch (error) {
      console.error("Error updating task:", error);
    }
  };

  return (
    <div className="App">
      <h1>Task Manager</h1>
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <label>
            Task Name:
            <input
              type="text"
              value={taskName}
              onChange={handleInputChange}
              required
            />
          </label>
          <button type="submit">Add Task</button>
          {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
        </form>
      </div>
      <ul className="task-list">
        {tasks && tasks.length > 0 ? (
          tasks.map((task) => (
            <li key={task.id}>
              <span>{task.name}</span>
              <input
                type="checkbox"
                checked={task.completed}
                onChange={() => handleCheckboxChange(task.id, task.completed)}
              />
              <button onClick={() => handleDeleteTask(task.id)}>Delete</button>
            </li>
          ))
        ) : (
          <li>No tasks found</li>
        )}
      </ul>
    </div>
  );
}

export default App;
