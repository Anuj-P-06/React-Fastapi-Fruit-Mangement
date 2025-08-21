# Fruit Management App

A full-stack web application for managing a list of fruits. Built with **FastAPI** backend and **React** frontend with modern UI using **Tailwind CSS**.

## Features

-  Add fruits to your list
-  View all fruits in a clean interface
-  Delete fruits from your list
-  Responsive design with side panels
-  Real-time updates without page refresh
-  Modern UI with Tailwind CSS

## Screenshot
<img width="1917" height="917" alt="Image" src="https://github.com/user-attachments/assets/e22850fb-0726-4c3c-bd12-0ab3f395a014" />

### Backend
- **FastAPI** - Modern Python web framework
- **Pydantic** - Data validation
- **Uvicorn** - ASGI server
- **CORS** middleware for cross-origin requests

### Frontend
- **React** - JavaScript library for building UI
- **Axios** - HTTP client for API calls
- **Tailwind CSS** - Utility-first CSS framework
- **Vite** - Build tool and dev server

## 📁 Project Structure

```
fruit-management-app/
├── backend/
│   └── main.py                 # FastAPI backend server
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Fruits.jsx      # Main fruit list component
│   │   │   └── AddFruitForm.jsx # Form to add fruits
│   │   ├── App.jsx             # Main app component
│   │   └── api.js              # Axios configuration
│   ├── images/ 
│   │ └── apple.jpg 
│   │ └── bananas.jpg 
│   │ └── grapes.jpg 
│   │ └── kiwi.png
│   │ └── oranges.jpg 
│   │ └── strawberry.jpg
│   ├── package.json
│   └── ...
└── README.md
```

##  Getting Started

### Backend Setup

1. **Navigate to backend directory**
   ```bash
   cd backend
   ```

2. **Install Python dependencies**
   ```bash
   pip install fastapi uvicorn
   ```

3. **Run the backend server**
   ```bash
   python main.py
   ```
   
   The backend will start at `http://localhost:8000`

### Frontend Setup

1. **Navigate to frontend directory**
   ```bash
   cd frontend
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Install additional dependencies**
   ```bash
   npm install axios
   npm install -D tailwindcss postcss autoprefixer
   npx tailwindcss init -p
   ```

4. **Start the development server**
   ```bash
   npm run dev
   ```
   
   The frontend will start at `http://localhost:5173`

## API Endpoints

### Base URL: `http://localhost:8000`

| Method | Endpoint | Description | Request Body | Response |
|--------|----------|-------------|--------------|----------|
| GET | `/fruits` | Get all fruits | None | `{"fruits": [{"name": "apple"}]}` |
| POST | `/fruits` | Add a new fruit | `{"name": "banana"}` | `{"name": "banana"}` |
| DELETE | `/fruits/{fruit_name}` | Delete a fruit | None | `{"name": "deleted_fruit"}` |

## UI Features

- **Left Panel (20%)**: Decorative fruit images with green gradient
- **Main Content (60%)**: 
  - Header with app title
  - Centered input form (input + button side by side)
  - List of fruits with delete buttons
- **Right Panel (20%)**: Decorative fruit images with purple gradient


## Usage

1. **Start both servers** (backend on :8000, frontend on :5173)
2. **Open your browser** to `http://localhost:5173`
3. **Add fruits** using the input field and "Add Fruit" button
4. **View your fruits** in the list below
5. **Delete fruits** by clicking the red "Delete" button

## How It Works

1. **User enters fruit name** → Form submission
2. **Frontend sends POST request** → Backend API
3. **Backend saves to memory** → Returns success
4. **Frontend updates state** → UI refreshes automatically
5. **No page reload needed** → Smooth user experience

## Data Storage

Currently uses **in-memory storage** (data resets when server restarts). Perfect for development and testing.

To persist data, you can integrate:
- SQLite database
- PostgreSQL
- MongoDB
- File-based storage

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

