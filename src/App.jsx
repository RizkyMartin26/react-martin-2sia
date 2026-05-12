import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";

// LAYOUT
import MainLayout from "./layouts/MainLayout";
import AuthLayout from "./layouts/AuthLayout";

// COMPONENTS
import Loading from "./components/Loading";
import ErrorPage from "./components/ErrorPage";

// PAGES
const Dashboard = React.lazy(() => import("./pages/Dashboard"));
const Orders = React.lazy(() => import("./pages/Orders"));
const Customers = React.lazy(() => import("./pages/Customers"));
const CustomersDetail = React.lazy(() =>
  import("./pages/CustomersDetail")
);

const Product = React.lazy(() => import("./pages/Product"));
const ProductDetail = React.lazy(() =>
  import("./pages/ProductDetail")
);

const Login = React.lazy(() => import("./pages/auth/Login"));
const Register = React.lazy(() => import("./pages/auth/Register"));
const Forgot = React.lazy(() => import("./pages/auth/Forgot"));

export default function App() {
  return (
    <Suspense fallback={<Loading />}>

      <Routes>

        {/* MAIN */}
        <Route path="/" element={<MainLayout />}>

          {/* DASHBOARD */}
          <Route
            index
            element={<Dashboard />}
          />

          {/* ORDERS */}
          <Route
            path="orders"
            element={<Orders />}
          />

          {/* CUSTOMERS */}
          <Route
            path="customers"
            element={<Customers />}
          />

          {/* CUSTOMER DETAIL */}
          <Route
            path="customers/:id"
            element={<CustomersDetail />}
          />

          {/* PRODUCTS */}
          <Route
            path="products"
            element={<Product />}
          />

          {/* PRODUCT DETAIL */}
          <Route
            path="products/:id"
            element={<ProductDetail />}
          />

          {/* ERROR */}
          <Route
            path="error-400"
            element={
              <ErrorPage
                code={400}
                description="Bad Request"
              />
            }
          />

          <Route
            path="error-401"
            element={
              <ErrorPage
                code={401}
                description="Unauthorized"
              />
            }
          />

          <Route
            path="error-403"
            element={
              <ErrorPage
                code={403}
                description="Forbidden"
              />
            }
          />

          {/* 404 */}
          <Route
            path="*"
            element={
              <ErrorPage
                code={404}
                description="Page Not Found"
              />
            }
          />

        </Route>

        {/* AUTH */}
        <Route element={<AuthLayout />}>

          <Route
            path="/login"
            element={<Login />}
          />

          <Route
            path="/register"
            element={<Register />}
          />

          <Route
            path="/forgot"
            element={<Forgot />}
          />

        </Route>

      </Routes>

    </Suspense>
  );
}