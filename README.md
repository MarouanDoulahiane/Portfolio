
# Portfolio
## Docker Usage

This project uses Docker to containerize the backend and frontend applications along with a PostgreSQL database. Follow the steps below to build and run the containers.

### Prerequisites

- [Docker](https://www.docker.com/get-started)
- [Docker Compose](https://docs.docker.com/compose/install/)

### Building and Running the Containers

1. **Clone the repository**:
    ```sh
    git clone <repository-url>
    cd <repository-directory>
    ```

2. **Create a `.env` file**:
    Copy the `.env_example` file to `.env` and fill in the necessary environment variables.
    ```sh
    cp .env_example .env
    ```

3. **Build and start the containers**:
    Use the `docker-compose` command to build and start the containers.
    ```sh
    docker-compose up --build
    ```

    This will start the following services:
    - **backend**: Available at [http://localhost:8000](http://localhost:8000)
    - **frontend**: Available at [http://localhost:3000](http://localhost:3000)
    - **db**: PostgreSQL database available at port 5432

4. **Stopping the containers**:
    To stop the running containers, use:
    ```sh
    docker-compose down
    ```

### Health Checks

The [`docker-compose.yaml`](command:_github.copilot.openRelativePath?%5B%7B%22scheme%22%3A%22file%22%2C%22authority%22%3A%22%22%2C%22path%22%3A%22%2Fhome%2Fpipe%2FSkarUp%2FPortfolio%2Fdocker-compose.yaml%22%2C%22query%22%3A%22%22%2C%22fragment%22%3A%22%22%7D%2C%2265c93410-d5a7-4de5-a76d-b15d734b78c8%22%5D "/home/pipe/SkarUp/Portfolio/docker-compose.yaml") file includes health checks for the services:
- **backend**: Checks if the backend service is running by making a request to [http://localhost:8000/](http://localhost:8000/)
- **frontend**: Checks if the frontend service is running by making a request to [http://localhost:3000/health](http://localhost:3000/health)
- **db**: Checks if the PostgreSQL database is ready by using the [`pg_isready`](command:_github.copilot.openSymbolFromReferences?%5B%22%22%2C%5B%7B%22uri%22%3A%7B%22scheme%22%3A%22file%22%2C%22authority%22%3A%22%22%2C%22path%22%3A%22%2Fhome%2Fpipe%2FSkarUp%2FPortfolio%2Fdocker-compose.yaml%22%2C%22query%22%3A%22%22%2C%22fragment%22%3A%22%22%7D%2C%22pos%22%3A%7B%22line%22%3A45%2C%22character%22%3A21%7D%7D%5D%2C%2265c93410-d5a7-4de5-a76d-b15d734b78c8%22%5D "Go to definition") command

### Additional Commands

- **Rebuild the containers**:
    ```sh
    docker-compose up --build
    ```

- **View logs**:
    ```sh
    docker-compose logs -f
    ```

- **Run a specific service**:
    ```sh
    docker-compose up <service-name>
    ```

For more information on Docker and Docker Compose, refer to the [official documentation](https://docs.docker.com/).