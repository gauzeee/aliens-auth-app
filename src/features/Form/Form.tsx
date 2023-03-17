import React, { useEffect, useRef } from "react";
import {
  Form as RouterForm,
  NavLink,
  useActionData,
  useNavigation,
} from "react-router-dom";
import { Button, Input } from "@/components";
import { ActionLink, FormFields } from "./types";

import styles from "./Form.module.css";

type FormPropsTypes = {
  fields: FormFields;
  title?: string;
  submitButtonText: string;
  actionLinks?: ActionLink[];
  method?: "post" | "get";
};

export const Form = (props: FormPropsTypes) => {
  const {
    fields,
    method = "post",
    submitButtonText,
    title,
    actionLinks,
  } = props;
  const { state } = useNavigation();
  const loading = state === "submitting";
  const actionData = useActionData();
  const formRef = useRef<HTMLFormElement>(null);
  const errors = actionData as Record<keyof typeof fields, string>;

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
    <RouterForm className={styles.form} method={method} ref={formRef}>
      <>
        {!!title && <h1 className={styles.formTitle}>{title}</h1>}
        {Object.entries(fields).map(([name, field]) => {
          switch (field.type) {
            case "input":
            case "password":
              return (
                <Input
                  key={name}
                  name={name}
                  label={field.label}
                  required={field.required}
                  type={field.type === "password" ? "password" : "text"}
                  disabled={loading}
                  error={errors?.[name]}
                />
              );

            default:
              return null;
          }
        })}
        <Button
          ariaLabel={`${submitButtonText} form submit button`}
          className={styles.formSubmitButton}
          type="submit"
          isLoading={loading}
          disabled={loading}
        >
          {submitButtonText}
        </Button>
        {!!actionLinks && (
          <div className={styles.actions}>
            {actionLinks.map((link) => (
              <NavLink key={link.to} className={styles.actionLink} to={link.to}>
                {link.text}
              </NavLink>
            ))}
          </div>
        )}
      </>
    </RouterForm>
  );
};
