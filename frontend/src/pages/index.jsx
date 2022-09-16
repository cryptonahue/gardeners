import Head from "next/head";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';

function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <AppBar position="static">
        <Toolbar>
          ATLAGS
        </Toolbar>
      </AppBar>
    </>
  );
}

export default Home;
