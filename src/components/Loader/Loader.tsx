import React from "react";

import styles from "./Loader.module.css";

type LoaderPropsTypes = {};

export const Loader = (props: LoaderPropsTypes) => {
  const {} = props;
  return (
    <div className={styles.loaderLayout}>
      <div className={styles.loaderWrapper}>
        <div className={styles.loader} />
        <div className={`${styles.loader} ${styles.loaderNext}`} />
      </div>
    </div>
  );
};
