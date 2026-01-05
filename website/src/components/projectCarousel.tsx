"use client";

import Image from "next/image";
import { useState } from "react";
import styles from "./projectCarousel.module.scss";

type ProjectCarouselProps = {
  images: string[];
  altPrefix: string;
};

export default function ProjectCarousel({ props, projectName }: { props: ProjectCarouselProps; projectName: string }) {
  const [index, setIndex] = useState(0);
  const total = props.images.length;

  if (total === 0) {
    return null;
  }

  const goPrev = () => setIndex((prev) => (prev - 1 + total) % total);
  const goNext = () => setIndex((prev) => (prev + 1) % total);

  return (
    <div className={styles.carousel}>
      <button className={styles.navButton} onClick={goPrev} aria-label="Previous image">
        ←
      </button>
      <div className={styles.imageFrame}>
        <Image
          src={`projects/${projectName}/${props.images[index]}`}
          alt={`${props.altPrefix} screenshot ${index + 1}`}
          width={900}
          height={520}
          className={styles.image}
        />
      </div>
      <button className={styles.navButton} onClick={goNext} aria-label="Next image">
        →
      </button>
      <div className={styles.dots} aria-hidden>
        {props.images.map((_, i) => (
          <span
            key={`dot-${i}`}
            className={`${styles.dot} ${i === index ? styles.activeDot : ""}`}
          />
        ))}
      </div>
    </div>
  );
}
