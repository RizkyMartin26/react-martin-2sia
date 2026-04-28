import PageHeader from "../components/PageHeader";
import { FaShoppingCart, FaTruck, FaBan, FaDollarSign } from "react-icons/fa";

function Card({ icon, value, label, bg }) {
  return (
    <div className="bg-white rounded-2xl shadow-sm px-6 py-5 flex items-center gap-4 hover:shadow-md transition">
      <div className={`w-14 h-14 flex items-center justify-center rounded-full ${bg} text-white text-xl`}>
        {icon}
      </div>

      <div>
        <p className="text-2xl font-bold text-gray-800">{value}</p>
        <p className="text-sm text-gray-400">{label}</p>
      </div>
    </div>
  );
}

export default function Dashboard() {
  return (
    <div className="px-6 py-6">
      
      <PageHeader title="Dashboard" breadcrumb="Dashboard / Home" />

      {/* CARD */}
      <div className="grid grid-cols-4 gap-6 mt-5">
        <Card icon={<FaShoppingCart />} value="75" label="Total Orders" bg="bg-green-500" />
        <Card icon={<FaTruck />} value="357" label="Delivered" bg="bg-blue-500" />
        <Card icon={<FaBan />} value="65" label="Canceled" bg="bg-red-500" />
        <Card icon={<FaDollarSign />} value="$128" label="Revenue" bg="bg-green-600" />
      </div>

      {/* CHART */}
      <div className="grid grid-cols-2 gap-6 mt-6">

        <div className="bg-white rounded-2xl shadow-sm p-6">
          <h3 className="font-semibold text-gray-700 mb-4">Pie Chart</h3>
          <div className="flex justify-around">
            <div>81%</div>
            <div>22%</div>
            <div>62%</div>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-sm p-6">
          <h3 className="font-semibold text-gray-700 mb-4">Chart Order</h3>
          <div className="flex items-end gap-3 h-40">
            <div className="bg-blue-400 w-4 h-10 rounded"></div>
            <div className="bg-blue-500 w-4 h-24 rounded"></div>
            <div className="bg-blue-300 w-4 h-16 rounded"></div>
          </div>
        </div>

      </div>
    </div>
  );
}