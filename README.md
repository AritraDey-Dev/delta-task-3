
## Backend Setup

1. Navigate to the backend folder:
    ```bash
    cd Backend
    ```
2. Create an environment file:
    ```bash
    touch .env
    ```
3. Install dependencies:
    ```bash
    npm install
    ```
4. Get a MongoDB connection URL and replace in `.env`:
    ```
    MONGO_URI=your_mongo_db_url
    ```
5. Create a Firebase project and add credentials to `.env`.
6. Start the backend server:
    ```bash
    node app.js
    ```

## Frontend Setup

1. Navigate to the frontend folder:
    ```bash
    cd Frontend
    ```
2. Install dependencies:
    ```bash
    npm install
    ```
3. Start the development server:
    ```bash
    npm run dev
    ```

---
