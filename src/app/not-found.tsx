"use client";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-pink-50 via-blue-50 to-purple-100 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900 p-4">
      <div className="backdrop-blur-lg bg-white/80 dark:bg-gray-900/80 border border-gray-200 dark:border-gray-800 shadow-2xl rounded-3xl p-10 flex flex-col items-center gap-6 max-w-md w-full animate-fade-in">
        <span className="text-6xl">🚫</span>
        <h1 className="text-4xl font-extrabold text-gray-800 dark:text-white text-center">404</h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 text-center">Oops! The page you&apos;re looking for doesn&apos;t exist.</p>
        <Link
          href="/dashboard"
          className="inline-block px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold rounded-full shadow-lg hover:scale-105 hover:from-blue-600 hover:to-purple-600 transition-transform duration-200 text-lg"
        >
          ← Back to Dashboard
        </Link>
      </div>
    </div>
  );
} 