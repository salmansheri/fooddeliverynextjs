import React from "react";
import styles from "@/styles/Featured.module.css";
import Image from "next/image";

const Featured = () => {
  const images = [
    "/img/featured.png",
    "/img/featured2.png",
    "/img/featured3.png",
  ];
  return (
    <div className={styles.container}>
      <Image src="/img/arrowl.png" fill/>
      <div className={styles.wrapper}>
        <div className={styles.imgContainer}>
          {images.map((image, i) => (
            <Image key={i} src={image} fill />
          ))}
        </div>
      </div>
      <Image src="/img/arrowr.png" fill/>
    </div>
  );
};

export default Featured;
