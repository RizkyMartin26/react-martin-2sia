import { Link } from "react-router-dom";

export default function ErrorPage({ code = 404, description = "Page Not Found", image }) {
  return (
    <div className="flex flex-col items-center justify-center h-[80vh] text-center px-4">

      {/* IMAGE */}
      {image && (
        <img
          src={image}
          alt={`Error ${code}`}
          className="w-60 mb-6"
        />
      )}

      {/* CODE */}
      <h1 className="text-6xl font-bold text-red-500">
        {code}
      </h1>

      {/* DESCRIPTION */}
      <p className="text-lg text-gray-600 mt-2">
        {description}
      </p>

      {/* BUTTON */}
      <Link
        to="/"
        className="mt-6 bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-xl transition"
      >
        Back to Dashboard
      </Link>

    </div>
  );
}