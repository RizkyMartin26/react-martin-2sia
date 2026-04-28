import { Link } from "react-router-dom";

export default function ErrorPage({
  code = 404,
  description = "Page Not Found",
  image
}) {
  return (
    <div className="flex flex-col items-center justify-center h-[80vh] text-center">

      {/* IMAGE */}
      <img
        src={
          image ||
          "https://cdn-icons-png.flaticon.com/512/6195/6195678.png"
        }
        alt="error"
        className="w-56 mb-4"
      />

      {/* CODE */}
      <h1 className="text-6xl font-bold text-red-500">
        {code}
      </h1>

      {/* DESCRIPTION */}
      <p className="text-xl text-gray-700 mt-2">
        {description}
      </p>

      {/* BUTTON */}
      <Link
        to="/"
        className="mt-6 bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-xl shadow"
      >
        Back to Dashboard
      </Link>
    </div>
  );
}