import React, { useState } from "react";

const CheckPassword = () => {
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
  return <div></div>;
};

export default CheckPassword;
