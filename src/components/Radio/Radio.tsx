import React from "react";

import styles from "./Radio.module.css";
import inputStyles from "../Input/Input.module.css";

export type RadioOption = Record<"value" | "text" | "id", string>;

type RadioPropsTypes = {
  options: RadioOption[];
  label: string;
  name: string;
  required?: boolean;
  disabled?: boolean;
};

export const Radio = (props: RadioPropsTypes) => {
  const { label, options, name, required, disabled } = props;
  return (
    <fieldset
      className={`${inputStyles.inputWrapper} ${styles.fieldset}`}
      disabled={disabled}
    >
      {required && <span className={inputStyles.inputRequired}>*</span>}
      <legend className={styles.legend}>{label}</legend>
      {options.map((option) => (
        <div className={styles.radioContainer} key={option.text}>
          <input
            className={styles.radio}
            type="radio"
            value={option.value}
            name={name}
            required={required}
            id={option.id}
          />
          <label className={styles.radioLabel} htmlFor={option.id}>
            {option.text}
          </label>
        </div>
      ))}
    </fieldset>
  );
};
