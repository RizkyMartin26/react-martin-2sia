<<<<<<< HEAD
import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
=======
import Sidebar from "./layouts/Sidebar";
import Header from "./layouts/Header";
import { Routes, Route } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import Orders from "./pages/Orders";
import Customers from "./pages/Customers";
import ErrorPage from "./pages/ErrorPage";
>>>>>>> d3d8fce44a04343a7378f7989b134b1ff7878cf5

// ✅ LAYOUT
import MainLayout from "./layouts/MainLayout";
import AuthLayout from "./layouts/AuthLayout";

// ✅ LOADING
import Loading from "./components/Loading";

// ✅ ERROR COMPONENT
import ErrorPage from "./components/ErrorPage";

// ✅ LAZY LOAD PAGES
const Dashboard = React.lazy(() => import("./pages/Dashboard"));
const Orders = React.lazy(() => import("./pages/Orders"));
const Customers = React.lazy(() => import("./pages/Customers"));

const Login = React.lazy(() => import("./pages/auth/Login"));
const Register = React.lazy(() => import("./pages/auth/Register"));
const Forgot = React.lazy(() => import("./pages/auth/Forgot"));

export default function App() {
  return (
<<<<<<< HEAD
    <Suspense fallback={<Loading />}>
      <Routes>

        {/* ================= MAIN ================= */}
        <Route path="/" element={<MainLayout />}>

          <Route index element={<Dashboard />} />
          <Route path="orders" element={<Orders />} />
          <Route path="customers" element={<Customers />} />

          {/* ✅ ERROR ROUTES */}
          <Route
            path="error-400"
            element={<ErrorPage code={400} description="Bad Request" />}
          />

          <Route
            path="error-401"
            element={<ErrorPage code={401} description="Unauthorized" />}
          />

          <Route
            path="error-403"
            element={<ErrorPage code={403} description="Forbidden" />}
          />

          {/* ✅ 404 (WAJIB DI DALAM MAIN LAYOUT) */}
          <Route
            path="*"
            element={<ErrorPage code={404} description="Page Not Found" />}
          />

        </Route>

        {/* ================= AUTH ================= */}
        <Route element={<AuthLayout />}>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot" element={<Forgot />} />
        </Route>

      </Routes>
    </Suspense>
=======
    <div className="flex bg-gray-100 min-h-screen">
      <Sidebar />

      <div className="flex-1 flex flex-col">
        <Header />

        <div className="p-4">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/customers" element={<Customers />} />

            {/* ERROR PAGES */}
            <Route path="/error-400" element={<ErrorPage code={400} description="Bad Request" />} />
            <Route path="/error-401" element={<ErrorPage code={401} description="Unauthorized" />} />
            <Route path="/error-403" element={<ErrorPage code={403} description="Forbidden" />} />

            {/* HARUS PALING BAWAH */}
            <Route path="*" element={<ErrorPage code={404} description="Page Not Found" />} />
          </Routes>
        </div>
      </div>
    </div>
>>>>>>> d3d8fce44a04343a7378f7989b134b1ff7878cf5
  );
}