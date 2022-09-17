import Head from "next/head";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Hero from "../components/Hero_homepage/";
import NavbarHome from "../components/Navbar";

function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <NavbarHome></NavbarHome>
      <AppBar position="static">
        <Toolbar>
          ATLAGS
        </Toolbar>
      </AppBar>
      <Hero></Hero>
    </>
  );
}

export default Home;
