# Orcha Digital — Website & Growth Platform

Modern, responsive web platform for **Orcha Digital**, an AI-driven digital marketing and growth agency. Built with a React 19 frontend and a FastAPI backend with MongoDB persistence.

---

## 🚀 Tech Stack

### Frontend
- **Framework:** React 19 (via CRA + Craco)
- **Styling:** Tailwind CSS, PostCSS, Lucide Icons
- **Animation & UI:** Framer Motion, Radix UI primitives, Sonner toasts
- **HTTP Client:** Axios

### Backend
- **Framework:** FastAPI (Python 3.10+)
- **Database:** MongoDB (via Motor async driver)
- **Validation:** Pydantic v2
- **Server:** Uvicorn ASGI

---

## 📁 Project Structure

```
orcha-digital-website/
├── frontend/
│   ├── public/              # Static assets and index.html
│   ├── src/
│   │   ├── components/      # UI components (Hero, Services, Portfolio, Contact, etc.)
│   │   ├── data/            # Site content (services, packages, portfolio, contact details)
│   │   ├── hooks/           # Custom React hooks
│   │   ├── App.js           # Main application entry point
│   │   └── index.css        # Tailwind & custom CSS styles
│   ├── package.json         # Node dependencies & scripts
│   └── .env.example         # Frontend environment template
├── backend/
│   ├── server.py            # FastAPI API server & enquiry endpoints
│   ├── requirements.txt     # Python dependencies
│   ├── pytest.ini           # Test configuration
│   └── .env.example         # Backend environment template
├── LOCAL_RUN_INSTRUCTIONS.md# Detailed local development guide
└── README.md                # Project documentation
```

---

## ⚙️ Getting Started

### Prerequisites
- **Node.js:** v18+ and `yarn` or `npm`
- **Python:** 3.10+
- **MongoDB:** Local instance running on port 27017 or MongoDB Atlas URI

---

### 1. Backend Setup

1. Navigate to the backend directory:
   ```bash
   cd backend
   ```

2. Create and activate a Python virtual environment:
   ```bash
   python3 -m venv venv
   source venv/bin/activate
   ```

3. Install dependencies:
   ```bash
   pip install -r requirements.txt
   ```

4. Configure environment variables:
   ```bash
   cp .env.example .env
   ```
   *(Update `MONGO_URL` if using a remote MongoDB instance).*

5. Start the FastAPI server:
   ```bash
   uvicorn server:app --host 0.0.0.0 --port 8001 --reload
   ```
   API runs at: **http://localhost:8001/api**

---

### 2. Frontend Setup

1. Open a new terminal and navigate to the frontend directory:
   ```bash
   cd frontend
   ```

2. Install dependencies:
   ```bash
   yarn install
   # or
   npm install
   ```

3. Configure environment variables:
   ```bash
   cp .env.example .env
   ```
   Ensure `REACT_APP_BACKEND_URL=http://localhost:8001`.

4. Start the development server:
   ```bash
   yarn start
   # or
   npm start
   ```
   Website runs at: **http://localhost:3000**

---

## 📡 API Endpoints

| Method | Endpoint | Description |
|---|---|---|
| `GET` | `/api/` | API status check |
| `POST` | `/api/enquiries` | Submit a customer enquiry |
| `GET` | `/api/enquiries` | Retrieve enquiries list (sorted latest first) |

---

## 🛠️ Content Customization

All website content, services, packages, case studies, and contact information can be updated in a single central file:
`frontend/src/data/content.js`

---

## 📄 License
Private & Proprietary — Orcha Digital.
