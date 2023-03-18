import React, { useState } from "react";
import { Navigate, NavLink } from "react-router-dom";
import { Button } from "@/components";

import blockStyles from "./styles/AuthPages.module.css";
import formStyles from "@/features/Form/Form.module.css";

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
    <section className={blockStyles.container}>
      <div className={blockStyles.blockWrapper}>
        <div className={formStyles.form}>
          <h1 className={formStyles.formTitle}>Your password:</h1>
          <p>{pass}</p>
          <Button className={formStyles.formSubmitButton} onClick={handleCopy}>
            {copied ? "Copied" : "Copy to clipboard"}
          </Button>
          <div className={formStyles.actions}>
            <NavLink
              className={formStyles.actionLink}
              onClick={() => {
                localStorage.removeItem("tempStoredPass");
              }}
              to="/auth/login"
            >
              Go to Login page
            </NavLink>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Email;
