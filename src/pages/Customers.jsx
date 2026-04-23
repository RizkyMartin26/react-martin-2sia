import { useState } from "react";
import PageHeader from "../components/PageHeader";

export default function Customers() {
  const [search, setSearch] = useState("");
  const [showForm, setShowForm] = useState(false);

  const [customers, setCustomers] = useState([
    { id: 1, name: "Rizky", email: "rizky@email.com", phone: "0811111111" },
    { id: 2, name: "Andi", email: "andi@email.com", phone: "0822222222" },
    { id: 3, name: "Siti", email: "siti@email.com", phone: "0833333333" },
    { id: 4, name: "Budi", email: "budi@email.com", phone: "0844444444" },
    { id: 5, name: "Dewi", email: "dewi@email.com", phone: "0855555555" },
    { id: 6, name: "Rina", email: "rina@email.com", phone: "0866666666" },
    { id: 7, name: "Agus", email: "agus@email.com", phone: "0877777777" },
    { id: 8, name: "Putra", email: "putra@email.com", phone: "0888888888" },
    { id: 9, name: "Lina", email: "lina@email.com", phone: "0899999999" },
    { id: 10, name: "Fajar", email: "fajar@email.com", phone: "0810101010" },
    { id: 11, name: "Doni", email: "doni@email.com", phone: "0811111112" },
    { id: 12, name: "Salsa", email: "salsa@email.com", phone: "0811111113" },
    { id: 13, name: "Rudi", email: "rudi@email.com", phone: "0811111114" },
    { id: 14, name: "Tono", email: "tono@email.com", phone: "0811111115" },
    { id: 15, name: "Vina", email: "vina@email.com", phone: "0811111116" },
    { id: 16, name: "Yudi", email: "yudi@email.com", phone: "0811111117" },
    { id: 17, name: "Nina", email: "nina@email.com", phone: "0811111118" },
    { id: 18, name: "Bayu", email: "bayu@email.com", phone: "0811111119" },
    { id: 19, name: "Lukman", email: "lukman@email.com", phone: "0811111120" },
    { id: 20, name: "Mega", email: "mega@email.com", phone: "0811111121" },
    { id: 21, name: "Putri", email: "putri@email.com", phone: "0811111122" },
    { id: 22, name: "Rafli", email: "rafli@email.com", phone: "0811111123" },
    { id: 23, name: "Zaki", email: "zaki@email.com", phone: "0811111124" },
    { id: 24, name: "Intan", email: "intan@email.com", phone: "0811111125" },
    { id: 25, name: "Fina", email: "fina@email.com", phone: "0811111126" },
    { id: 26, name: "Gilang", email: "gilang@email.com", phone: "0811111127" },
    { id: 27, name: "Rara", email: "rara@email.com", phone: "0811111128" },
    { id: 28, name: "Adit", email: "adit@email.com", phone: "0811111129" },
    { id: 29, name: "Citra", email: "citra@email.com", phone: "0811111130" },
    { id: 30, name: "Kevin", email: "kevin@email.com", phone: "0811111131" },
  ]);

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const handleAdd = () => {
    if (!form.name || !form.email || !form.phone) return;

    setCustomers([...customers, { id: customers.length + 1, ...form }]);
    setForm({ name: "", email: "", phone: "" });
    setShowForm(false);
  };

  const handleDelete = (id) => {
    setCustomers(customers.filter((c) => c.id !== id));
  };

  const filtered = customers.filter((item) =>
    Object.values(item).some((val) =>
      String(val).toLowerCase().includes(search.toLowerCase())
    )
  );

  return (
    <div className="px-6 py-6">

      <PageHeader title="Customers" breadcrumb="Dashboard / Customers">
        <button
          onClick={() => setShowForm(!showForm)}
          className="bg-green-500 text-white px-4 py-2 rounded-xl"
        >
          + Add Customer
        </button>
      </PageHeader>

      {/* FORM */}
      {showForm && (
        <div className="bg-white p-5 rounded-2xl shadow mb-6">
          <div className="grid grid-cols-3 gap-4">
            <input placeholder="Name" className="border p-2 rounded"
              value={form.name} onChange={(e)=>setForm({...form,name:e.target.value})}/>
            <input placeholder="Email" className="border p-2 rounded"
              value={form.email} onChange={(e)=>setForm({...form,email:e.target.value})}/>
            <input placeholder="Phone" className="border p-2 rounded"
              value={form.phone} onChange={(e)=>setForm({...form,phone:e.target.value})}/>
          </div>

          <button onClick={handleAdd}
            className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-xl">
            Simpan
          </button>
        </div>
      )}

      {/* SEARCH */}
      <input
        type="text"
        placeholder="🔍 Search..."
        className="w-full mb-6 px-4 py-3 border rounded-xl"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {/* TABLE */}
      <div className="bg-white rounded-2xl shadow overflow-hidden">
        <table className="w-full">
          <tbody>
            {filtered.map((c) => (
              <tr key={c.id} className="border-t">
                <td className="p-4">{c.name}</td>
                <td className="p-4">{c.email}</td>
                <td className="p-4">{c.phone}</td>
                <td className="p-4">
                  <button onClick={() => handleDelete(c.id)}
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