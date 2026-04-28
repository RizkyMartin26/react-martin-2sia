import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { BsFillExclamationDiamondFill } from "react-icons/bs";
import { ImSpinner2 } from "react-icons/im";

export default function Login() {
  // ✅ NAVIGATE
  const navigate = useNavigate();

  // ✅ STATE
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // ✅ TAMBAHAN VALIDASI (TANPA UBAH STRUKTUR)
  const [validation, setValidation] = useState({
    email: "",
    password: "",
  });

  const [dataForm, setDataForm] = useState({
    email: "",
    password: "",
  });

  // ✅ HANDLE INPUT
  const handleChange = (e) => {
    const { name, value } = e.target;

    setDataForm({
      ...dataForm,
      [name]: value,
    });

    // hapus error validasi saat mengetik
    setValidation({
      ...validation,
      [name]: "",
    });
  };

  // ✅ VALIDASI
  const validateForm = () => {
    let valid = true;
    let newError = { email: "", password: "" };

    if (!dataForm.email) {
      newError.email = "Username is required";
      valid = false;
    }

    if (!dataForm.password) {
      newError.password = "Password is required";
      valid = false;
    }

    setValidation(newError);
    return valid;
  };

  // ✅ HANDLE SUBMIT
  const handleSubmit = async (e) => {
    e.preventDefault();

    setError("");

    // ✅ CEK VALIDASI DULU
    if (!validateForm()) return;

    setLoading(true);

    axios
      // ✅ ENDPOINT DIPERBAIKI (INI PENYEBAB ERROR KEMARIN)
      .post("https://dummyjson.com/auth/login", {
        username: dataForm.email,
        password: dataForm.password,
      })
      .then((response) => {
        if (response.status !== 200) {
          setError("Login gagal");
          return;
        }

        navigate("/");
      })
      .catch((err) => {
        if (err.response) {
          setError(err.response.data.message || "Invalid credentials");
        } else {
          setError("Terjadi kesalahan jaringan");
        }
      })
      .finally(() => {
        setLoading(false);
      });
  };

  // ✅ ERROR UI
  const errorInfo = error ? (
    <div className="bg-red-100 mb-5 p-4 text-sm text-red-600 rounded flex items-center">
      <BsFillExclamationDiamondFill className="mr-2" />
      {error}
    </div>
  ) : null;

  // ✅ LOADING UI
  const loadingInfo = loading ? (
    <div className="bg-gray-100 mb-5 p-4 text-sm text-gray-600 rounded flex items-center">
      <ImSpinner2 className="mr-2 animate-spin" />
      Mohon Tunggu...
    </div>
  ) : null;

  return (
    <div>
      <h2 className="text-2xl font-semibold text-gray-700 mb-6 text-center">
        Welcome Back 👋
      </h2>

      {errorInfo}
      {loadingInfo}

      <form onSubmit={handleSubmit}>
        {/* USERNAME */}
        <div className="mb-5">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Username
          </label>
          <input
            type="text"
            name="email"
            value={dataForm.email}
            onChange={handleChange}
            placeholder="emilys"
            className="w-full px-4 py-2 border rounded-lg bg-gray-50"
          />

          {/* ✅ VALIDASI */}
          {validation.email && (
            <p className="text-red-500 text-sm mt-1">
              {validation.email}
            </p>
          )}
        </div>

        {/* PASSWORD */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Password
          </label>
          <input
            type="password"
            name="password"
            value={dataForm.password}
            onChange={handleChange}
            placeholder="emilyspass"
            className="w-full px-4 py-2 border rounded-lg bg-gray-50"
          />

          {/* ✅ VALIDASI */}
          {validation.password && (
            <p className="text-red-500 text-sm mt-1">
              {validation.password}
            </p>
          )}
        </div>

        {/* BUTTON */}
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-2 rounded-lg transition"
        >
          {loading ? "Loading..." : "Login"}
        </button>
      </form>
    </div>
  );
}