import { useState } from "react";
import { Link } from "react-router-dom";
import PageHeader from "../components/PageHeader";
import productsData from "../data/products";

export default function Product() {
  const [search, setSearch] = useState("");
  const [showForm, setShowForm] = useState(false);

  const [products, setProducts] = useState(productsData);

  const [form, setForm] = useState({
    title: "",
    code: "",
    category: "",
    brand: "",
    price: "",
    stock: "",
  });

  const handleAdd = () => {
    if (
      !form.title ||
      !form.code ||
      !form.category ||
      !form.brand ||
      !form.price ||
      !form.stock
    ) {
      return;
    }

    setProducts([
      ...products,
      {
        id: products.length + 1,
        ...form,
      },
    ]);

    setForm({
      title: "",
      code: "",
      category: "",
      brand: "",
      price: "",
      stock: "",
    });

    setShowForm(false);
  };

  const handleDelete = (id) => {
    setProducts(products.filter((item) => item.id !== id));
  };

  const filtered = products.filter((item) =>
    Object.values(item).some((val) =>
      String(val).toLowerCase().includes(search.toLowerCase())
    )
  );

  return (
    <div className="px-6 py-6">

      <PageHeader
        title="Products"
        breadcrumb="Dashboard / Products"
      >
        <button
          onClick={() => setShowForm(!showForm)}
          className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-xl transition"
        >
          + Add Product
        </button>
      </PageHeader>

      {/* FORM */}
      {showForm && (
        <div className="bg-white p-5 rounded-2xl shadow mb-6">

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">

            <input
              type="text"
              placeholder="Title"
              className="border p-3 rounded-xl outline-none focus:ring-2 focus:ring-green-400"
              value={form.title}
              onChange={(e) =>
                setForm({
                  ...form,
                  title: e.target.value,
                })
              }
            />

            <input
              type="text"
              placeholder="Code"
              className="border p-3 rounded-xl outline-none focus:ring-2 focus:ring-green-400"
              value={form.code}
              onChange={(e) =>
                setForm({
                  ...form,
                  code: e.target.value,
                })
              }
            />

            <input
              type="text"
              placeholder="Category"
              className="border p-3 rounded-xl outline-none focus:ring-2 focus:ring-green-400"
              value={form.category}
              onChange={(e) =>
                setForm({
                  ...form,
                  category: e.target.value,
                })
              }
            />

            <input
              type="text"
              placeholder="Brand"
              className="border p-3 rounded-xl outline-none focus:ring-2 focus:ring-green-400"
              value={form.brand}
              onChange={(e) =>
                setForm({
                  ...form,
                  brand: e.target.value,
                })
              }
            />

            <input
              type="number"
              placeholder="Price"
              className="border p-3 rounded-xl outline-none focus:ring-2 focus:ring-green-400"
              value={form.price}
              onChange={(e) =>
                setForm({
                  ...form,
                  price: e.target.value,
                })
              }
            />

            <input
              type="number"
              placeholder="Stock"
              className="border p-3 rounded-xl outline-none focus:ring-2 focus:ring-green-400"
              value={form.stock}
              onChange={(e) =>
                setForm({
                  ...form,
                  stock: e.target.value,
                })
              }
            />

          </div>

          <button
            onClick={handleAdd}
            className="mt-5 bg-blue-500 hover:bg-blue-600 text-white px-5 py-2 rounded-xl transition"
          >
            Simpan
          </button>

        </div>
      )}

      {/* SEARCH */}
      <input
        type="text"
        placeholder="🔍 Search product..."
        className="w-full mb-6 px-4 py-3 border rounded-xl outline-none focus:ring-2 focus:ring-green-400"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {/* TABLE */}
      <div className="bg-white rounded-2xl shadow overflow-hidden overflow-x-auto">

        <table className="w-full min-w-[1000px]">

          <thead className="bg-gray-50">
            <tr className="text-gray-700">

              <th className="p-4 text-left">ID</th>
              <th className="p-4 text-left">Title</th>
              <th className="p-4 text-left">Code</th>
              <th className="p-4 text-left">Category</th>
              <th className="p-4 text-left">Brand</th>
              <th className="p-4 text-left">Price</th>
              <th className="p-4 text-left">Stock</th>
              <th className="p-4 text-left">Action</th>

            </tr>
          </thead>

          <tbody>

            {filtered.map((item) => (
              <tr
                key={item.id}
                className="border-t hover:bg-gray-50 transition"
              >

                <td className="p-4">{item.id}</td>

                {/* TITLE + LINK DETAIL */}
                <td className="p-4">
                  <Link
                    to={`/products/${item.id}`}
                    className="text-emerald-500 hover:text-emerald-700 font-medium"
                  >
                    {item.title}
                  </Link>
                </td>

                <td className="p-4">{item.code}</td>
                <td className="p-4">{item.category}</td>
                <td className="p-4">{item.brand}</td>
                <td className="p-4">${item.price}</td>
                <td className="p-4">{item.stock}</td>

                <td className="p-4">

                  <div className="flex gap-2">

                    <Link
                      to={`/products/${item.id}`}
                      className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded-lg transition"
                    >
                      Detail
                    </Link>

                    <button
                      onClick={() => handleDelete(item.id)}
                      className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-lg transition"
                    >
                      Hapus
                    </button>

                  </div>

                </td>

              </tr>
            ))}

          </tbody>

        </table>

      </div>

    </div>
  );
}