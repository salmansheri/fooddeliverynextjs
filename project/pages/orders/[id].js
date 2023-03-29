import React from 'react'
import styles from '@/styles/Order.module.css'; 
import Image from 'next/image';
import axios from 'axios';

const Order = ({order}) => {
    const status = order.status; 


    const statusClass = (index) => {
        if(index - status < 1) return styles.done
        if(index -status === 1) return styles.inProgress; 
        if(index-status>1) return styles.undone




    }
  return (
    <div className={styles.container}>
        <div className={styles.left}>
            <div className={styles.row}>
            <table className={styles.table}>
            <thead>
            <tr>
            <th>Order ID</th>
                <th>Customer</th>
                <th>Address</th>
              
                <th>Total</th>

            </tr>
              
            </thead>
            <tbody className={styles.tableBody}>
            <tr>
               
                <td>
                    <span className={styles.id}>{order._id}</span>
                </td>
                <td>
                    <span className={styles.name}>
                        {order.customer}
                    </span>
                </td>
                <td>
                    <span className={styles.address}>{order.address}</span>
                </td>
              
                <td>
                    <span className={styles.total}>{order.price}</span>
                </td>
            </tr>

            </tbody>


            </table>
            </div>

            <div className={styles.row}>
                <div className={statusClass(0)}>
                    <Image src="/img/paid.png" width={30} height={30} />
                    <span>Payment</span>
                    <div className={styles.checkedIcon}>
                        <Image className={styles.checkedIcon} src="/img/checked.png" width={20} height={20} alt="" />

                    </div>
                </div>
                <div className={statusClass(1)}>
                    <Image src="/img/bake.png" width={30} height={30} />
                    <span>Preparing...</span>
                    <div className={styles.checkedIcon}>
                        <Image className={styles.checkedIcon} src="/img/checked.png" width={20} height={20} alt="" />

                    </div>
                </div>
                <div className={statusClass(2)}>
                    <Image src="/img/bike.png" width={30} height={30} />
                    <span>On the Way</span>
                    <div className={styles.checkedIcon}>
                        <Image className={styles.checkedIcon} src="/img/checked.png" width={20} height={20}  alt="" />

                    </div>
                </div>
                <div className={statusClass(3)}>
                    <Image src="/img/delivered.png" width={30} height={30} />
                    <span>Payment</span>
                    <div className={styles.checkedIcon}>
                        <Image className={styles.checkedIcon} src="/img/checked.png" width={20} height={20} alt="" />

                    </div>
                </div>
            </div>

        </div>
        <div className={styles.right}>
        <div className={styles.wrapper}>
        <h2 className={styles.title}>CART TOTAL</h2>
        <div className={styles.totalText}>
            <b className={styles.totalTextTitle}>SubTotal</b> sdkfj
        </div>
        <div className={styles.totalText}>
            <b className={styles.totalTextTitle}>Discount</b> afkj
        </div>
        <div className={styles.totalText}>
            <b className={styles.totalTextTitle}>Total: </b>kdfj
        </div>
        <button disabled className={styles.button}>PAID</button>
       

        </div>

        </div>
    </div>
  )
}

export async function getServerSideProps({params}) {
    const response = await axios.get(`http://localhost:3000/api/orders/${params.id}`); 

    const data = response.data; 

    return {
        props: {
            order: data, 
        }
    }

}

export default Order; 

