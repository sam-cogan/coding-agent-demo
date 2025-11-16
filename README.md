# Task Manager API Demo

This is a demo project for showcasing GitHub Copilot's coding agent capabilities. The project contains intentional bugs and missing features that can be assigned to the coding agent to fix.

## Overview

A simple REST API for managing tasks and users, built with Node.js and Express. This project intentionally contains various bugs and missing features ranging from simple to complex.

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm

### Installation

```bash
npm install
```

### Running the Application

```bash
npm start
```

Or for development with auto-reload:

```bash
npm run dev
```

The server will start on `http://localhost:3000`

## API Endpoints

### Tasks
- `GET /api/tasks` - Get all tasks
- `GET /api/tasks/:id` - Get a specific task
- `POST /api/tasks` - Create a new task
- `PUT /api/tasks/:id` - Update a task
- `DELETE /api/tasks/:id` - Delete a task

### Users
- `GET /api/users` - Get all users
- `GET /api/users/:id` - Get a specific user
- `POST /api/users` - Create a new user
- `POST /api/users/login` - User login

## Known Issues

This project contains intentional bugs and missing features. Check the Issues tab for a list of items that can be fixed by the coding agent.

## Purpose

This repository is designed to demonstrate GitHub Copilot's coding agent capabilities by providing a range of issues from simple typo fixes to complex security improvements and feature additions.
