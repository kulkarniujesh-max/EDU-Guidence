# Eduguidance authentication

This Express and MongoDB service powers the login and sign-up pages. GitHub Pages only serves static files, so authentication requires this API to be running on a Node.js host.

## Run locally

1. Install Node.js and MongoDB, then start MongoDB.
2. From the `backend` directory, copy `.env.example` to `.env`.
3. Set `JWT_SECRET` to a random secret of at least 32 characters. Set `MONGODB_URI` if your database is hosted elsewhere.
4. Run `npm install`, then `npm start`.
5. Open `http://localhost:5000/`, `http://localhost:5000/login.html`, or `http://localhost:5000/signup.html`.

The API endpoints are `POST /api/auth/signup` and `POST /api/auth/login`.

## Host the API separately

Set `FRONTEND_ORIGIN` on the API host to the exact site origin, for example `https://kulkarniujesh-max.github.io`. For multiple trusted sites, separate origins with commas. Do not use a wildcard origin.

Before loading `auth.js`, set `window.EDUGUIDANCE_API_BASE` to the HTTPS base URL of the hosted API (without a trailing slash). Add a small `auth-config.js` file containing `window.EDUGUIDANCE_API_BASE = "https://your-api-host.example";` and load it before `auth.js` on the home, login, and signup pages. The sign-in forms stay disabled on GitHub Pages until this API URL is configured. Keep secrets only in the backend environment; never put `JWT_SECRET` or database credentials in frontend files.

The API uses bcrypt password hashing. Its JWT secret is required at startup and passwords must be at least 8 characters.
