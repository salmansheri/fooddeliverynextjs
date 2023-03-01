import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Featured from './components/Featured'



const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className={styles.mainContainer}>
    
      <Head>
        <title>Salman Pizza</title>
        <meta name="description" content="The best pizza order app in industry" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
   
      <Featured />
      
    </div>
  )
}
