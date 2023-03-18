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
          {userData.is_evil === "true" && (
            <>
              {userData.home_planet === "Mars" && (
                <>
                  <p>and</p>
                  <article
                    className={`${styles.evilSection} ${styles.evilMartianSection}`}
                  >
                    <h3>EVILMARTIANS ARE AMAZING</h3>
                    <p>
                      You can talk with your relatives{" "}
                      <a
                        className={styles.actionLink}
                        href="https://evilmartians.com/chronicles"
                        rel="nofollow"
                        target="_blank"
                      >
                        here
                      </a>
                    </p>
                  </article>
                </>
              )}
              <article className={styles.evilSection}>
                <h3 className={styles.evilTitle}>Rules for Evil aliens:</h3>
                <ul className={styles.evilList}>
                  <li>Don't eat good people</li>
                  <li>Don't scare the kids</li>
                  <li>Do not steal cows with a gravity beam</li>
                </ul>
              </article>
            </>
          )}
          <p>To get your Earth ID scan this QR below:</p>
          <img
            className={blockStyles.image}
            src={QRCode}
            alt="Registration QR code"
          />
          <p>
            or follow the{" "}
            <a
              aria-label="Registration information link"
              className={styles.actionLink}
              href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
              rel="nofollow"
              target="_blank"
              tabIndex={0}
            >
              link
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Home;
