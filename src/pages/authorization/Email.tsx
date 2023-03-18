import React, { useState } from "react";
import { Navigate, NavLink } from "react-router-dom";
import { Button } from "@/components";

const Email = () => {
  const storedPass = localStorage.getItem("tempStoredPass");
  const pass = storedPass ? JSON.parse(storedPass) : undefined;
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(pass);
    setCopied(true);
  };

  return !pass ? (
    <Navigate to="/" />
  ) : (
    <section>
      <h1>Your password:</h1>
      <div>
        <span>{pass}</span>
        <Button onClick={handleCopy}>
          {copied ? "Copied" : "Copy to clipboard"}
        </Button>
      </div>
      <NavLink
        onClick={() => {
          localStorage.removeItem("tempStoredPass");
        }}
        to="/auth/login"
      >
        Go to Login page
      </NavLink>
    </section>
  );
};

export default Email;
