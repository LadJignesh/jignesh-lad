import Head from 'next/head'
import Image from 'next/image'
import Footer from '../comps/Footer'
import Navbar from '../comps/Navbar'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import Introduction from '../comps/indexPage/Introduction'
import Services from '../comps/indexPage/Services'
import Projects from '../comps/indexPage/Projects'
import Interests from '../comps/indexPage/Interests'

export default function Home() {
  return (
    <>
      <Head>
        <title>Jignesh Lad | Home</title>
        <meta name='keywords' content='ninjas'></meta>
      </Head>
      <div>
        <Introduction />
        <Interests />
        <Projects />
        <Services />
      </div>
    </>
  )
}