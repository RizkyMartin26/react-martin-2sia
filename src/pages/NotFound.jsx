import { Link } from "react-router-dom";

export default function ErrorPage({ code, description, image }) {
  return (
    <div className="flex flex-col items-center justify-center h-[80vh] text-center">
      
      <h1 className="text-6xl font-bold text-red-500">{code}</h1>

      <p className="text-xl text-gray-700 mt-2">{description}</p>

      {image && (
        <img src={image} className="w-60 mt-4" />
      )}

      <Link
        to="/"
        className="mt-6 bg-green-500 text-white px-6 py-2 rounded-xl"
      >
        Back to Dashboard
      </Link>

    </div>
  );
}