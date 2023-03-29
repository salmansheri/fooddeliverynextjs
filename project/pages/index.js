import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Featured from "@/components/Featured";
import PizzaList from "@/components/PizzaList";
import { useSelector } from "react-redux";
import AddButton from '@/components/AddButton';
import Add from "@/components/Add";
import { useState } from 'react';

import axios from "axios";

const inter = Inter({ subsets: ["latin"] });

export default function Home({ products, admin }) {
  const user = useSelector((state) => state.user);
  const [close, setClose] = useState(true)

  return (
    <div className={styles.mainContainer}>
      <Head>
        <title>Salman Pizza</title>
        <meta
          name="description"
          content="The best pizza order app in industry"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main style={{ padding: "0px 100px" }}>
        <Featured />
        {admin && <AddButton setClose={setClose} /> }

        <PizzaList pizzaList={products}  />
        {!close && <Add setClose={setClose} />}
      </main>
    </div>
  );
}

export const getServerSideProps = async (ctx) => { 
  const myCookie = ctx.req?.cookies || "";

  let admin = false;

  if (myCookie.token === process.env.TOKEN) {
    admin = true;
  }
  const response = await axios.get("http://localhost:3000/api/products");

  return {
    props: {
      products: response.data,
      admin,
    },
  };
};
