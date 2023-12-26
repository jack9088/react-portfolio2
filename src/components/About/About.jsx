import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>サイト概要</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/coding.png")}
          alt="Image"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img
              src={getImageUrl("about/Figma-icon.png")}
              width="50"
              alt="Cursor icon"
            />
            <div className={styles.aboutItemText}>
              <h3>プロトタイピング</h3>
              <p>
                このウェブサイトは私がFigmaでプロトタイピングしたものをHTML、CSS、JavaScript（React.js）でコーディングしました。
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img
              src={getImageUrl("about/React-icon.png")}
              width="50"
              alt="Server icon"
            />
            <div className={styles.aboutItemText}>
              <h3>デザイン</h3>
              <p>
                React.jsを用いることによりユーザビリティを高めました。また、画面の大きさに合わせてデザインが変わるレスポンシブデザインを採用しました。
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
