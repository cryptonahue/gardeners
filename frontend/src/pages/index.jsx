import Head from "next/head";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Hero from "../components/Hero_homepage/";
import Hero_Whats from "../components/Hero_whats/";
import NavbarHome from "../components/Navbar";

function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <NavbarHome></NavbarHome>
   {/*    <AppBar position="static">
        <Toolbar>
          ATLAGS
        </Toolbar>
      </AppBar> */}
      <div className="Container">
        <div className="Background_Hero">
        <Hero></Hero>
        <Hero_Whats></Hero_Whats>
        </div>
     
      </div>
    </>
  );
}

export default Home;
