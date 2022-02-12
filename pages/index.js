import Head from 'next/head'
import Introduction from '../comps/indexPage/Introduction'
import Services from '../comps/indexPage/Services'
import Projects from '../comps/indexPage/Projects'
import Interests from '../comps/indexPage/Interests'

export default function Home() {
  return (
    <>
      <Head>
        <title>Jignesh Lad</title>
        <meta name="title" content="Jignesh Lad Portfolio"></meta>
        <meta name="description" content="Developer portfolio website displaying project and services that developer provide"></meta>
        <meta name="keywords" content="developer, portfolio, services, projects, blockchain, web3, nft, fullStack"></meta>
        <meta name="robots" content="index, nofollow"></meta>
        <meta name="Content-Type" content="text/html; charset=utf-8"></meta>
        <meta name="language" content="English"></meta>
        <meta name="revisit-after" content="60 days"></meta>
        <meta name="author" content="Jignesh Lad"></meta>
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