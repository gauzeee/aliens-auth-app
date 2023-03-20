import React from "react";

import styles from "./Header.module.css";
import { Button } from "@/components";
import { useNavigate } from "react-router-dom";
import { tokenService } from "@/api";

export const Header = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    tokenService.remove();
    navigate("/auth/login");
  };
  const userData = tokenService.get();
  return (
    <header className={styles.header}>
      <p>Hey, {userData.username}!</p>
      <Button ariaLabel="Logout" onClick={handleLogout}>Logout</Button>
    </header>
  );
};
