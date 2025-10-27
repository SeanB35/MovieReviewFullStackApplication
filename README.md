# Full-Stack Movie Review Application

This is a full-stack web application for reviewing movies, built as a project following the FreeCodeCamp tutorial series.

The application is split into two distinct repositories (or folders): a **React Frontend** and a **Spring Boot Backend**.

---

## 🚀 Technology Stack

| Component | Technology | Description |
| :--- | :--- | :--- |
| **Frontend** | **React.js** (via create-react-app) | User interface and client-side logic. |
| **Backend** | **Spring Boot** (Java) | REST API to handle business logic and data access. |
| **Database** | **MongoDB** | NoSQL database used for storing movie and review data. |

---

## ⚙️ Setup and Installation

Follow these steps to get both the backend and frontend running locally.

### 1. Backend Setup (Spring Boot)

1.  **Clone the Backend Repository:**
    ```bash
    git clone [https://github.com/SeanB35/MovieReviewBackend.git](https://github.com/SeanB35/MovieReviewBackend.git)
    cd MovieReviewBackend
    ```

2.  **Configure Database:**
    * Ensure you have a local instance of **MongoDB** running, or update the `application.properties` or `application.yml` file to point to your remote MongoDB URI.
    * The property to look for is typically: `spring.data.mongodb.uri=mongodb://localhost:27017/moviereviews`

3.  **Run the Application:**
    * Open the project in **IntelliJ IDEA**.
    * Run the main application class (the one annotated with `@SpringBootApplication`).
    * *The backend server will start on port 8080 (or as configured).*

### 2. Frontend Setup (React)

1.  **Clone the Frontend Repository:**
    * *(If you are already in the correct folder, skip the clone step.)*
    ```bash
    git clone [https://github.com/SeanB35/MovieReviewFullStackApplication.git](https://github.com/SeanB35/MovieReviewFullStackApplication.git)
    cd MovieReviewFullStackApplication
    ```

2.  **Install Dependencies:**
    ```bash
    npm install
    ```

3.  **Start the Client:**
    ```bash
    npm start
    ```
    * *The client will start, usually opening your browser to `http://localhost:3000`.*

---

## 📂 Project Structure Overview

This project is organized into two separate folders/repositories:

1.  **`MovieReviewBackend`** (`https://github.com/SeanB35/MovieReviewBackend.git`)
    * Contains all Java code, controllers, services, and repository interfaces.
    * Handles all communication with the MongoDB database.

2.  **`MovieReviewFullStackApplication`** (`https://github.com/SeanB35/MovieReviewFullStackApplication.git`)
    * Contains all JavaScript/React components, styles, and assets.
    * Makes HTTP requests to the backend API running on port 8080.