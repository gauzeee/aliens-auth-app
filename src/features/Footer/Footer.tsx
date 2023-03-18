import React from "react";

import styles from "./Footer.module.css";
import formStyles from "../Form/Form.module.css";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <a
        className={`${formStyles.actionLink} ${styles.footerLink}`}
        href="https://t.me/gauzeee"
        target="_blank"
        rel="nofollow"
      >
        Support
      </a>
      <p className={styles.footerText}>© gauzeee's Planet Guardian, {new Date().getFullYear()}</p>
    </footer>
  );
};
