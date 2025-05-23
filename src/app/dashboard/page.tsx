"use client";
import { useSession, signOut } from "next-auth/react";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Navbar from "../components/Navbar";

export default function DashboardPage() {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "unauthenticated") {
      router.replace("/signin");
    }
  }, [status, router]);

  if (status === "loading") {
    return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
  }

  return (
    <>
      <Navbar />
      <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 via-purple-50 to-pink-100 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900 p-4">
        <div className="backdrop-blur-lg bg-white/70 dark:bg-gray-900/70 border border-gray-200 dark:border-gray-800 shadow-2xl rounded-3xl p-10 flex flex-col items-center gap-6 max-w-md w-full animate-fade-in">
          {session?.user?.image && (
            <img src={session.user.image} alt="avatar" className="w-24 h-24 rounded-full border-4 border-blue-400 shadow-lg mb-2" />
          )}
          <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-800 dark:text-white text-center mb-2">
            Hello, <span className="text-blue-600 dark:text-blue-400">{session?.user?.name || "User"}</span>!
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 text-center mb-4">Welcome to your modern dashboard. Manage your pizza orders with style!</p>
          <Link
            href="/pizza-orders"
            className="inline-block px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold rounded-full shadow-lg hover:scale-105 hover:from-blue-600 hover:to-purple-600 transition-transform duration-200 text-lg"
          >
            🍕 View Pizza Orders
          </Link>
          <button
            onClick={() => signOut({ callbackUrl: "/signin" })}
            className="mt-2 px-6 py-2 bg-gradient-to-r from-red-500 to-pink-500 text-white rounded-full font-semibold shadow hover:scale-105 hover:from-red-600 hover:to-pink-600 transition-transform duration-200"
          >
            Sign out
          </button>
        </div>
      </div>
    </>
  );
}

// Add fade-in animation
// In globals.css, add:
// @keyframes fade-in { from { opacity: 0; transform: translateY(20px);} to { opacity: 1; transform: none; } }
// .animate-fade-in { animation: fade-in 0.7s cubic-bezier(.4,0,.2,1) both; } 