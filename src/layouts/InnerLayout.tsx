import React from "react";
import { Outlet, useNavigate } from "react-router-dom";

import styles from "./styles/Layouts.module.css";
import { Button } from "@/components";
import { tokenService } from "@/api";

export const InnerLayout = ({ children }: { children?: React.ReactNode }) => {
  const navigate = useNavigate();
  const handleLogout = () => {
    tokenService.remove();
    navigate("/auth/login");
  };
  return (
    <div className={styles.layout}>
      <header>
        Header <Button onClick={handleLogout}>Logout</Button>
      </header>
      <main className={styles.layoutContent}>
        <Outlet />
        {children}
      </main>
      <footer>Footer</footer>
    </div>
  );
};
