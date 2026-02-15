import { useState } from "react";
import logo from "../assets/photo.jpeg"
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [role, setRole] = useState("student");
  const navigate = useNavigate(); // router navigate

  // Form submit handler
  const handleLogin = (e) => {
    e.preventDefault();

    // Role ke hisaab se dashboard par redirect
    if (role === "student") {
      navigate("/student-dashboard");
    } else {
      navigate("/dashboard"); // admin dashboard
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="max-w-5xl w-full bg-white rounded-2xl shadow-xl overflow-hidden grid md:grid-cols-2">
        
        {/* Left Section */}
        <div className="relative bg-linear-to-br from-green-50 to-green-100 p-10 flex flex-col justify-center">
          <div className="absolute top-0">
            <img src={logo} alt="logo" />
          </div>
          <div className="mb-6">
            <h2 className="text-3xl font-bold text-gray-800">Campus Portal</h2>
            <p className="mt-3 text-gray-600">
              Manage reports, complaints <br /> & events in one place.
            </p>
          </div>
          <div className="absolute bottom-0 left-0 w-full h-40 bg-linear-to-r from-green-200 to-green-400 rounded-t-full opacity-40"></div>
        </div>

        {/* Right Section */}
        <div className="p-10">
          <h3 className="text-2xl font-semibold text-gray-800 mb-6">Login</h3>

          {/* FORM */}
          <form className="space-y-4" onSubmit={handleLogin}>
            <div>
              <label className="text-sm text-gray-600">Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full mt-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
                required
              />
            </div>

            <div>
              <label className="text-sm text-gray-600">Password</label>
              <input
                type="password"
                placeholder="Enter your password"
                className="w-full mt-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
                required
              />
            </div>

            {/* Role Toggle */}
            <div className="flex bg-gray-100 rounded-lg p-1">
              <button
                type="button"
                onClick={() => setRole("student")}
                className={`flex-1 py-2 rounded-md text-sm font-medium transition ${
                  role === "student" ? "bg-white shadow text-green-600" : "text-gray-600"
                }`}
              >
                Student
              </button>
              <button
                type="button"
                onClick={() => setRole("admin")}
                className={`flex-1 py-2 rounded-md text-sm font-medium transition ${
                  role === "admin" ? "bg-white shadow text-green-600" : "text-gray-600"
                }`}
              >
                Admin
              </button>
            </div>

            {/* Login Button */}
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-sm font-medium transition"
            >
              Log In
            </button>

            {/* Google Button */}
            <button
              type="button"
              className="w-full flex items-center justify-center gap-2 border py-2 rounded-sm hover:bg-gray-50 transition"
            >
              Sign in with Google
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
