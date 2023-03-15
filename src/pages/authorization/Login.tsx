import React from "react";
import { Form, NavLink, useNavigation } from "react-router-dom";
import { Input } from "@/components";

import styles from "./styles/AuthPages.module.css";

const Login = () => {
  const { state } = useNavigation();
  return (
    <section className={styles.container}>
      <div className={styles.formWrapper}>
        <h1>Welcome, Alien</h1>
        <Form className={styles.form} method="post">
          <Input name="email" label="Email" required />
          <Input name="password" type="password" label="Password" required />
          <button type="submit">
            {state === "submitting" ? "Loading" : "Login"}
          </button>
        </Form>
        <div className={styles.actions}>
          <NavLink to="../signup">Not registered yet? Signup!</NavLink>
          <NavLink to="../forgot">Forgot password?</NavLink>
        </div>
      </div>
    </section>
  );
};

export default Login;
