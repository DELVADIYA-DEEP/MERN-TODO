# 📝 MERN Stack To-Do List Application

A full-stack, authenticated To-Do list application built with **M**ongoDB, **E**xpress, **R**eact, and **N**ode.js. It allows users to register, log in, and manage their own private lists of tasks (Create, Read, Update, Delete).

## ✨ Features

  * **User Authentication**: Secure registration and login are implemented using JWT (JSON Web Tokens) and password hashing via `bcryptjs`.
  * **Private Task Management**: Tasks are linked to the authenticated user, ensuring each user maintains their own separate list.
  * **Full CRUD**: Supports creating new tasks, reading the list, toggling task completion status (Update), and deleting tasks.
  * **State Management**: Uses React's **Context API** (implemented in the `src/context` folder) for efficient global management of the `todos` array and CRUD actions, minimizing prop drilling.
  * **Persistent Data**: All tasks and user accounts are stored in a MongoDB database using Mongoose.

## 🛠️ Technologies Used

| Category | Technology | Purpose |
| :--- | :--- | :--- |
| **Backend** | Node.js & Express | Core server environment for routing and API creation. |
| **Database** | MongoDB & Mongoose | Data persistence and Object Data Modeling. |
| **Authentication** | JWT & bcryptjs | Secure user session tokens and password hashing. |
| **Frontend** | React (Vite) | Component-based UI framework. |
| **API Client** | Axios | Promises-based HTTP client for API requests.
| **Routing** | React Router DOM | Client-side navigation between pages.

-----

## 🚀 Getting Started

Follow these steps to set up and run the application.

### Prerequisites

1.  **Node.js** (LTS version recommended)
2.  **npm** (or yarn/pnpm)
3.  A **MongoDB database** (local instance or a cloud service like MongoDB Atlas)

### Setup and Installation

**1. Clone the repository**

```bash
git clone https://github.com/your-username/my-todo-app.git
cd my-todo-app
```

**2. Backend Setup**
Navigate to the `backend` folder and install dependencies:

```bash
cd backend
npm install
```

**Create `.env` file**: In the `backend` folder, create a file named `.env` and add your configuration:

```env
# backend/.env

PORT=5000
MONGO_URI="your_mongodb_connection_string_here"
JWT_SECRET="a_very_long_and_random_secret_string"
```

**3. Frontend Setup**
Navigate to the `frontend` folder and install dependencies:

```bash
cd ../frontend
npm install
```

**Create `.env` file (Optional)**: In the `frontend` folder, create a file named `.env` for the API URL:

```env
# frontend/.env (Vite requires the VITE_ prefix)

VITE_API_BASE_URL=http://localhost:5000/api
```

## ▶️ Running the Application

You will need two separate terminal instances to run the server and the client concurrently.

### 1\. Start the Backend Server

From the project root directory, run:

```bash
# This uses the 'dev' script defined in your package.json
npm run dev --prefix backend
```

The server will start on `http://localhost:5000`.

### 2\. Start the Frontend Client

From the project root directory, run:

```bash
npm run dev --prefix frontend
```

The React app will typically open at `http://localhost:5173`.

-----

## 📌 Usage

1.  **Register/Login**: The application starts on the login page. You must register a new account or log in to access the to-do list.
2.  **Add Task**: Use the input field and **"Add Task"** button in the header section.
3.  **Toggle Completion**: Click anywhere on the task text to toggle its `completed` status.
4.  **Delete Task**: Click the **"Delete"** button next to the task.

## 📂 Project Structure

```
my-todo-app/
├── backend/
│   ├── (controllers, models, routes)
│   └── server.js
│
└── frontend/
    ├── src/
    │   ├── api/            # Centralized Axios functions for all API endpoints
    │   ├── components/     # Reusable UI parts (Header, TodoForm, TodoItem)
    │   ├── context/        # Global state management (Provider/Hook)
    │   ├── pages/          # Main views (Home, Login, Register)
    │   ├── styles/         # Component-specific CSS
    │   ├── App.jsx         # Router configuration and PrivateRoute logic
    │   └── main.jsx        # App mounting and Provider wrapping
```

-----
