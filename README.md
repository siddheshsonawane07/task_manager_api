# Task Manager App

This project implements a Task Manager application with a frontend built using React and a backend created with Express.js, MongoDB, and Node.js.


## Project Structure

The project is structured into two main directories:

**frontend/**: Contains the React frontend application.

**backend/**: Contains the Express.js backend server.


## Running the project locally

To run the backend locally, run the following commands


cd backend

npm install

npm start

The Express server will be hosted at localhost:3000

<br>

To run the frontend locally, run the following commands


cd frontend

npm install

npm run dev

React application will be hosted on localhost:5173

Note: Change the apiBaseUrl to "http://localhost:3000/api/v1/tasks" at line no. 5 in App.jsx in the react app


## Deployment

**Frontend**: Deployed using Netlify. "https://sidtaskmanager.netlify.app"

**Backend**: Deployed using Render.com.  "https://task-manager-api-0z4l.onrender.com/api/v1/tasks"



## APIs

**GET /api/v1/tasks**: Fetches all tasks.

**POST /api/v1/tasks**: Creates a new task.

**PUT /api/v1/tasks/:id**: Updates an existing task.

**DELETE /api/v1/tasks/:id**: Deletes a task.


## Technologies Used

**Frontend**: React

**Backend**: Express.js, MongoDB, Node.js


## Contact

For any inquiries, please contact Siddhesh Sonawane at siddheshsonawane07@gmail.com
