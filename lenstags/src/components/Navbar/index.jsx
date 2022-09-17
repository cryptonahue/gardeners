/* import styles from '../../../styles/header/header.module.css' */

export default function NavbarHome() {
        return (
          
     /*      <div classNameName="Header_Container">
            <div classNameName="NavBar_Container">
                <div classNameName="Logo_navbar">
                      Logosdf
                </div>
              <div >
                 Explore
            </div></div>
          </div> */


<header className="header" id="header">
   <section className="wrapper container">
   <img
                      src="/img/logo.png"
                      alt=""
                      width="200"
                      height="auto"
                    ></img>
    {/*   <div className="burger" id="burger"> Buscador   </div> */}
        {/*  <span className="burger-line"></span>
         <span className="burger-line"></span>
         <span className="burger-line"></span> */}
   
      {/* <span className="overlay"></span> */}
      <nav className="navbar" id="navbar">
         <ul className="menu" id="menu">
            <li className="menu-item-home"><a href="#" className="menu-link">Explore</a></li> 
         </ul>
      </nav>
   </section>
</header>


        )
      }