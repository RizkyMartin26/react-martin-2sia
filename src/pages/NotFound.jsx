import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-[80vh] text-center px-4">
      
      {/* Kode 404 */}
      <h1 className="text-7xl font-bold text-green-500 mb-4">
        404
      </h1>

      {/* Pesan */}
      <p className="text-xl text-gray-700 mb-2">
        Oops! Halaman tidak ditemukan
      </p>

      <p className="text-gray-400 mb-6">
        Halaman yang kamu cari tidak tersedia atau sudah dipindahkan.
      </p>

      {/* Tombol balik */}
      <Link
        to="/"
        className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-xl shadow-md transition"
      >
        Kembali ke Dashboard
      </Link>

    </div>
  );
}