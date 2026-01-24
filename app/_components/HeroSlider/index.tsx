"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import styles from "./index.module.css";

const images = ["/slide1.jpg", "/slide2.jpg", "/slide3.jpg", "/slide4.jpg"];

export default function HeroSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => {
        let nextIndex;
        do {
          nextIndex = Math.floor(Math.random() * images.length);
        } while (nextIndex === prev && images.length > 1);
        return nextIndex;
      });
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.slider}>
      {images.map((src, index) => (
        <div
          key={src}
          className={`${styles.slide} ${
            index === currentIndex ? styles.active : ""
          }`}
        >
          <Image
            src={src}
            alt="Hero Background"
            fill
            style={{ objectFit: "cover" }}
            priority={index === 0}
          />
          <div className={styles.overlay} />
        </div>
      ))}
    </div>
  );
}
