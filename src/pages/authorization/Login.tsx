import React from "react";
import { ActionLink, Form, FormFields } from "@/features";

import styles from "./styles/AuthPages.module.css";

const loginFormFields: FormFields = {
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
};

const loginFormLinks: ActionLink[] = [
  {
    to: "../signup",
    text: "Not registered yet? Signup!",
  },
  {
    to: "../forgot",
    text: "Forgot password?",
  },
];

const Login = () => (
  <section className={styles.container}>
    <div className={styles.formWrapper}>
      <Form
        fields={loginFormFields}
        submitButtonText="Login"
        actionLinks={loginFormLinks}
        title="Welcome, Alien!"
      />
    </div>
  </section>
);

export default Login;
