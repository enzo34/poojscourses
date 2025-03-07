# GestionUser

## Description
GestionUser is a user management system that allows administrators to manage user accounts, including creating, updating, and deleting users.

## Installation
1. Clone the repository:
    ```sh
    git clone https://github.com/enzo34/poojscourses.git
    ```
2. Navigate to the project directory:
    ```sh
    cd GestionUser
    ```
3. Install the dependencies:
    ```sh
    npm install
    ```

## Usage
1. Create a `.env` file in the root directory and add your environment variables.
2. Start the application:
    ```sh
    npm start
    ```

## Docker Usage
1. Build the Docker image:
    ```sh
    docker build -t gestionuser .
    ```
2. Run the Docker container:
    ```sh
    docker run -p 3000:3000 --env-file .env gestionuser
    ```

## File Descriptions
- **src/**: Contains the source code of the application.
- **.env**: Environment variables configuration file.
- **.gitignore**: Specifies files and directories to be ignored by Git.
- **index.js**: Entry point of the application.
- **package-lock.json**: Automatically generated file that describes the exact tree that was generated by `npm install`.
- **package.json**: Contains metadata about the project and its dependencies.
- **README.md**: This file, provides an overview of the project.
- **Dockerfile**: Docker configuration file for containerizing the application.
- **docker-compose.yml**: Docker Compose configuration file for setting up multi-container Docker applications.

