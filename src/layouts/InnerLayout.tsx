import React from "react";
import { Outlet } from "react-router-dom";
import { Footer, Header } from "@/features";

import styles from "./styles/Layouts.module.css";

export const InnerLayout = ({ children }: { children?: React.ReactNode }) => {
  return (
    <div className={styles.layout}>
      <Header />
      <main className={styles.layoutContent}>
        <Outlet />
        {children}
      </main>
      <Footer />
    </div>
  );
};
