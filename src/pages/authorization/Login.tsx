import React, { useEffect, useRef } from "react";
import { Form, NavLink, useActionData, useNavigation } from "react-router-dom";
import { Button, Input } from "@/components";

import styles from "./styles/AuthPages.module.css";

const Login = () => {
  const { state } = useNavigation();
  const loading = state === "submitting";
  const actionData = useActionData();
  const formRef = useRef<HTMLFormElement>(null);
  const errors = actionData as { email: string; password: string };

  useEffect(() => {
    if (formRef.current && errors) {
      let focused = false;
      Object.keys(errors).forEach((field) => {
        if (errors[field as keyof typeof errors] && !focused) {
          const elem = formRef?.current?.querySelector(
            `input[name="${field}"]`
          ) as HTMLInputElement;
          if (elem) {
            elem.focus();
            focused = true;
          }
        }
      });
    }
  }, [errors]);

  return (
    <section className={styles.container}>
      <div className={styles.formWrapper}>
        <Form className={styles.form} method="post" ref={formRef}>
          <h1 className={styles.formTitle}>Welcome, Alien!</h1>
          <Input
            name="email"
            label="Email"
            required
            disabled={loading}
            error={errors?.email}
            aria-error={errors?.email}
          />
          <Input
            name="password"
            type="password"
            label="Password"
            required
            disabled={loading}
            error={errors?.password}
          />
          <Button
            ariaLabel="Login form submit button"
            className={styles.formSubmitButton}
            type="submit"
            isLoading={loading}
            disabled={loading}
          >
            Login
          </Button>
          <div className={styles.actions}>
            <NavLink className={styles.actionLink} to="../signup">
              Not registered yet? Signup!
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

export default Login;
