import React, {useState} from "react";
import styles from "@/styles/Featured.module.css";
import Image from "next/image";

const Featured = () => {
  const images = [
    "/img/featured.jpg",
    "/img/featured2.jpg",
    "/img/featured3.jpg",
  ];
  const [index, setIndex] = useState(0); 

  const handleArrow = (direction) => {
    if(direction === "l") {
      setIndex(index !== 0 ? index - 1 : 2)
    }

    if(direction==="r") {
      setIndex(index !== 2 ? index + 1 : 0 )
    }
  }

  console.log(index); 
  return (
    <div className={styles.container}>
    <div className={styles.arrowContainer} style={{left: 0}} onClick={() => handleArrow("l")}>
    <Image src="/img/arrowl.png" fill/>

    </div>
     
      <div className={styles.wrapper} style={{transform: `translateX(${index})`}}>
        <div className={styles.imgContainer}>
          {images.map((image, i) => (
            <Image key={i} src={image} width={10500} height={900} objectFit="contain"/>
          ))}
        </div>
      </div>
      <div className={styles.arrowContainer} style={{right: 0}} onClick={() => handleArrow("r")}>
      <Image src="/img/arrowr.png" fill/>

      </div>
     
    </div>
  );
};

export default Featured;
