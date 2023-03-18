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
  const userData = tokenService.get();



  return (
    <div className={styles.layout}>
      <header className={styles.layoutHeader}>
        <p>Hey, {userData.username}!</p>
        <Button onClick={handleLogout}>Logout</Button>
      </header>
      <main className={styles.layoutContent}>
        <Outlet />
        {children}
      </main>
    </div>
  );
};
