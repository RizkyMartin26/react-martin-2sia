import { NavLink } from "react-router-dom";
import {
  FaThLarge,
  FaList,
  FaUsers,
  FaBoxOpen,
  FaExclamationTriangle,
} from "react-icons/fa";

export default function Sidebar() {

  const menuClass = ({ isActive }) =>
    `flex items-center gap-3 p-3 rounded-xl transition-all duration-200 text-sm
    ${
      isActive
        ? "bg-green-100 text-green-600 font-semibold shadow-sm"
        : "text-gray-500 hover:bg-green-50 hover:text-green-600"
    }`;

  return (
    <aside className="w-64 h-screen bg-white border-r flex flex-col justify-between p-6 sticky top-0">

      {/* ================= TOP ================= */}
      <div>

        {/* LOGO */}
        <div className="mb-10">
          <h1 className="text-3xl font-bold text-gray-800">
            Sedap<span className="text-green-500">.</span>
          </h1>

          <p className="text-sm text-gray-400">
            Admin Dashboard
          </p>
        </div>

        {/* ================= MAIN MENU ================= */}
        <ul className="space-y-2">

          {/* DASHBOARD */}
          <li>
            <NavLink to="/" className={menuClass}>
              <FaThLarge className="text-lg" />
              <span>Dashboard</span>
            </NavLink>
          </li>

          {/* ORDERS */}
          <li>
            <NavLink to="/orders" className={menuClass}>
              <FaList className="text-lg" />
              <span>Orders</span>
            </NavLink>
          </li>

          {/* CUSTOMERS */}
          <li>
            <NavLink to="/customers" className={menuClass}>
              <FaUsers className="text-lg" />
              <span>Customers</span>
            </NavLink>
          </li>

          {/* PRODUCTS */}
          <li>
            <NavLink to="/products" className={menuClass}>
              <FaBoxOpen className="text-lg" />
              <span>Products</span>
            </NavLink>
          </li>

        </ul>

        {/* ================= ERROR MENU ================= */}
        <div className="mt-8">

          <p className="text-xs text-gray-400 uppercase mb-2">
            Error Pages
          </p>

          <ul className="space-y-2">

            <li>
              <NavLink to="/error-400" className={menuClass}>
                <FaExclamationTriangle className="text-lg" />
                <span>Error 400</span>
              </NavLink>
            </li>

            <li>
              <NavLink to="/error-401" className={menuClass}>
                <FaExclamationTriangle className="text-lg" />
                <span>Error 401</span>
              </NavLink>
            </li>

            <li>
              <NavLink to="/error-403" className={menuClass}>
                <FaExclamationTriangle className="text-lg" />
                <span>Error 403</span>
              </NavLink>
            </li>

          </ul>

        </div>

      </div>

      {/* ================= BOTTOM ================= */}
      <div>

        {/* CARD */}
        <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-2xl p-4 text-white flex items-center justify-between shadow-md">

          <div>
            <p className="text-xs leading-tight">
              Manage your menu easily!
            </p>

            <button className="mt-3 bg-white text-green-600 text-xs px-3 py-1 rounded-lg hover:bg-gray-100 transition">
              + Add Menu
            </button>
          </div>

          <img
            src="https://i.pravatar.cc/100"
            className="w-12 h-12 rounded-full border-2 border-white"
            alt="profile"
          />

        </div>

        {/* FOOTER */}
        <div className="mt-6 text-xs text-gray-400">
          <p>Sedap Restaurant Admin</p>

          <p className="text-gray-300">
            © 2025 All Rights Reserved
          </p>
        </div>

      </div>

    </aside>
  );
}