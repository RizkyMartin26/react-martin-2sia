export default function ErrorPage({ code, message, image }) {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center bg-gray-100">
      <img src={image} alt="error" className="w-64 mb-6" />

      <h1 className="text-5xl font-bold text-gray-800">{code}</h1>
      <p className="text-gray-500 mt-2">{message}</p>

      <a href="/" className="mt-5 bg-blue-500 text-white px-6 py-2 rounded-lg">
        Back to Home
      </a>
    </div>
  );
}