import React from "react";
import Navbar from "../components/Navbar";

export default function Dashboard() {
  return (
    <div>
      <Navbar />
      <main className="p-8">
        <h2 className="text-3xl font-bold mb-4">Dashboard</h2>
        <div className="bg-white rounded shadow p-6">
          <p>Welcome to your multi-tenant CRM dashboard!</p>
          {/* More widgets, metrics, and features coming soon */}
        </div>
      </main>
    </div>
  );
}