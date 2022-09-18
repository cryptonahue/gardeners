import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>LensTags</title>
        <meta name="description" content="LensTags" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
       

      <img
                      src="/img/logo.png"
                      alt=""
                      width="200"
                      height="auto"
                    ></img>

        
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          
            Gardeners
          
        </a>
      </footer>
    </div>
  )
}

export default Home
