# Docker Node.js App

This is a simple Dockerized Node.js application that demonstrates how to run a Node.js server inside a Docker container.

## Features

- **Node.js Express Server**: A basic web server that returns a message.
- **Dockerized**: Run the entire app in a Docker container.
- **Docker Compose**: Easily manage and start the container.

## Prerequisites

- Install Docker and Docker Compose on your machine.

## How to Run

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/docker-nodejs-app.git
   cd docker-nodejs-app
   
Build and run the Docker container: docker-compose up --build

Visit http://localhost:3000 in your browser to see the app running.

## Files

- server.js: Main server file using Express.
- Dockerfile: Defines how to build the Node.js app in a Docker image.
- docker-compose.yml: Orchestrates the building and running of the container.

In order to stop the container: docker-compose down
