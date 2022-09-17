import { useState, useEffect } from "react";
import { signAuth, signTypedData, post, createTestProfile } from "../../utils/sign.js";
import Head from "next/head";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';

import Link from "next/link";
import Metamask from "../components/metamask.js";

const Index = () => {
  const [haveMetamask, sethaveMetamask] = useState(true);

  const [client, setclient] = useState({
    isConnected: false,
  });

  const checkConnection = async () => {
    const { ethereum } = window;
    if (ethereum) {
      sethaveMetamask(true);
      const accounts = await ethereum.request({ method: "eth_accounts" });
      if (accounts.length > 0) {
        setclient({
          isConnected: true,
          address: accounts[0],
        });
      } else {
        setclient({
          isConnected: false,
        });
      }
    } else {
      sethaveMetamask(false);
    }
  };

  const connectWeb3 = async () => {
    try {
      const { ethereum } = window;

      if (!ethereum) {
        console.log("Metamask not detected");
        return;
      }

      const accounts = await ethereum.request({
        method: "eth_requestAccounts",
      });

      setclient({
        isConnected: true,
        address: accounts[0],
      });
    } catch (error) {
      console.log("Error connecting to metamask", error);
    }
  };

  useEffect(() => {
    checkConnection();
  }, []);

  return (
    <>
      {/* Navbar */}
      <nav className="fren-nav d-flex">
        <div>
          <h3>MENU_</h3>
        </div>
        <div className="d-flex" style={{ marginLeft: "auto" }}>
          <div>
            <button className="btn connect-btn" onClick={connectWeb3}>
              {client.isConnected ? (
                <>
                  {client.address.slice(0, 4)}...
                  {client.address.slice(38, 42)}
                </>
              ) : (
                <>Connect Wallet</>
              )}
            </button>
          </div>
          <div>
            <Link href="https://twitter.com/asaolu_elijah">
              <button className="btn tw-btn">TW</button>
            </Link>
          </div>
        </div>
      </nav>
      {/* Navbar end */}

      <section className="container d-flex">
        <main>
          <h1 className="main-title">Awesome DApp 🚀</h1>

          <p className="main-desc">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem
            suscipit perferendis tempore <br /> eveniet id pariatur error
          </p>

          {/* ---- */}
          <p>
            {!haveMetamask ? (
              <Metamask />
            ) : client.isConnected ? (
              <>
                <br />
                <h2>You're connected ✅</h2>
                <button
                  onClick={signAuth}
                  type="button"
                  className="btn sign-btn"
                >
                  Login
                </button>
                <button
                  onClick={post}
                  type="button"
                  className="btn sign-btn"
                >
                  POST
                </button>
                <button
                  onClick={createTestProfile}
                  type="button"
                  className="btn sign-btn"
                >
                  Create test account
                </button>
              </>
            ) : (
              <>
                <br />
                <button className="btn connect-btn" onClick={connectWeb3}>
                  Connect Wallet
                </button>
              </>
            )}
          </p>
          {/* ---- */}
        </main>
      </section>
    </>
  );
};

// function Home() {
//   return (
//     <>
//       <Head>
//         <title>Home</title>
//       </Head>
//       <AppBar position="static">
//         <Toolbar>
//           ATLAGS
//         </Toolbar>
//       </AppBar>
//     </>
//   );
// }

// export default Home;
export default Index;