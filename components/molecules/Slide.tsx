import React from "react";
import styles from "./styles/Slide.module.scss";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

// hooks import
import useAOS from "@/hooks/useAOS";

interface SlideProps {}

const Slide: React.FC<SlideProps> = () => {
  useAOS();
  return (
    <div className={styles.gallery} data-aos="fade-up">
      <Carousel autoPlay interval={10000} transitionTime={900} infiniteLoop>
        {/* 各スライドにスタイルを適用 */}
        <div className={styles.slide}>
          <img src="/images/gallery/gallery1.JPG" alt="My Photo 1" />
        </div>
        <div className={styles.slide}>
          <img src="/images/gallery/gallery2.JPG" alt="My Photo 1" />
        </div>
        <div className={styles.slide}>
          <img src="/images/gallery/gallery3.JPG" alt="My Photo 1" />
        </div>
        <div className={styles.slide}>
          <img src="/images/gallery/gallery4.JPG" alt="My Photo 1" />
        </div>
        <div className={styles.slide}>
          <img src="/images/gallery/gallery5.JPG" alt="My Photo 1" />
        </div>
        <div className={styles.slide}>
          <img src="/images/gallery/gallery6.JPG" alt="My Photo 1" />
        </div>
        <div className={styles.slide}>
          <img src="/images/gallery/gallery7.jpg" alt="My Photo 1" />
        </div>
        <div className={styles.slide}>
          <img src="/images/gallery/gallery8.jpg" alt="My Photo 1" />
        </div>
        {/* 以下、他の画像についても同様に追加 */}
      </Carousel>
    </div>
  );
};

export default Slide;
