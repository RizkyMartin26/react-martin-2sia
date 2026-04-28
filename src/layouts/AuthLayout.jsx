import { Outlet, Link } from "react-router-dom";

export default function AuthLayout() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-100 to-gray-100 px-4">
      
      <div className="bg-white w-full max-w-md p-8 rounded-2xl shadow-xl">

        {/* LOGO */}
        <div className="text-center mb-6">
          <h1 className="text-4xl font-extrabold text-gray-800">
            Sedap<span className="text-green-500">.</span>
          </h1>
          <p className="text-sm text-gray-400 mt-1">
            Welcome to Admin Panel
          </p>
        </div>

        {/* FORM CONTENT */}
        <Outlet />

        {/* NAV LINK */}
        <div className="flex justify-between text-sm mt-4 text-gray-500">
          <Link to="/login" className="hover:text-green-600">Login</Link>
          <Link to="/register" className="hover:text-green-600">Register</Link>
          <Link to="/forgot" className="hover:text-green-600">Forgot</Link>
        </div>

        {/* FOOTER */}
        <p className="text-center text-xs text-gray-400 mt-6">
          © 2025 Sedap Restaurant Admin Dashboard
        </p>

      </div>

    </div>
  );
}