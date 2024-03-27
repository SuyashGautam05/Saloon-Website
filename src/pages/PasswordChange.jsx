import axios from "axios";
import { useState } from "react";
import PropTypes from 'prop-types';
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const PasswordChange = (props) => {
  const navigate = useNavigate()
  const { email } = props;
  const [newPassword, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleChangePassword = async (e) => {
    e.preventDefault(); // Prevent the default form submission behavior
    
    setError("");
    setSuccessMessage("");
    
    // Check if newPassword and confirmPassword are not empty
    if (!newPassword || !confirmPassword) {
      setError("Please enter both the new password and confirm password");
      return;
    }
  
    // Check if passwords match
    if (newPassword !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }
  
    setLoading(true);
    
    try {
      const response = await axios.post("https://salon-server-jupe.onrender.com/auth/setnewPassword", {
        newPassword,
        email
      });
      if (response.data.success) {
        toast.success("Password changed successfully");
        setPassword("");
        setConfirmPassword("");
        navigate("/login");
      } else {
        setError("Unable to change password");
      }
    } catch (error) {
      setError("Unable to change password");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="h-screen flex justify-center items-center">
      <div className="w-full gap-6 max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800">
        <div className="px-6 py-4">
          <h3 className="mt-3 text-xl font-medium text-center text-gray-600 dark:text-gray-200">
            Welcome Back
          </h3>
          <p className="mt-1 text-center text-gray-500 dark:text-gray-400">
            Change Your Password
          </p>
          <form>
            <div className="w-full mt-4">
              <input
                value={email}
                readOnly
                className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-lg dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300"
                type="email"
                aria-label="Email"
              />
            </div>
            <div className="w-full mt-4">
              <input
                value={newPassword}
                onChange={(e) => setPassword(e.target.value)}
                className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-lg dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300"
                type="password"
                placeholder="New Password"
                aria-label="New Password"
              />
            </div>
            <div className="w-full mt-4">
              <input
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-lg dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300"
                type="password"
                placeholder="Confirm Password"
                aria-label="Confirm Password"
              />
            </div>
            {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
            {successMessage && <p className="text-green-500 text-sm mt-2">{successMessage}</p>}
            <div className="flex justify-center items-center">
              <button
                onClick={handleChangePassword}
                disabled={loading}
                className={`my-6 text-center w-full bg-[#537f3c] text-white py-2 px-4 rounded-md ${loading ? "opacity-50 cursor-not-allowed" : ""}`}
              >
                {loading ? "Changing Password..." : "Change Password"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

PasswordChange.propTypes = {
  email: PropTypes.string,
};

export default PasswordChange;
