import Sidebar from "./layouts/Sidebar";
import Header from "./layouts/Header";
import { Routes, Route } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import Orders from "./pages/Orders";
import Customers from "./pages/Customers";
import ErrorPage from "./pages/ErrorPage";

function App() {
  return (
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
  );
}

export default App;