import React, { useState } from "react";
import styles from "@/styles/Featured.module.css";
import Image from "next/image";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
const Featured = () => {
  const images = [
    "/img/pizza1.jpeg",
    "/img/pizza2.webp",
    "/img/pizza3.webp",
  ];
  const [index, setIndex] = useState(0);

  const handleArrow = (direction) => {
    if (direction === "l") {
      setIndex(index !== 0 ? index - 1 : 2);
    }

    if (direction === "r") {
      setIndex(index !== 2 ? index + 1 : 0);
    }
  };

  console.log(index);
  return (
    

     <Carousel 
      autoPlay
      infiniteLoop
      showStatus={true}
      showIndicators={true}
      interval={3000}
      showThumbs={false}
      showArrows={true}
     >
    
          {images.map((image, i) => (
            <div key={image} >
            <Image
              
              src={image}
              width={10000}
              height={900}
              style={{ objectFit: "cover" }}
              alt="pizza"
            />
             </div>
          ))}
       

     </Carousel>
       
     
   
  
  );
};

export default Featured;
