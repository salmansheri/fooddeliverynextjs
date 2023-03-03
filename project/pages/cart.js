import React from 'react'; 
import styles from "@/styles/Cart.module.css"; 
import Image from 'next/image';
import {Table, TableCell, TableContainer, TableHead, TableRow, Paper, TableBody, Container, Button} from '@mui/material'; 
  

const cart = () => {
  return (
    <div className={styles.container}>
        <div className={styles.left}>
        <Container sx={{marginTop: "80px", marginBottom: "50px"}}>
        <TableContainer component={Paper}>
            <Table sx={{minWidth: 650}} aria-lable="cart table">
                <TableHead>
                    <TableRow>
                        <TableCell>Product</TableCell>
                        <TableCell>Name</TableCell>
                        <TableCell>Extras</TableCell>
                        <TableCell>Price</TableCell>
                        <TableCell>Quantity</TableCell>
                        <TableCell>Total</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow>
                        <TableCell><Image src="/img/pizza.png" alt="" width={100} height={100}  /></TableCell>
                        <TableCell>Veg Pizza</TableCell>
                        <TableCell>Double ingredients, spicy sauce</TableCell>
                        <TableCell>$19.99</TableCell>
                        <TableCell>2</TableCell>
                        <TableCell>$33333</TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </TableContainer>

        </Container>
        
            {/* <table className={styles.table}>

                <tr className={styles.tr}>
                    <th>Product</th>
                    <th>Name</th>
                    <th>Extras</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Total</th>
                </tr>
            </table> */}
        </div>
        <div className={styles.right}>
            <div className={styles.wrapper}>
                <h2 className={styles.title}>CART TOTAL</h2>
                <div className={styles.totalText}>
                    <b className={styles.totalTextTitle}>Subtotal:</b>$79.60
                </div>
                <div className={styles.totalText}>
                    <b className={styles.totalTextTitle}>Discount: </b>$0.00
                </div>
                <div className={styles.totalText}>
                    <b className={styles.totalTextTitle}>Total: </b>$79.60
                </div>
                <Button variant="contained">CHECKOUT NOW!</Button>
            </div>
        </div>
    </div>
  )
}

export default cart