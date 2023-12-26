import React from "react";

import styles from "./Teacher.module.css";
import { getImageUrl } from "../../utils";

export const Teacher = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>はじめに</h1>
        <p className={styles.description}>
          サイトをご覧いただきありがとうございます。サイトを通じて少しでも私のことを知っていただけたら幸いです。
        </p>
        <a href="mailto:discord502@heisei.be" className={styles.contactBtn}>
          問い合わせ
        </a>
      </div>
      <img
        src={getImageUrl("teacher/teacherImage.png")}
        alt="Teacher image of me"
        className={styles.teacherImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
