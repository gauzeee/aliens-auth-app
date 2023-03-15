import React from "react";
import { Outlet } from "react-router-dom";

import styles from "./styles/Layouts.module.css";

export const MainLayout = ({ children }: { children?: React.ReactNode }) => {
  return (
    <div className={styles.layout}>
      <main className={styles.layoutContent}>
        <Outlet />
        {children}
      </main>
    </div>
  );
};
