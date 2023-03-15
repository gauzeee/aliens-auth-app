import React from "react";
import { Outlet } from "react-router-dom";

import styles from "./styles/Layouts.module.css";

export const InnerLayout = ({ children }: { children?: React.ReactNode }) => {
  return (
    <div className={styles.layout}>
      <header>Header</header>
      <main className={styles.layoutContent}>
        <Outlet />
        {children}
      </main>
      <footer>Footer</footer>
    </div>
  );
};
