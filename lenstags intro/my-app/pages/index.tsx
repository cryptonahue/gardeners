import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>LensTags</title>
        <meta name="description" content="LensTags" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <img src="/img/logo.png" alt="" width="200" height="auto"></img>
      </main>

      <footer className={styles.footer}>
        <a href="#" rel="noopener noreferrer" className="font-semibold">
          
          Comming Soon
        </a>
      </footer>
    </div>
  );
};

export default Home;
