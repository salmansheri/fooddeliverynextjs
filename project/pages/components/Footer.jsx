import React from 'react'; 
import styles from '@/styles/Footer.module.css'; 
import Image from 'next/image';

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
      <Image src="/img/pizza.webp" alt="bg" height={850} width={900} />

      </div>
      <div className={styles.item}>
        <div className={styles.card}>
          <h2 className={styles.motto}>
            OH YES, WE DID THE PIZZA, WELL BAKED SLICE OF PIZZA
          </h2>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>FIND OUR RESTAURANTS</h1>
          <p className={styles.text}>
            4/54G, Indian Nagar, 
             <br />Gangaleri,
             <br /> Krishnagiri. 
             
          </p>
          <p className={styles.text}>
            4/54G, Indian Nagar, 
             <br />Gangaleri,
             <br /> Krishnagiri. 
             
          </p>
          <p className={styles.text}>
            4/54G, Indian Nagar, 
             <br />Gangaleri,
             <br /> Krishnagiri. 
             
          </p>
          <p className={styles.text}>
            4/54G, Indian Nagar, 
             <br />Gangaleri,
             <br /> Krishnagiri. 
             
          </p>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>
            WORKING HOURS
          </h1>
          <p className={styles.text}>
            MONDAY UNTIL FRIDAY
            <br /> 9: 00 - 22:00
          </p>
          <p className={styles.text}>
            SATURDAY - SUNDAY 
            <br /> 12: 00 - 24:00
          </p>
        </div>
      </div>

    </div>
  )
}

export default Footer