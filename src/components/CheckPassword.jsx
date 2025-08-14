import React, { useState } from "react";

export default function CheckPassword() {
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [createdPassword, setCreatedPassword] = useState("");

  const requirements = [
    { label: "At least 8 characters", check: password.length >= 8 },
    {
      label: "Contains uppercase character",
      check: [...password].some((c) => c >= "A" && c <= "Z"),
    },
    {
      label: "Contains lowercase character",
      check: [...password].some((c) => c >= "a" && c <= "z"),
    },
    {
      label: "Contains a digit",
      check: [...password].some((c) => c >= "0" && c <= "9"),
    },
    {
      label: "Contains a special character",
      check: [...password].some((c) => !/[a-zA-Z0-9]/.test(c)),
    },
  ];

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-bold text-center mb-2">Create Password</h2>
        <p className="text-center text-gray-500 mb-4">
          Enter a secure password
        </p>

        <div className="relative mb-4">
          <input
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            className="w-full border rounded-lg p-2 pr-10 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="button"
            className="absolute right-3 top-2 text-gray-500"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? "🙈" : "👁️"}
          </button>
        </div>

        <h3 className="font-semibold mb-2">Password Requirements</h3>
        <ul className="space-y-1 mb-4">
          {requirements.map((req, index) => (
            <li key={index} className="flex items-center space-x-2">
              <span
                className={`w-4 h-4 flex items-center justify-center rounded-full border ${
                  req.check
                    ? "bg-green-500 border-green-500 text-white"
                    : "border-gray-400"
                }`}
              >
                {req.check && "✔"}
              </span>
              <span
                className={`${req.check ? "text-green-600" : "text-gray-700"}`}
              >
                {req.label}
              </span>
            </li>
          ))}
        </ul>

        <button
          onClick={handleSubmit}
          className="w-full bg-gray-600 text-white p-2 rounded-lg hover:bg-gray-700 transition"
        >
          Submit
        </button>

        {createdPassword && (
          <div className="mt-4 p-2 bg-green-100 border border-green-300 rounded text-green-700">
            Created Password: <strong>{createdPassword}</strong>
          </div>
        )}
      </div>
    </div>
  );
}
