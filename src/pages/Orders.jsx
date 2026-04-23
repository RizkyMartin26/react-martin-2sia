import { useState } from "react";
import PageHeader from "../components/PageHeader";

export default function Orders() {
  const [search, setSearch] = useState("");
  const [showForm, setShowForm] = useState(false);

  const [orders, setOrders] = useState([
    { id: 1, customer: "Rizky", menu: "Nasi Goreng", status: "Delivered", total: "$10" },
    { id: 2, customer: "Andi", menu: "Mie Ayam", status: "Pending", total: "$8" },
    { id: 3, customer: "Siti", menu: "Ayam Bakar", status: "Canceled", total: "$12" },
    { id: 4, customer: "Budi", menu: "Sate", status: "Delivered", total: "$15" },
    { id: 5, customer: "Dewi", menu: "Bakso", status: "Pending", total: "$9" },
    { id: 6, customer: "Rina", menu: "Soto Ayam", status: "Delivered", total: "$11" },
    { id: 7, customer: "Agus", menu: "Nasi Uduk", status: "Canceled", total: "$7" },
    { id: 8, customer: "Putra", menu: "Ayam Geprek", status: "Delivered", total: "$10" },
    { id: 9, customer: "Lina", menu: "Mie Goreng", status: "Pending", total: "$8" },
    { id: 10, customer: "Fajar", menu: "Nasi Padang", status: "Delivered", total: "$14" },
    { id: 11, customer: "Doni", menu: "Ayam Krispi", status: "Pending", total: "$9" },
    { id: 12, customer: "Salsa", menu: "Seblak", status: "Delivered", total: "$6" },
    { id: 13, customer: "Rudi", menu: "Martabak", status: "Canceled", total: "$11" },
    { id: 14, customer: "Tono", menu: "Soto Betawi", status: "Delivered", total: "$13" },
    { id: 15, customer: "Vina", menu: "Bakmi Jawa", status: "Pending", total: "$10" },
    { id: 16, customer: "Yudi", menu: "Gado-Gado", status: "Delivered", total: "$8" },
    { id: 17, customer: "Nina", menu: "Rendang", status: "Delivered", total: "$15" },
    { id: 18, customer: "Bayu", menu: "Ayam Rica", status: "Pending", total: "$12" },
    { id: 19, customer: "Lukman", menu: "Pecel Lele", status: "Canceled", total: "$9" },
    { id: 20, customer: "Mega", menu: "Sop Iga", status: "Delivered", total: "$16" },
    { id: 21, customer: "Putri", menu: "Nasi Kuning", status: "Pending", total: "$7" },
    { id: 22, customer: "Rafli", menu: "Mie Aceh", status: "Delivered", total: "$13" },
    { id: 23, customer: "Zaki", menu: "Ayam Penyet", status: "Canceled", total: "$10" },
    { id: 24, customer: "Intan", menu: "Lontong Sayur", status: "Delivered", total: "$8" },
    { id: 25, customer: "Fina", menu: "Kwetiau", status: "Pending", total: "$9" },
    { id: 26, customer: "Gilang", menu: "Burger", status: "Delivered", total: "$11" },
    { id: 27, customer: "Rara", menu: "Pizza", status: "Pending", total: "$15" },
    { id: 28, customer: "Adit", menu: "Hotdog", status: "Delivered", total: "$7" },
    { id: 29, customer: "Citra", menu: "Spaghetti", status: "Canceled", total: "$12" },
    { id: 30, customer: "Kevin", menu: "Steak", status: "Delivered", total: "$20" },
  ]);

  const [form, setForm] = useState({
    customer: "",
    menu: "",
    status: "",
    total: "",
  });

  const handleAdd = () => {
    if (!form.customer || !form.menu || !form.status || !form.total) return;

    setOrders([...orders, { id: orders.length + 1, ...form }]);
    setForm({ customer: "", menu: "", status: "", total: "" });
    setShowForm(false);
  };

  const handleDelete = (id) => {
    setOrders(orders.filter((item) => item.id !== id));
  };

  const filtered = orders.filter((item) =>
    Object.values(item).some((val) =>
      String(val).toLowerCase().includes(search.toLowerCase())
    )
  );

  return (
    <div className="px-6 py-6">

      <PageHeader title="Orders" breadcrumb="Dashboard / Orders">
        <button
          onClick={() => setShowForm(!showForm)}
          className="bg-blue-500 text-white px-4 py-2 rounded-xl"
        >
          + Add Orders
        </button>
      </PageHeader>

      {showForm && (
        <div className="bg-white p-5 rounded-2xl shadow mb-6">
          <div className="grid grid-cols-4 gap-4">
            <input placeholder="Customer" className="border p-2 rounded"
              value={form.customer} onChange={(e)=>setForm({...form,customer:e.target.value})}/>
            <input placeholder="Menu" className="border p-2 rounded"
              value={form.menu} onChange={(e)=>setForm({...form,menu:e.target.value})}/>
            <input placeholder="Status" className="border p-2 rounded"
              value={form.status} onChange={(e)=>setForm({...form,status:e.target.value})}/>
            <input placeholder="Total" className="border p-2 rounded"
              value={form.total} onChange={(e)=>setForm({...form,total:e.target.value})}/>
          </div>

          <button onClick={handleAdd}
            className="mt-4 bg-green-500 text-white px-4 py-2 rounded-xl">
            Simpan
          </button>
        </div>
      )}

      <input
        type="text"
        placeholder="🔍 Search..."
        className="w-full mb-6 px-4 py-3 border rounded-xl"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="bg-white rounded-2xl shadow overflow-hidden">
        <table className="w-full">
          <tbody>
            {filtered.map((item) => (
              <tr key={item.id} className="border-t">
                <td className="p-4">{item.customer}</td>
                <td className="p-4">{item.menu}</td>
                <td className="p-4">{item.status}</td>
                <td className="p-4">{item.total}</td>
                <td className="p-4">
                  <button onClick={() => handleDelete(item.id)}
                    className="bg-red-500 text-white px-3 py-1 rounded">
                    Hapus
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

    </div>
  );
}