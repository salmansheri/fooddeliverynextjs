import React from 'react'
import styles from '@/styles/PizzaCard.module.css'; 
import Image from 'next/image';

const PizzaCard = () => {
  return (
    <div className={styles.container}>
    <Image src="/img/pizza.png" alt="something" width={200} height={200} />
    <h1 className={styles.title}>FIORI DI ZUCCA</h1>
    <span className={styles.price}>$19.99</span>
    <p className={styles.desc}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit 
    </p>

    </div>
  )
}

export default PizzaCard