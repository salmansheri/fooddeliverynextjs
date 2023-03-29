import React, { useState } from "react";
import styles from "@/styles/admin.module.css";
import Image from "next/image";
import axios from "axios";
import Link from 'next/link';

const Index = ({ products, orders }) => {
  console.log(products);

  const [pizzaList, setPizzaList] = useState(products);
  const [orderList, setOrderList] = useState(orders);

  const handleDelete = async (id) => {
    try {
      alert("Do you want to Delete the product");
      const deleteProduct = await axios.delete(
        `http://localhost:3000/api/products/${id}`
      );
      setPizzaList(pizzaList.filter((pizza) => pizza._id !== id));
    } catch (err) {
      console.log(err);
    }
  };

  const handleStatus = async (id) => {
    const item = orderList.filter(order => order._id === id)[0]; 

    const currentStatus = item.status
    const response = axios.put(`http://localhost:3000/api/orders/${id}`, {
      status: currentStatus + 1, 
    }); 

    setOrderList([
      response.data, 
      ...orderList.filter(order => order._id !== id), 

      
    ])

  }
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <h1 className={styles.title}>Products</h1>
        
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Image</th>
              <th>Id</th>
              <th>Title</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {pizzaList.map((product, index) => (
              <tr key={product._id} index={index}>
                <td>
                  <Image
                    src={product.img}
                    width={50}
                    height={50}
                    style={{ objectFit: "cover" }}
                    alt=""
                  />
                </td>
                <td>{product._id}</td>
                <td>{product.title}</td>
                <td>${product.prices[0]}</td>
                <td>
                  <button className={styles.button}>Edit</button>
                  <button
                    className={styles.button}
                    onClick={() => handleDelete(product._id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export const getServerSideProps = async (ctx) => {
  const myCookie = ctx.req?.cookies || ""; 
  if(myCookie.token !== process.env.TOKEN) {
    return {
      redirect: {
        destination: "/admin/login", 
        permanent: false,
      }
    }
  }
  const productsResponse = await axios.get(
    "http://localhost:3000/api/products"
  );

  const ordersResponse = await axios.get("http://localhost:3000/api/orders");

  const productsData = productsResponse.data;
  const ordersData = ordersResponse.data;

  return {
    props: {
      products: productsData,
      orders: ordersData,
    },
  };
};

export default Index;
