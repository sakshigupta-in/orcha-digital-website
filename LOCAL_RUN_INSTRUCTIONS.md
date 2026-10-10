# Orcha Digital — Run Locally on Your MacBook

This is the complete source code of your Orcha Digital website: React frontend, FastAPI backend, and all configuration.

## What you need installed

1. **Node.js 18+** — install via https://nodejs.org or `brew install node`
2. **Yarn** — `npm install -g yarn` (or `brew install yarn`)
3. **Python 3.10+** — `brew install python@3.11`
4. **MongoDB** — either:
   - Local: `brew tap mongodb/brew && brew install mongodb-community && brew services start mongodb-community`
   - Or a free MongoDB Atlas cloud database (https://www.mongodb.com/atlas)

## Setup

### 1. Backend

```bash
cd backend
python3 -m venv venv
source venv/bin/activate
pip install -r requirements.txt
```

Edit `backend/.env` if needed (defaults work with a local MongoDB):

```
MONGO_URL="mongodb://localhost:27017"
DB_NAME="orcha_digital"
CORS_ORIGINS="*"
```

Start the backend:

```bash
uvicorn server:app --host 0.0.0.0 --port 8001 --reload
```

The API runs at http://localhost:8001/api — enquiries are saved to MongoDB.

### 2. Frontend

Open a second terminal:

```bash
cd frontend
yarn install
```

Edit `frontend/.env` so it points to your local backend:

```
REACT_APP_BACKEND_URL=http://localhost:8001
```

Start the frontend:

```bash
yarn start
```

The website opens at http://localhost:3000

## Notes

- All website content (services, packages, portfolio, contact details) lives in `frontend/src/data/content.js` — edit that one file to update text site-wide.
- Page sections are separate components in `frontend/src/components/`.
- The enquiry form posts to `POST /api/enquiries`; view saved enquiries at `GET /api/enquiries`.
- To change the port mapping, keep the backend on 8001 and the frontend on 3000, or update `REACT_APP_BACKEND_URL` accordingly.
