import React from "react";
import { ActionLink, Form, FormFields } from "@/features";

import styles from "./styles/AuthPages.module.css";

const signupFormFields: FormFields = {
  username: {
    label: "Your name",
    required: true,
    type: "input",
  },
  home_planet: {
    label: "What is your home planet?",
    required: true,
    type: "input",
  },
  email: {
    label: "Email",
    required: true,
    type: "input",
  },
  password: {
    label: "Password",
    required: true,
    type: "password",
  },
  password_confirmation: {
    label: "Confirm password",
    required: true,
    type: "password",
  },
};

const signupFromLinks: ActionLink[] = [
  {
    to: "../login",
    text: "Already registered? Login!",
  },
  {
    to: "../forgot",
    text: "Forgot password?",
  },
];

const Signup = () => {
  return (
    <section className={styles.container}>
      <div className={styles.blockWrapper}>
        <Form
          fields={signupFormFields}
          actionLinks={signupFromLinks}
          submitButtonText="Signup"
          title="Who are you?"
        />
      </div>
    </section>
  );
};

export default Signup;
