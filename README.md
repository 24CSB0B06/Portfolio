# Personal Portfolio & REST API

A full-stack personal portfolio application built with **React** (Vite + React Router) and a **Node.js / Express** REST API backend.

## 🚀 Features

- **Responsive Portfolio Frontend**: Multi-page React application showcasing projects, technical skills, education, and contact form.
- **Dynamic Theme Toggle**: Seamless switching between Dark Mode and Light Mode with persistent state.
- **RESTful API Backend**: Express server handling project data retrieval and processing contact form submissions with server-side validation.
- **JSON File Persistence**: Lightweight data storage for project listings and contact submissions.
- **Case Study Deep-Dives**: Detailed project view page supporting direct links (`/projects/:projectId`).

---

## 🛠️ Tech Stack

- **Frontend**: React 18, React Router v6, Vite, Vanilla CSS
- **Backend**: Node.js, Express.js, CORS, dotenv
- **Storage**: JSON File Persistence (`/server/data/`)

---

## 💻 Getting Started

### Prerequisites

Make sure you have [Node.js](https://nodejs.org/) (v16 or higher) installed on your system.

### Installation & Running Locally

1. **Clone the Repository**
   ```bash
   git clone https://github.com/24CSB0B06/Portfolio.git
   cd Portfolio
   ```

2. **Start the Backend API Server**
   ```bash
   cd server
   npm install
   npm start
   ```
   The backend API server will run at `http://localhost:5000`.

3. **Start the Frontend App**
   Open a new terminal window in the root directory:
   ```bash
   npm install
   npm run dev
   ```
   Open `http://localhost:5173` in your browser.

---

## 📡 API Endpoints

| Method | Endpoint | Description |
|---|---|---|
| `GET` | `/` | API status check |
| `GET` | `/api/projects` | Fetch all portfolio projects |
| `GET` | `/api/projects/:id` | Fetch detailed view of a specific project |
| `POST` | `/api/contact` | Submit contact form message |
| `GET` | `/api/contact` | Retrieve stored contact submissions |

### Example API Usage

#### Submit Contact Form (`POST /api/contact`)

**Request Body:**
```json
{
  "name": "Alex Smith",
  "email": "alex@example.com",
  "message": "Interested in collaborating on a full-stack project."
}
```

**Response (`201 Created`):**
```json
{
  "success": true,
  "message": "Contact form submission received successfully!",
  "data": {
    "id": "submission_1787718403538_und7k",
    "name": "Alex Smith",
    "email": "alex@example.com",
    "message": "Interested in collaborating on a full-stack project.",
    "createdAt": "2026-08-26T04:26:43.538Z"
  }
}
```

---

## 📁 Repository Structure

```
Portfolio/
├── server/                 # Express REST API backend
│   ├── data/               # JSON data storage (projects, contact submissions)
│   ├── .env.example        # Environment variable template
│   ├── index.js            # Express server entry point
│   └── package.json
├── src/                    # React frontend source
│   ├── components/         # Reusable UI components (Navbar, ContactForm, etc.)
│   ├── pages/              # Page components (Home, About, Projects, etc.)
│   ├── App.jsx             # Main router configuration
│   └── index.css           # Global design system & styles
├── public/                 # Static assets
└── README.md
```

---

## 👤 Author

**Deekshith Akula**  
Computer Science & Engineering Student @ NIT Warangal  
- GitHub: [@24CSB0B06](https://github.com/24CSB0B06)
- Email: deekshithakula3001@gmail.com
