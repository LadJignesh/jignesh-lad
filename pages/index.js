import Head from 'next/head'
import Image from 'next/image'
import Footer from '../comps/Footer'
import Navbar from '../comps/Navbar'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Head>
        <title>Jignesh Lad | Home</title>
        <meta name='keywords' content='ninjas'></meta>
      </Head>
      <div>
        <h1 className={styles.title}>In development</h1>
      </div>
    </>
  )
}