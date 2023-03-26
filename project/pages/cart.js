import React from 'react'
import styles from '@/styles/Cart.module.css';
import Image from 'next/image';  

const cart = () => {
  return (
    <div className={styles.container}>
        <div className={styles.left}>
            <table className={styles.table}>
            <thead>
            <tr>
            <th>Product</th>
                <th>Name</th>
                <th>Extras</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
                

            </tr>
              
            </thead>
            <tbody className={styles.tableBody}>
            <tr>
                <td>
                    <div className={styles.imgContainer}>
                        <Image src="/img/pizza.png"  alt="" style={{objectFit: "conver"}} fill />
                    </div>
                </td>
                <td>
                    <span className={styles.name}>Coralzo</span>
                </td>
                <td>
                    <span className={styles.extras}>
                        Double ingredient, spicy sauce
                    </span>
                </td>
                <td>
                    <span className={styles.price}>$10</span>
                </td>
                <td>
                    <span className={styles.quantity}>2</span>
                </td>
                <td>
                    <span className={styles.total}>$39.80</span>
                </td>
            </tr>

            </tbody>


            </table>
        </div>
        <div className={styles.right}>
            <div className={styles.wrapper}>
            <h2 className={styles.title}>CART TOTAL</h2>
                <div className={styles.totalText}>
                <b className={styles.totalTextTitle}>
                    Subtotal: 
                </b> $79.00

                </div>
                <div className={styles.totalText}>
                    <b className={styles.totalTextTitle}>
                        Discount: 
                    </b> $0.00
                </div>
                <div className={styles.totalText}>
                    <b className={styles.totalTextTitle}>Total: </b> $79.00
                </div>
                <button className={styles.button}>CHECKOUT NOW</button>
            </div>
        </div>
    </div>
  )
}

export default cart