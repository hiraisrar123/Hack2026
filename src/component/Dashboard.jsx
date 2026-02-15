import React from "react";
import {
  LayoutDashboard,
  Users,
  BarChart3,
  Mail,
  Receipt,
  AlertTriangle,
  Settings,
  Plus,
  LogOut,
  TrendingUp,
  ShoppingBag,
  LineChart,
  Menu,
  Sun,
  Moon,
} from "lucide-react";

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-100 grid grid-cols-12 gap-6 p-4">

      {/* Sidebar */}
      <aside className="col-span-2 bg-white rounded-2xl shadow-lg p-5 hidden md:block">
        <h2 className="text-xl font-bold mb-6">
          C <span className="text-indigo-500">Hira</span>
        </h2>

        <nav className="space-y-4 text-gray-600">
          <SidebarItem icon={<LayoutDashboard size={18} />} text="Dashboard" />
          <SidebarItem icon={<Users size={18} />} text="Customers" active />
          <SidebarItem icon={<BarChart3 size={18} />} text="Analytics" />
          <SidebarItem icon={<Mail size={18} />} text="Messages" />
          <SidebarItem icon={<Receipt size={18} />} text="Products" />
          <SidebarItem icon={<AlertTriangle size={18} />} text="Reports" />
          <SidebarItem icon={<Settings size={18} />} text="Settings" />
          <SidebarItem icon={<Plus size={18} />} text="Add Products" />
          <SidebarItem icon={<LogOut size={18} />} text="Logout" />
        </nav>
      </aside>

      {/* Main Content */}
      <main className="col-span-12 md:col-span-7 space-y-6">

        <h1 className="text-2xl font-bold">Dashboard</h1>

        <input
          type="date"
          className="bg-white px-4 py-2 rounded-lg shadow"
        />

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          <Card
            title="Total Sales"
            amount="$25,023"
            icon={<TrendingUp />}
            color="bg-indigo-500"
          />
          <Card
            title="Expenses"
            amount="$25,023"
            icon={<ShoppingBag />}
            color="bg-red-400"
          />
          <Card
            title="Income"
            amount="$25,023"
            icon={<LineChart />}
            color="bg-green-400"
          />
        </div>

        {/* Table */}
        <div className="bg-white rounded-2xl shadow p-6">
          <h2 className="text-lg font-semibold mb-4">Recent Orders</h2>

          <table className="w-full text-left">
            <thead>
              <tr className="text-gray-500 border-b">
                <th className="py-2">Product</th>
                <th>Number</th>
                <th>Payment</th>
                <th>Status</th>
              </tr>
            </thead>

            <tbody>
              {[1, 2, 3, 4].map((item) => (
                <tr key={item} className="border-b">
                  <td className="py-3">Mini USB</td>
                  <td>456</td>
                  <td>Due</td>
                  <td className="text-red-500">Pending</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>

      {/* Right Section */}
      <div className="col-span-12 md:col-span-3 space-y-6">

        {/* Top Bar */}
        <div className="flex justify-between items-center bg-white p-4 rounded-2xl shadow">
          <Menu />
          <div className="flex gap-2">
            <Sun className="text-indigo-500" />
            <Moon />
          </div>
          <div className="flex items-center gap-3">
            <div>
              <p className="font-bold">Hira Israr</p>
              <p className="text-sm text-gray-500">Admin</p>
            </div>
            <img
              src="https://via.placeholder.com/40"
              alt=""
              className="rounded-full"
            />
          </div>
        </div>

        {/* Updates */}
        <div className="bg-white rounded-2xl shadow p-6">
          <h2 className="font-semibold mb-4">Recent Updates</h2>

          {[1, 2, 3].map((item) => (
            <div key={item} className="flex gap-3 mb-4">
              <img
                src="https://via.placeholder.com/40"
                alt=""
                className="rounded-full"
              />
              <p>
                <span className="font-bold">Sara</span> received his order
              </p>
            </div>
          ))}
        </div>

        {/* Analytics */}
        <div className="bg-white rounded-2xl shadow p-6 space-y-4">
          <h2 className="font-semibold">Sales Analytics</h2>

          <AnalyticsItem
            title="Online Orders"
            percent="-17%"
            count="3849"
            danger
          />
          <AnalyticsItem
            title="Offline Orders"
            percent="+10%"
            count="1200"
            success
          />
        </div>
      </div>
    </div>
  );
}

/* Sidebar Item */
function SidebarItem({ icon, text, active }) {
  return (
    <div
      className={`flex items-center gap-3 p-3 rounded-lg cursor-pointer ${
        active ? "bg-indigo-100 text-indigo-600" : "hover:bg-gray-100"
      }`}
    >
      {icon}
      <span>{text}</span>
    </div>
  );
}

/* Card Component */
function Card({ title, amount, icon, color }) {
  return (
    <div className="bg-white rounded-2xl shadow p-6 flex justify-between items-center">
      <div>
        <h3 className="text-gray-500">{title}</h3>
        <h1 className="text-xl font-bold">{amount}</h1>
      </div>
      <div className={`p-3 rounded-full text-white ${color}`}>
        {icon}
      </div>
    </div>
  );
}

/* Analytics Item */
function AnalyticsItem({ title, percent, count, danger, success }) {
  return (
    <div className="flex justify-between items-center">
      <div>
        <h3 className="font-medium">{title}</h3>
        <p className="text-sm text-gray-500">Last seen 2 hours</p>
      </div>
      <div className="text-right">
        <p
          className={`text-sm ${
            danger ? "text-red-500" : success ? "text-green-500" : ""
          }`}
        >
          {percent}
        </p>
        <h3 className="font-bold">{count}</h3>
      </div>
    </div>
  );
}
