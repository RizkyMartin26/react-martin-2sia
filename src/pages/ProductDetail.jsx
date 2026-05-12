import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import PageHeader from "../components/PageHeader";

export default function ProductDetail() {
  const { id } = useParams();

  const [product, setProduct] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get(`https://dummyjson.com/products/${id}`)
      .then((response) => {

        if (response.status !== 200) {
          setError("Failed to fetch product");
          return;
        }

        setProduct(response.data);
      })
      .catch((err) => {
        setError(err.message);
      });
  }, [id]);

  // ERROR
  if (error) {
    return (
      <div className="px-6 py-6">

        <PageHeader
          title="Product Detail"
          breadcrumb="Dashboard / Products / Detail"
        />

        <div className="bg-white p-6 rounded-2xl shadow text-center">

          <h1 className="text-2xl font-bold text-red-500 mb-2">
            Error
          </h1>

          <p className="text-gray-500">
            {error}
          </p>

          <Link
            to="/products"
            className="inline-block mt-5 bg-gray-800 text-white px-5 py-2 rounded-xl"
          >
            Back
          </Link>

        </div>

      </div>
    );
  }

  // LOADING
  if (!product) {
    return (
      <div className="px-6 py-6">

        <PageHeader
          title="Product Detail"
          breadcrumb="Dashboard / Products / Detail"
        />

        <div className="bg-white p-6 rounded-2xl shadow text-center">
          <p className="text-gray-500 text-lg">
            Loading...
          </p>
        </div>

      </div>
    );
  }

  return (
    <div className="px-6 py-6">

      <PageHeader
        title="Product Detail"
        breadcrumb="Dashboard / Products / Detail"
      />

      <div className="bg-white rounded-2xl shadow-lg overflow-hidden max-w-5xl mx-auto">

        {/* IMAGE */}
        <div className="bg-gray-100 p-6 flex justify-center">

          <img
            src={product.thumbnail}
            alt={product.title}
            className="rounded-2xl w-full max-w-md h-72 object-cover shadow"
          />

        </div>

        {/* CONTENT */}
        <div className="p-8">

          <div className="flex items-center justify-between flex-wrap gap-4 mb-6">

            <div>

              <h1 className="text-3xl font-bold text-gray-800">
                {product.title}
              </h1>

              <p className="text-gray-400 mt-1">
                Product ID : #{product.id}
              </p>

            </div>

            <div className="bg-green-100 text-green-700 px-4 py-2 rounded-xl font-semibold">
              Stock : {product.stock}
            </div>

          </div>

          {/* DETAIL */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            <div className="space-y-4">

              <div>
                <p className="text-sm text-gray-400">
                  Category
                </p>

                <h3 className="font-semibold text-lg">
                  {product.category}
                </h3>
              </div>

              <div>
                <p className="text-sm text-gray-400">
                  Brand
                </p>

                <h3 className="font-semibold text-lg">
                  {product.brand}
                </h3>
              </div>

              <div>
                <p className="text-sm text-gray-400">
                  Price
                </p>

                <h3 className="font-semibold text-2xl text-green-600">
                  Rp {product.price * 1000}
                </h3>
              </div>

            </div>

            <div>

              <p className="text-sm text-gray-400 mb-2">
                Description
              </p>

              <p className="text-gray-600 leading-relaxed">
                {product.description}
              </p>

            </div>

          </div>

          {/* BUTTON */}
          <div className="mt-8 flex gap-3">

            <Link
              to="/products"
              className="bg-gray-800 hover:bg-black text-white px-5 py-2 rounded-xl transition"
            >
              Back
            </Link>

            <button
              className="bg-green-500 hover:bg-green-600 text-white px-5 py-2 rounded-xl transition"
            >
              Buy Product
            </button>

          </div>

        </div>

      </div>

    </div>
  );
}