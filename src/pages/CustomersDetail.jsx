import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import PageHeader from "../components/PageHeader";

export default function CustomersDetail() {
  const { id } = useParams();

  const [customer, setCustomer] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get(`https://dummyjson.com/users/${id}`)
      .then((response) => {

        if (response.status !== 200) {
          setError("Failed to fetch customer");
          return;
        }

        setCustomer(response.data);
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
          title="Customer Detail"
          breadcrumb="Dashboard / Customers / Detail"
        />

        <div className="bg-white p-6 rounded-2xl shadow text-center">

          <h1 className="text-2xl font-bold text-red-500 mb-2">
            Error
          </h1>

          <p className="text-gray-500">
            {error}
          </p>

          <Link
            to="/customers"
            className="inline-block mt-5 bg-gray-800 text-white px-5 py-2 rounded-xl"
          >
            Back
          </Link>

        </div>

      </div>
    );
  }

  // LOADING
  if (!customer) {
    return (
      <div className="px-6 py-6">

        <PageHeader
          title="Customer Detail"
          breadcrumb="Dashboard / Customers / Detail"
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
        title="Customer Detail"
        breadcrumb="Dashboard / Customers / Detail"
      />

      <div className="bg-white rounded-2xl shadow-lg overflow-hidden max-w-5xl mx-auto">

        {/* IMAGE */}
        <div className="bg-gray-100 p-6 flex justify-center">

          <img
            src={customer.image}
            alt={customer.firstName}
            className="rounded-2xl w-72 h-72 object-cover shadow"
          />

        </div>

        {/* CONTENT */}
        <div className="p-8">

          <div className="flex items-center justify-between flex-wrap gap-4 mb-6">

            <div>

              <h1 className="text-3xl font-bold text-gray-800">
                {customer.firstName} {customer.lastName}
              </h1>

              <p className="text-gray-400 mt-1">
                Customer ID : #{customer.id}
              </p>

            </div>

            <div className="bg-green-100 text-green-700 px-4 py-2 rounded-xl font-semibold">
              Age : {customer.age} Years
            </div>

          </div>

          {/* DETAIL */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            <div className="space-y-4">

              <div>
                <p className="text-sm text-gray-400">
                  Email
                </p>

                <h3 className="font-semibold text-lg">
                  {customer.email}
                </h3>
              </div>

              <div>
                <p className="text-sm text-gray-400">
                  Phone
                </p>

                <h3 className="font-semibold text-lg">
                  {customer.phone}
                </h3>
              </div>

              <div>
                <p className="text-sm text-gray-400">
                  Gender
                </p>

                <h3 className="font-semibold text-lg capitalize">
                  {customer.gender}
                </h3>
              </div>

              <div>
                <p className="text-sm text-gray-400">
                  Birth Date
                </p>

                <h3 className="font-semibold text-lg">
                  {customer.birthDate}
                </h3>
              </div>

            </div>

            <div className="space-y-4">

              <div>
                <p className="text-sm text-gray-400">
                  Address
                </p>

                <h3 className="font-semibold text-lg">
                  {customer.address.address}
                </h3>
              </div>

              <div>
                <p className="text-sm text-gray-400">
                  City
                </p>

                <h3 className="font-semibold text-lg">
                  {customer.address.city}
                </h3>
              </div>

              <div>
                <p className="text-sm text-gray-400">
                  University
                </p>

                <h3 className="font-semibold text-lg">
                  {customer.university}
                </h3>
              </div>

              <div>
                <p className="text-sm text-gray-400">
                  Company
                </p>

                <h3 className="font-semibold text-lg">
                  {customer.company.name}
                </h3>
              </div>

            </div>

          </div>

          {/* BUTTON */}
          <div className="mt-8 flex gap-3">

            <Link
              to="/customers"
              className="bg-gray-800 hover:bg-black text-white px-5 py-2 rounded-xl transition"
            >
              Back
            </Link>

            <button
              className="bg-green-500 hover:bg-green-600 text-white px-5 py-2 rounded-xl transition"
            >
              Contact Customer
            </button>

          </div>

        </div>

      </div>

    </div>
  );
}