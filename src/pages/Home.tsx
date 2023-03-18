import React from "react";
import { tokenService } from "@/api";
import QRCode from "@/images/QR_code.png";

import blockStyles from "@/pages/authorization/styles/AuthPages.module.css";
import styles from "@/features/Form/Form.module.css";

const Home = () => {
  const userData = tokenService.get();
  return (
    <section className={blockStyles.container}>
      <div className={blockStyles.blockWrapper}>
        <div className={styles.form}>
          <h1 className={styles.formTitle}>Hello, {userData.username}</h1>
          <p>Your registration on our planet is confirmed.</p>
          <p>You comes from:</p>
          <p className={blockStyles.planet}>{userData.home_planet}</p>
          <p>To get your Earth ID scan this QR below:</p>
          <img
            className={blockStyles.image}
            src={QRCode}
            alt="Registration QR code"
          />
        </div>
      </div>
    </section>
  );
};

export default Home;
