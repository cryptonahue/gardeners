import Head from "next/head";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Hero from "../components/Hero_homepage/";
import Hero_Whats from "../components/Hero_whats/";
import Social from "../components/Home_social/";
import Footer from "../components/Footer/";
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
        <Social></Social>
        <Footer></Footer>
        </div>
     
      </div>
    </>
  );
}

export default Home;
