"use client";
import Link from "next/link";
import { useSession, signOut } from "next-auth/react";
import Image from "next/image";

export default function Navbar() {
  const { data: session, status } = useSession();

  if (status !== "authenticated") return null;

  return (
    <nav className="w-full flex items-center justify-between px-6 py-3 bg-gray-100 dark:bg-gray-900 shadow mb-8">
      <div className="flex items-center gap-4">
        <Link href="/dashboard" className="font-semibold hover:underline">Dashboard</Link>
        <Link href="/pizza-orders" className="font-semibold hover:underline">Pizza Orders</Link>
      </div>
      <div className="flex items-center gap-4">
        {session.user?.image && (
          <Image src={session.user.image} alt="avatar" width={32} height={32} className="w-8 h-8 rounded-full border" unoptimized />
        )}
        <span className="font-medium">{session.user?.name}</span>
        <button
          onClick={() => signOut({ callbackUrl: "/signin" })}
          className="px-3 py-1 bg-red-600 text-white rounded hover:bg-red-700 transition-colors text-sm"
        >
          Sign out
        </button>
      </div>
    </nav>
  );
} 