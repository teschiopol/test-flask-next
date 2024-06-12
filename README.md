# Interview Task - Next.js To-Do List with Flask Backend and SQLAlchemy

## Overview
This repository contains an interview task aimed at assessing skills, Next.js, Flask, SQLAlchemy and in Docker development. The task involves developing a simple To-Do List application using Next.js for the frontend and Flask for the backend. The backend will use SQLAlchemy to connect to a SQLite database for persisting tasks.
Optionally, the task also involves Dockerizing the application for both frontend and backend.

## Task Description

### 1. Develop a Simple To-Do List Application
- **Frontend (Next.js):**
  - Create an interface for task management (add, view, delete).
  - Implement communication with the backend API.
- **Backend (Flask):**
  - Develop a REST API for CRUD operations on tasks.
  - Use `SQLAlchemy` to connect to a SQLite database for persisting tasks.

### 2. (Optional) Dockerize the Application
The task also involves Dockerizing the application for both frontend and backend. We have already set up the docker compose file to run the application. You need to complete the Dockerfiles for both frontend and backend to ensure the application can be run in a Docker container.
- **Frontend (Next.js):**
  Complete the Dockerfile in the `frontend/` directory to ensure the Next.js app can be built and run in a Docker container.
- **Backend (Flask):**
  Complete the Dockerfile in the `backend/` directory for the Flask app to be containerized.


## Getting Started

### Clone the Repository
```bash
git clone https://github.com/your-repository/interview-task.git
cd interview-task