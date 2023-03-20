import React, { useState } from "react";

import styles from "./Input.module.css";

type InputPropsTypes = {
  disabled?: boolean;
  type?: "text" | "password";
  tabIndex?: number;
  placeholder?: string;
  label: string;
  name: string;
  error?: string;
  required?: boolean;
};

export const Input = (props: InputPropsTypes) => {
  const [value, setValue] = useState<string>("");
  const {
    disabled = false,
    type,
    tabIndex = 0,
    placeholder,
    label,
    name,
    error,
    required,
  } = props;

  const [visibleType, setVisibleType] = useState<InputPropsTypes["type"]>(
    type || "text"
  );

  const handleChange = (e: React.SyntheticEvent<HTMLInputElement>) => {
    setValue(e.currentTarget.value);
  };

  const handleChangeType = () => {
    setVisibleType((prev) => (prev === "password" ? "text" : "password"));
  };

  const handleChangeTypeByKey = (e: React.KeyboardEvent) => {
    if (e.code === "Enter") {
      e.preventDefault();
      handleChangeType();
    }
  };

  const isPasswordInput = type === "password";

  return (
    <div
      className={`${styles.inputWrapper}${
        isPasswordInput ? ` ${styles.inputWrapperPassword}` : ""
      }${
        isPasswordInput && visibleType === "text"
          ? ` ${styles.inputWrapperPasswordShown}`
          : ""
      }${!!error ? ` ${styles.inputWrapperInvalid}` : ""}`}
    >
      <input
        required={required}
        value={value}
        onChange={handleChange}
        className={styles.input}
        name={name}
        tabIndex={tabIndex}
        type={visibleType}
        aria-label={error ? `${name} input error: ${error}` : label}
        disabled={disabled}
      />
      <label className={styles.inputLabel} htmlFor={name}>
        {label || placeholder}
      </label>
      {required && (
        <span title={`${name} is required`} className={styles.inputRequired}>
          *
        </span>
      )}
      {isPasswordInput && (
        <button
          aria-label="Show-Hide password button"
          type="button"
          tabIndex={0}
          onKeyDown={handleChangeTypeByKey}
          onClick={handleChangeType}
          className={`${styles.passwordButton} ${
            visibleType === "password"
              ? styles.hidePassword
              : styles.showPassword
          }`}
        />
      )}
      {!!error && (
        <span
          aria-label={`${name} input error: ${error}`}
          className={styles.inputError}
        >
          {error}
        </span>
      )}
    </div>
  );
};
