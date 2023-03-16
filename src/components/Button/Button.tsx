import React from "react";

import styles from "./Button.module.css";
import { ButtonLoader } from "@/components/Button/ButtonLoader";

type ButtonPropsTypes = {
  isLoading?: boolean;
  disabled?: boolean;
  children?: React.ReactNode;
  type?: "submit" | "button";
  ariaLabel?: string;
  className?: string;
};

export const Button = (props: ButtonPropsTypes) => {
  const { isLoading, children, disabled, type, ariaLabel, className } = props;
  return (
    <button
      className={`${styles.button}${className ? ` ${className}` : ""}`}
      disabled={disabled}
      type={type}
      tabIndex={0}
      aria-label={ariaLabel || "Button"}
    >
      {isLoading ? <ButtonLoader /> : children}
    </button>
  );
};
