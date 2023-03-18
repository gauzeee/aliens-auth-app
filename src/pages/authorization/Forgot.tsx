import React from "react";
import { ActionLink, Form, FormFields } from "@/features";

import styles from "./styles/AuthPages.module.css";

const forgotFormFields: FormFields = {
  email: {
    label: "Email",
    required: true,
    type: "input",
  },
};

const forgotFormLinks: ActionLink[] = [
  {
    to: "../signup",
    text: "Not registered yet? Signup!",
  },
  {
    to: "../login",
    text: "Did you remember the password? Login!",
  },
];

const Forgot = () => (
  <section className={styles.container}>
    <div className={styles.blockWrapper}>
      <Form
        fields={forgotFormFields}
        actionLinks={forgotFormLinks}
        title="Forgot your password?"
        submitButtonText="Help me to remember"
      />
    </div>
  </section>
);

export default Forgot;
