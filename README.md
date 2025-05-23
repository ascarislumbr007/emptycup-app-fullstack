# EmptyCup Application

This repository contains a simple React frontend application that fetches company listings from Google Firebase Firestore.

## Local Development Setup with Docker Compose

To run this application locally using Docker:

**Prerequisites:**

* [Docker Desktop](https://www.docker.com/products/docker-desktop) installed and running.

**Steps:**

1.  **Clone the repository:**
    ```bash
    git clone <your-repo-url>
    cd <your-repo-name>
    ```

2.  **Firebase Configuration:**
    This application connects to a Google Firebase project. You need to provide your Firebase configuration details.
    * Go to your Firebase Console ([https://console.firebase.google.com/](https://console.firebase.google.com/)).
    * Select your project and go to "Project settings" -> "Your apps" -> "Web app" and copy your `firebaseConfig` object.
    * **Create a `.env` file** in the `emptycup-app` directory with the following content (replace with your actual Firebase values):
        ```
        VITE_FIREBASE_API_KEY="YOUR_API_KEY"
        VITE_FIREBASE_AUTH_DOMAIN="YOUR_AUTH_DOMAIN"
        VITE_FIREBASE_PROJECT_ID="YOUR_PROJECT_ID"
        VITE_FIREBASE_STORAGE_BUCKET="YOUR_STORAGE_BUCKET"
        VITE_FIREBASE_MESSAGING_SENDER_ID="YOUR_MESSAGING_SENDER_ID"
        VITE_FIREBASE_APP_ID="YOUR_APP_ID"
        ```
        (Note: While `docker-compose.yml` can also pass env vars, `.env` file within the React app is also a common way for local dev *outside* of Docker, and can be used by Docker Compose too if properly configured, but passing via `environment` in `docker-compose.yml` directly makes it self-contained for Docker.)

3.  **Build and run the Docker containers:**
    From the root directory of the project (where `docker-compose.yml` is located):
    ```bash
    docker-compose up --build
    ```
    This command will:
    * Build the `frontend` service Docker image based on its `Dockerfile`.
    * Start the container.
    * Map port 80 of the container to port 80 of your host machine.

4.  **Access the application:**
    Open your web browser and navigate to `http://localhost`.

## Project Structure