import { useState } from "react";
import ModalRegister from "./ModalRegister";

const FormLogin = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    remember: false,
  });

  const [errors, setErrors] = useState({});
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));

    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.username.trim()) {
      newErrors.username = "Please input your username!";
    }

    if (!formData.password.trim()) {
      newErrors.password = "Please input your password!";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (validateForm()) {
      console.log("Success:", formData);
    } else {
      console.log("Failed: Form validation errors");
    }
  };

  return (
    <div className="rounded-lg p-2 w-full max-w-3xl">
      {/* Logo */}
      <div className="mb-8">
        <h2 className="text-dark-red text-lg font-bold">[LOGO]</h2>
      </div>

      {/* Header */}
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-black mb-2">Log in.</h1>
        <p className="text-gray-fault">Sign in your account</p>
      </div>

      {/* Form */}
      <form className="space-y-4" onSubmit={handleSubmit}>
        {/* Username Field */}
        <div>
          <label
            htmlFor="username"
            className="block text-sm font-bold text-black mb-2"
          >
            Username
          </label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleInputChange}
            placeholder="Enter your username"
            className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-dark-red focus:border-transparent ${
              errors.username ? "border-dark-red" : "border-gray-fault"
            }`}
          />
          {errors.username && (
            <p className="text-dark-red text-sm mt-1">{errors.username}</p>
          )}
        </div>

        {/* Password Field */}
        <div>
          <label
            htmlFor="password"
            className="block text-sm font-bold text-black mb-2"
          >
            Password
          </label>
          <div className="relative w-full">
            <input
              type={isPasswordVisible ? "text" : "password"}
              id="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              placeholder="Enter your password"
              className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-dark-red focus:border-transparent pr-10 ${
                errors.password ? "border-dark-red" : "border-gray-fault"
              }`}
            />
            <div
              onClick={togglePasswordVisibility}
              className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer"
            >
              {isPasswordVisible ? (
                <svg
                  className="h-5 w-5 text-gray-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a10.05 10.05 0 013.453-4.75M13.875 18.825L19.5 13.5M13.875 18.825A10.01 10.01 0 0019.5 13.5M13.875 18.825L14.25 18.5M19.5 13.5L14.25 18.5"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10.125 13.875a3 3 0 114.243-4.243M10.125 13.875L4.5 19.5"
                  />
                </svg>
              ) : (
                <svg
                  className="h-5 w-5 text-gray-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                  />
                </svg>
              )}
            </div>
          </div>
          {errors.password && (
            <p className="text-dark-red text-sm mt-1">{errors.password}</p>
          )}
        </div>

        {/* Remember Me Checkbox */}
        <div className="flex items-center">
          <input
            type="checkbox"
            id="remember"
            name="remember"
            checked={formData.remember}
            onChange={handleInputChange}
            className="h-3 w-3 text-red-600 focus:ring-dark-red border-gray-fault rounded"
          />
          <label
            htmlFor="remember"
            className="ml-2 block text-sm text-gray-kelaut"
          >
            Remember me
          </label>
        </div>

        {/* Submit Button */}
        <div className="pt-4 flex justify-center">
          <button
            type="submit"
            className="w-[200px] text-sm bg-gradient-to-r from-gradasi-dark-red-1 to-gradasi-light-red-1 text-white font-medium py-3 px-3 rounded-3xl shadow-md hover:from-gradasi-light-red-1 hover:to-gradasi-dark-red-1 transition duration-300"
          >
            SIGN IN
          </button>
        </div>
      </form>

      {/* Register Modal */}
      <div className="text-center mt-6">
        <span className="text-gray-fault">Don't have an account? </span>
        <button
          type="button"
          onClick={() => setIsModalOpen(true)} 
          className="text-dark-red font-bold hover:underline"
        >
          Register
        </button>
      </div>

      <ModalRegister 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </div>
  );
};

export default FormLogin;
