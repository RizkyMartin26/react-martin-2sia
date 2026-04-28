import React from "react";
import Sidebar from "../layouts/Sidebar";
import Header from "../layouts/Header";
import PageHeader from "../components/PageHeader";
import { FaShoppingCart, FaTruck, FaBan, FaDollarSign } from "react-icons/fa";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

// DATA
const chartData = [
  { name: "Jan", revenue: 4000 },
  { name: "Feb", revenue: 3000 },
  { name: "Mar", revenue: 5000 },
  { name: "Apr", revenue: 4500 },
  { name: "Mei", revenue: 6000 },
  { name: "Jun", revenue: 7000 },
];

const recentOrders = [
  { id: "#INV-001", name: "Budi Santoso", amount: "Rp. 250.000", status: "Selesai", date: "15 Apr" },
  { id: "#INV-002", name: "Siti Aminah", amount: "Rp. 120.000", status: "Proses", date: "14 Apr" },
  { id: "#INV-003", name: "Andi Wijaya", amount: "Rp. 450.000", status: "Batal", date: "13 Apr" },
  { id: "#INV-004", name: "Rina Melati", amount: "Rp. 300.000", status: "Selesai", date: "12 Apr" },
];

// CARD STYLE BARU (VERTICAL)
function Card({ icon, value, label, bg }) {
  return (
    <div className="bg-white rounded-2xl shadow-sm p-5 hover:shadow-md transition">
      <div className={`w-12 h-12 flex items-center justify-center rounded-xl ${bg} text-white mb-4`}>
        {icon}
      </div>

      <p className="text-2xl font-bold text-gray-800">{value}</p>
      <p className="text-sm text-gray-400">{label}</p>
    </div>
  );
}

// STATUS
const getStatusColor = (status) => {
  switch (status) {
    case "Selesai":
      return "bg-green-500 text-white";
    case "Proses":
      return "bg-blue-500 text-white";
    case "Batal":
      return "bg-red-500 text-white";
    default:
      return "bg-gray-400 text-white";
  }
};

export default function Dashboard() {
  return (
    <div className="flex bg-gray-100 min-h-screen">
      <Sidebar />

      <div className="flex-1">
        <Header />

        <div className="p-6 space-y-6">
          <PageHeader />

          {/* CARD - STYLE GRID BARU */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <Card icon={<FaShoppingCart />} value="75" label="Total Orders" bg="bg-green-500" />
            <Card icon={<FaTruck />} value="175" label="Total Delivered" bg="bg-blue-500" />
            <Card icon={<FaBan />} value="40" label="Total Canceled" bg="bg-red-500" />
            <Card icon={<FaDollarSign />} value="Rp.128M" label="Revenue" bg="bg-yellow-500" />
          </div>

          {/* SECTION BAWAH */}
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">

            {/* CHART - STYLE BARU */}
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <h2 className="text-lg font-semibold mb-4 text-gray-700">
                Statistik Pendapatan
              </h2>

              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={chartData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="revenue" radius={[6, 6, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* TABLE - STYLE CARD LIST */}
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <h2 className="text-lg font-semibold mb-4 text-gray-700">
                Recent Orders
              </h2>

              <div className="space-y-3">
                {recentOrders.map((order, index) => (
                  <div
                    key={index}
                    className="flex justify-between items-center bg-gray-50 p-3 rounded-xl"
                  >
                    <div>
                      <p className="font-semibold text-sm text-gray-800">
                        {order.name}
                      </p>
                      <p className="text-xs text-gray-400">
                        {order.id} • {order.date}
                      </p>
                    </div>

                    <div className="text-right">
                      <p className="font-bold text-sm">{order.amount}</p>

                      <span
                        className={`text-xs px-3 py-1 rounded-full ${getStatusColor(order.status)}`}
                      >
                        {order.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}