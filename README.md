# Nginx Node.js Docker Project

This project demonstrates a load-balanced Node.js application architecture using Nginx as a reverse proxy, fully containerized with Docker.

## Architecture

- **Nginx (Load Balancer)**: Handles incoming HTTP/HTTPS traffic and distributes it among the backend instances.
- **Node.js Backends**: Multiple instances of a simple Node.js application (App1, App2, App3) served via Docker Compose.
- **HTTPS**: Secured with self-signed certificates (for development).

## Prerequisites

- Docker
- Docker Compose

## Installation & Usage

1. **Clone the repository** (if not already done).

2. **Generate Certificates** (if needed)
   The project is configured to look for certificates in `./certs`. If they are missing, you can generate them using Docker (if `openssl` is not on your host):

   ```bash
   docker run --rm -v ${PWD}/certs:/certs alpine/openssl req -x509 -nodes -days 365 -newkey rsa:2048 -keyout /certs/self-signed.key -out /certs/self-signed.crt -subj "/CN=localhost"
   ```

3. **Start the Application**

   ```bash
   docker-compose up -d --build
   ```

4. **Access the App**
   - **HTTPS**: [https://localhost](https://localhost) (Accept the security warning for self-signed certs)
   - **HTTP**: [http://localhost:3000](http://localhost:3000) (Redirects to HTTPS)

## Configuration

- **Nginx**: Configured in `./nginx/nginx.conf`.
- **Docker**: Services defined in `docker-compose.yaml`.

## Note

Since this uses self-signed certificates, your browser will warn you that the connection is not private. This is expected behavior for a local development environment.
