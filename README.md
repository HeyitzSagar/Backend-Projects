# Task Management API

This Task Management API is built using Node.js, Express, and MongoDB. It provides CRUD (Create, Read, Update, Delete) functionality for managing tasks.

## Features

- **Create Task**: Allows users to create new tasks.
- **Read Task**: Retrieves existing tasks from the database.
- **Update Task**: Updates the details of existing tasks.
- **Delete Task**: Deletes tasks from the database.

## Prerequisites

Before running this project, ensure you have the following installed:

- Node.js
- MongoDB

## Installation

1. Clone the repository:

   ```bash
   git clone <repository-url>
   ```

2. Install dependencies:

   ```bash
   cd task-management-api
   npm install
   ```

3. Set up environment variables:

   Create a `.env` file in the root directory and add the following variables:

   ```
   PORT=3000
   MONGODB_URI=mongodb://localhost:27017/task_management
   ```

   You can adjust the MongoDB URI according to your MongoDB setup.

4. Start the server:

   ```bash
   npm start
   ```

## API Endpoints

### Tasks

- **GET /tasks**: Fetch all tasks.
- **GET /tasks/:id**: Fetch a specific task by ID.
- **POST /tasks**: Create a new task.
- **PUT /tasks/:id**: Update a task by ID.
- **DELETE /tasks/:id**: Delete a task by ID.

## Usage

You can use tools like Postman or cURL to interact with the API endpoints.

Example usage:

```bash
# Fetch all tasks
curl http://localhost:3000/tasks

# Create a new task
curl -X POST -H "Content-Type: application/json" -d '{"title": "Task 1", "description": "Description of Task 1"}' http://localhost:3000/tasks
```

## Contributing

Contributions are welcome! Feel free to submit issues and pull requests.

![getAllTask](https://github.com/HeyitzSagar/Backend-Projects/assets/137028088/4c8a87f9-475e-4180-96af-8018b8356b03)
![createItem](https://github.com/HeyitzSagar/Backend-Projects/assets/137028088/fa808001-e0f4-4457-8c3f-d72be8cb0eab)
![getsingletask](https://github.com/HeyitzSagar/Backend-Projects/assets/137028088/97e02055-b85c-4185-ba58-459596f45c14)
![Deleted Task](https://github.com/HeyitzSagar/Backend-Projects/assets/137028088/ed1cfdc1-148c-41c7-a7e5-ec3baac19036)

## License

This project is licensed under the [MIT License](LICENSE).

---

Feel free to customize this template according to your specific project details, such as adding more detailed instructions, authentication, error handling, etc.



