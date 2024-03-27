import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/auth";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false); // Add loading state
  const navigate = useNavigate();
  const [auth, setAuth] = useAuth();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true); // Set loading state to true when login starts
  
    try {
      const res = await axios.post("https://salon-server-jupe.onrender.com/auth/login", {
        email,
        password,
      });
      
      if (res?.data?.success) {
        toast.success("Login successfull");
        setAuth({
          ...auth,
          user: res.data.user,
          token: res.data.token,
        });
        localStorage.setItem("auth", JSON.stringify(res.data));
        navigate(location.state || "/");
      } else {
        toast.error("Wrong email or password");
      }
    } catch (error) {
      if (error.response) {
        // The request was made and the server responded with a status code
        console.error("Response data:", error.response.data);
        console.error("Response status:", error.response.status);
        console.error("Response headers:", error.response.headers);
        toast.error("Wrong email or password");
      } else if (error.request) {
        // The request was made but no response was received
        console.error("No response received:", error.request);
        toast.error("No response from the server");
      } else {
        // Something happened in setting up the request that triggered an Error
        console.error("Request setup error:", error.message);
        toast.error("Error setting up the request");
      }
    } finally {
      setLoading(false); // Set loading state to false after login attempt
    }
  };
  
  return (
    <div className="mx-auto max-w-screen-xl pt-28 lg:min-h-screen rounded-xl flex justify-center items-center px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-lg bg-white rounded-xl">
        <form
          onSubmit={handleLogin}
          className="mb-0 mt-6 space-y-4 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8"
        >
          <p className="text-center text-lg font-medium">
            Sign in to your account
          </p>

          <label htmlFor="email" className="sr-only">
            Email
          </label>

          <input
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            type="email"
            className="w-full rounded-lg border-2 border-gray-200 p-4 pe-12 text-sm shadow-sm"
            placeholder="Enter email"
          />

          <label htmlFor="password" className="sr-only">
            Password
          </label>

          <input
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            type="password"
            className="w-full rounded-lg border-2 border-gray-200 p-4 pe-12 text-sm shadow-sm"
            placeholder="Enter password"
          />

          <Link to="/forgetpass">
            <h1 className="w-full underline text-green-600 flex justify-end">
              Forgot password?
            </h1>
          </Link>
          <button
            type="submit"
            disabled={loading} // Disable button while loading
            className="block w-full rounded-lg btn2 bg-indigo-600 px-5 py-3 text-sm font-medium text-white"
          >
            {loading ? "Logging in..." : "Sign in"} {/* Show loading text if loading */}
          </button>
          <h1 className="text-center">OR</h1>

          <p className="text-center text-sm text-gray-500">
            No account?
            <Link to="/register" className="underline text-blue-600">
              {" "}
              Sign up
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
