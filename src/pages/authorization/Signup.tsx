import React from "react";
import { Form, NavLink, useNavigation, useActionData } from "react-router-dom";
import { Button, Input } from "@/components";

import styles from "./styles/AuthPages.module.css";

const Signup = () => {
  const { state } = useNavigation();
  const errors = useActionData();
  const loading = state === "submitting";

  console.log(errors);


  return (
    <section className={styles.container}>
      <div className={styles.formWrapper}>
        <Form className={styles.form} method="post">
          <h1 className={styles.formTitle}>Who are you?</h1>
          <Input
            name="username"
            label="Your name"
            required
            disabled={loading}
          />
          <Input
            name="homeplanet"
            label="What is your home planet?"
            disabled={loading}
          />
          <Input name="email" label="Email" required disabled={loading} />
          <Input
            name="password"
            type="password"
            label="Password"
            required
            disabled={loading}
          />
          <Input
            name="confirmation"
            type="password"
            label="Confirm password"
            required
            disabled={loading}
          />
          <Button
            ariaLabel="Signup form submit button"
            className={styles.formSubmitButton}
            type="submit"
            isLoading={loading}
            disabled={loading}
          >
            Signup
          </Button>
          <div className={styles.actions}>
            <NavLink className={styles.actionLink} to="../login">
              Already registered? Login!
            </NavLink>
            <NavLink className={styles.actionLink} to="../forgot">
              Forgot password?
            </NavLink>
          </div>
        </Form>
      </div>
    </section>
  );
};

export default Signup;
