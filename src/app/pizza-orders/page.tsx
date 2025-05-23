"use client";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Navbar from "../components/Navbar";

const ordersData = [
  { id: "PZA001", customer: "John Doe", type: "Margherita", quantity: 2, date: "2024-06-01 12:30", status: "Pending" },
  { id: "PZA002", customer: "Jane Smith", type: "Pepperoni", quantity: 1, date: "2024-06-01 13:00", status: "Preparing" },
  { id: "PZA003", customer: "Alice Brown", type: "Veggie Supreme", quantity: 3, date: "2024-06-01 13:30", status: "Out for Delivery" },
  { id: "PZA004", customer: "Bob Lee", type: "Margherita", quantity: 1, date: "2024-06-01 14:00", status: "Delivered" },
  { id: "PZA005", customer: "Charlie Kim", type: "Pepperoni", quantity: 2, date: "2024-06-01 14:30", status: "Cancelled" },
];

const statusStyles: Record<string, string> = {
  Pending: "bg-yellow-200 text-yellow-800",
  Preparing: "bg-blue-200 text-blue-800",
  "Out for Delivery": "bg-orange-200 text-orange-800",
  Delivered: "bg-green-200 text-green-800",
  Cancelled: "bg-red-200 text-red-800",
};

const statusOptions = ["All", ...Object.keys(statusStyles)];

type SortKey = "id" | "date";
type SortOrder = "asc" | "desc";

export default function PizzaOrdersPage() {
  const { status } = useSession();
  const router = useRouter();

  const [sortKey, setSortKey] = useState<SortKey>("id");
  const [sortOrder, setSortOrder] = useState<SortOrder>("asc");
  const [filterStatus, setFilterStatus] = useState("All");

  useEffect(() => {
    if (status === "unauthenticated") {
      router.replace("/signin");
    }
  }, [status, router]);

  if (status === "loading") {
    return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
  }

  // Filtering
  let filteredOrders =
    filterStatus === "All"
      ? ordersData
      : ordersData.filter((order) => order.status === filterStatus);

  // Sorting
  filteredOrders = [...filteredOrders].sort((a, b) => {
    if (sortKey === "id") {
      return sortOrder === "asc"
        ? a.id.localeCompare(b.id)
        : b.id.localeCompare(a.id);
    } else {
      // date
      return sortOrder === "asc"
        ? a.date.localeCompare(b.date)
        : b.date.localeCompare(a.date);
    }
  });

  const handleSort = (key: SortKey) => {
    if (sortKey === key) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    } else {
      setSortKey(key);
      setSortOrder("asc");
    }
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen flex flex-col items-center bg-gradient-to-br from-pink-50 via-blue-50 to-purple-100 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900 p-2 sm:p-4">
        <div className="backdrop-blur-lg bg-white/80 dark:bg-gray-900/80 border border-gray-200 dark:border-gray-800 shadow-2xl rounded-3xl p-4 sm:p-8 w-full max-w-5xl animate-fade-in">
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 mb-6">
            <div className="flex items-center gap-3">
              <span className="text-3xl">🍕</span>
              <h2 className="text-2xl font-extrabold text-gray-800 dark:text-white tracking-tight">Pizza Orders</h2>
            </div>
            <div className="flex gap-2 items-center">
              <label htmlFor="status" className="font-medium text-sm text-gray-700 dark:text-gray-300">Status:</label>
              <select
                id="status"
                value={filterStatus}
                onChange={e => setFilterStatus(e.target.value)}
                className="rounded-full border px-3 py-1 text-sm bg-gray-50 dark:bg-gray-800 focus:ring-2 focus:ring-blue-400 focus:outline-none shadow"
              >
                {statusOptions.map(option => (
                  <option key={option} value={option}>{option}</option>
                ))}
              </select>
            </div>
            <Link href="/dashboard" className="px-5 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full shadow hover:scale-105 hover:from-blue-600 hover:to-purple-600 transition-transform duration-200 text-sm font-semibold">Back to Dashboard</Link>
          </div>
          <div className="overflow-x-auto rounded-xl border border-gray-200 dark:border-gray-800 bg-white/90 dark:bg-gray-900/90 shadow-lg">
            <table className="min-w-full border-collapse text-sm">
              <thead>
                <tr className="bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800">
                  <th className="px-4 py-3 text-left cursor-pointer select-none font-semibold text-gray-700 dark:text-gray-200" onClick={() => handleSort("id")}>Order ID {sortKey === "id" && (sortOrder === "asc" ? "▲" : "▼")}</th>
                  <th className="px-4 py-3 text-left font-semibold text-gray-700 dark:text-gray-200">Customer Name</th>
                  <th className="px-4 py-3 text-left font-semibold text-gray-700 dark:text-gray-200">Pizza Type</th>
                  <th className="px-4 py-3 text-left font-semibold text-gray-700 dark:text-gray-200">Quantity</th>
                  <th className="px-4 py-3 text-left cursor-pointer select-none font-semibold text-gray-700 dark:text-gray-200" onClick={() => handleSort("date")}>Order Date {sortKey === "date" && (sortOrder === "asc" ? "▲" : "▼")}</th>
                  <th className="px-4 py-3 text-left font-semibold text-gray-700 dark:text-gray-200">Status</th>
                </tr>
              </thead>
              <tbody>
                {filteredOrders.map((order) => (
                  <tr key={order.id} className="border-b last:border-b-0 hover:bg-blue-50 dark:hover:bg-gray-800 transition-colors">
                    <td className="px-4 py-3 font-mono whitespace-nowrap font-semibold text-blue-700 dark:text-blue-300">{order.id}</td>
                    <td className="px-4 py-3 whitespace-nowrap">{order.customer}</td>
                    <td className="px-4 py-3 whitespace-nowrap">{order.type}</td>
                    <td className="px-4 py-3 text-center">{order.quantity}</td>
                    <td className="px-4 py-3 whitespace-nowrap">{order.date}</td>
                    <td className="px-4 py-3">
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold shadow ${statusStyles[order.status]}`}>{order.status}</span>
                    </td>
                  </tr>
                ))}
                {filteredOrders.length === 0 && (
                  <tr>
                    <td colSpan={6} className="text-center py-8 text-gray-400 text-lg">No orders found.</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
} 