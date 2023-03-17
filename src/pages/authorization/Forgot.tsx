import React from 'react';
import { Form, NavLink, useNavigation } from "react-router-dom";
import { Button, Input } from "@/components";

import styles from "./styles/AuthPages.module.css";


const Forgot = () => {
  const { state } = useNavigation();
  const loading = state === "submitting";
  return (
    <section className={styles.container}>
      <div className={styles.formWrapper}>
        <Form className={styles.form} method="post">
          <h1 className={styles.formTitle}>Forgot your password?</h1>
          <Input name="email" label="Email" required disabled={loading} />
          <Button
            ariaLabel="Forgot password form submit button"
            className={styles.formSubmitButton}
            type="submit"
            isLoading={loading}
            disabled={loading}
          >
            Help me to remember
          </Button>
          <div className={styles.actions}>
            <NavLink className={styles.actionLink} to="../signup">Not registered yet? Signup!</NavLink>
            <NavLink className={styles.actionLink} to="../login">Remembered password? Login!</NavLink>
          </div>
        </Form>
      </div>
    </section>
  );
};


export default Forgot;
