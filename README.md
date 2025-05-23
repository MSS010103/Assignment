# Pizza Dashboard

Author: Manjot Singh Sodhi

## Overview
A modern, responsive dashboard to manage pizza orders, featuring Google OAuth authentication, protected routes, beautiful UI, and interactive order management. Built with Next.js, NextAuth.js, and Tailwind CSS.

## Features
- Google OAuth sign-in (NextAuth.js)
- Protected dashboard and pizza orders pages
- Responsive, modern UI with glassmorphism and gradients
- Sort and filter pizza orders
- Custom 404 page

## Getting Started

### 1. Clone the repository
```bash
git clone https://github.com/MSS010103/Assignment
cd next-dashboard
```

### 2. Install dependencies

npm install


### 3. Set up environment variables
Create a `.env.local` file in the project root with the following:

GOOGLE_CLIENT_ID=your-google-client-id.apps.googleusercontent.com
GOOGLE_CLIENT_SECRET=your-google-client-secret
NEXTAUTH_SECRET=your-random-secret



- Get Google OAuth credentials from the [Google Cloud Console](https://console.cloud.google.com/apis/credentials) and set the redirect URI to `http://localhost:3000/api/auth/callback/google`.
- Generate a random string for `NEXTAUTH_SECRET` (e.g., with `openssl rand -base64 32`).

### 4. Run the development server

npm run dev


Open [http://localhost:3000](http://localhost:3000) to view the app.

## Deployment
Deploy easily to [Vercel](https://vercel.com/) or [Railway](https://railway.app/). Set the same environment variables in your deployment dashboard.

## Assumptions & Challenges
- Assumed no backend/database was required; all pizza order data is hardcoded.
- Google OAuth requires correct redirect URIs and test user setup in Google Cloud Console.
- UI/UX was a focus for a modern, clean look.

## Third-Party Libraries Used
- [Next.js](https://nextjs.org/)
- [NextAuth.js](https://next-auth.js.org/)
- [Tailwind CSS](https://tailwindcss.com/)


