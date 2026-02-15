import React from "react";

export default function StudentDashboard() {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-2xl font-bold mb-4">Student Dashboard</h1>

      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="font-semibold">My Complaints</h2>
          <p className="text-gray-500">View and track complaints</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="font-semibold">Reports</h2>
          <p className="text-gray-500">Submit new reports</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="font-semibold">Events</h2>
          <p className="text-gray-500">View campus events</p>
        </div>
      </div>
    </div>
  );
}
