# Firebase Authentication setup

The site uses Firebase Authentication directly from the browser, so email/password and Google sign-in do not need a separate backend server or database.

## Firebase project

- Project: **EDU Guidance** (`edu-guidance-bf249`)
- App: **EduGuidance Website**
- Authentication providers enabled: **Email/Password** and **Google**
- Billing plan: **Spark** (no-cost)
- Web SDK configuration: `firebase-config.js`

Firebase web configuration values, including the API key, are public client identifiers. Firebase Authentication and its authorized-domain settings control sign-in. Never place service-account credentials or private OAuth secrets in this repository.

## Deployment domain

The site is published through GitHub Pages at `https://kulkarniujesh-max.github.io/EDU-Guidence/`. In Firebase Console, open **Authentication → Settings → Authorized domains** and ensure `kulkarniujesh-max.github.io` is listed. Firebase includes localhost for local development.

For local preview, serve the project through a local web server; ES modules and Firebase do not work when opening the HTML files directly with a `file://` URL.
