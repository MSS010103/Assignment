"use client";
import { signIn } from "next-auth/react";

export default function SignInPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 via-purple-50 to-pink-100 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900 p-4">
      <div className="flex flex-col items-center mb-10 animate-fade-in">
        <span className="text-6xl mb-2">🍕</span>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-800 dark:text-white text-center mb-2">Pizza Dashboard</h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 text-center max-w-xl mb-4">
          Manage your pizza orders with ease. Sign in to view, sort, and track all your pizza deliveries in a beautiful, modern dashboard.
        </p>
        <ul className="text-gray-700 dark:text-gray-200 text-base mb-4 space-y-1 list-disc list-inside">
          <li>🔒 Secure Google sign-in</li>
          <li>📋 View and sort pizza orders</li>
          <li>🎨 Stylish, responsive UI</li>
          <li>🚀 Fast and easy to use</li>
        </ul>
      </div>
      <div className="backdrop-blur-lg bg-white/80 dark:bg-gray-900/80 border border-gray-200 dark:border-gray-800 shadow-2xl rounded-3xl p-10 flex flex-col items-center gap-6 max-w-md w-full animate-fade-in">
        <span className="text-5xl mb-2">
          <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_17_40)">
              <path d="M47.5 24.5C47.5 22.5 47.3 20.7 47 19H24V29H37.5C36.8 32.2 34.7 35.1 31.5 37.1L40.5 44.1C45.1 40 47.5 33.1 47.5 24.5Z" fill="#4285F4"/>
              <path d="M24 48C30.6 48 36.1 45.9 40.5 44.1L31.5 37.1C29.3 38.5 26.7 39.3 24 39.3C17.7 39.3 12.2 35.2 10.3 29.7L1 36.1C5.4 43.1 13.9 48 24 48Z" fill="#34A853"/>
              <path d="M10.3 29.7C9.8 28.3 9.5 26.8 9.5 25.2C9.5 23.6 9.8 22.1 10.3 20.7L1 14.3C-1.1 18.1-1.1 23.9 1 27.7L10.3 29.7Z" fill="#FBBC05"/>
              <path d="M24 9.7C27.1 9.7 29.8 10.8 31.8 12.7L40.7 4.8C36.1 1.1 30.6-1 24-1C13.9-1 5.4 3.9 1 10.9L10.3 18.3C12.2 12.8 17.7 9.7 24 9.7Z" fill="#EA4335"/>
            </g>
            <defs>
              <clipPath id="clip0_17_40">
                <rect width="48" height="48" fill="white"/>
              </clipPath>
            </defs>
          </svg>
        </span>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-800 dark:text-white text-center mb-2">Sign in to continue</h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 text-center mb-4">Use your Google account to access your dashboard</p>
        <button
          onClick={() => signIn("google", { callbackUrl: "/" })}
          className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold rounded-full shadow-lg hover:scale-105 hover:from-blue-600 hover:to-purple-600 transition-transform duration-200 text-lg"
        >
          <svg width="24" height="24" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_17_40)">
              <path d="M47.5 24.5C47.5 22.5 47.3 20.7 47 19H24V29H37.5C36.8 32.2 34.7 35.1 31.5 37.1L40.5 44.1C45.1 40 47.5 33.1 47.5 24.5Z" fill="#4285F4"/>
              <path d="M24 48C30.6 48 36.1 45.9 40.5 44.1L31.5 37.1C29.3 38.5 26.7 39.3 24 39.3C17.7 39.3 12.2 35.2 10.3 29.7L1 36.1C5.4 43.1 13.9 48 24 48Z" fill="#34A853"/>
              <path d="M10.3 29.7C9.8 28.3 9.5 26.8 9.5 25.2C9.5 23.6 9.8 22.1 10.3 20.7L1 14.3C-1.1 18.1-1.1 23.9 1 27.7L10.3 29.7Z" fill="#FBBC05"/>
              <path d="M24 9.7C27.1 9.7 29.8 10.8 31.8 12.7L40.7 4.8C36.1 1.1 30.6-1 24-1C13.9-1 5.4 3.9 1 10.9L10.3 18.3C12.2 12.8 17.7 9.7 24 9.7Z" fill="#EA4335"/>
            </g>
            <defs>
              <clipPath id="clip0_17_40">
                <rect width="48" height="48" fill="white"/>
              </clipPath>
            </defs>
          </svg>
          Sign in with Google
        </button>
      </div>
    </div>
  );
} 