import React from "react";

// scss import
import styles from "./styles/Gallery.module.scss";

// components import
import SectionTitle from "../atoms/SectionTitle";
import Slide from "../molecules/Slide";

// hooks import
import useAOS from "@/hooks/useAOS";

const Gallery = () => {
  useAOS();
  return (
    <div className={styles.gallery}>
      <div className={styles.container}>
        <SectionTitle
          id={1}
          text="Gallery"
          idName="gallery"
          color="pink"
          align="left"
        />
        <div className={styles.mainTextBox}>
          <p className={styles.titleText} data-aos="fade-up">
            ここでは当日の会場・そして当日の様子のイメージをご覧いただけます。
            <br />
            当日は来てくださる皆様に最大限楽しんでいたけるように運営一同準備をしております！
          </p>
          <div className={styles.imgBox}>
            {/* 新しいコンポーネントをいかに追加 */}
            <Slide />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
