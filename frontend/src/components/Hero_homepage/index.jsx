import Image from 'next/image'

export default function Hero() {
        return (
          
<div className="HeroContainer">
    <div className="left_hero_container">
        <div className="inside_hero_container">
        <h1>Discover content, read all the links</h1>
        <h2>The Web3 knownledge graph</h2>
        <div className="Button_Container">
        <button className="Button_Active">Create</button>
        <a href="#about"> <button className="Button_Desactive">About</button></a>
      </div></div>
    
    </div>
    <div className="Separador">
        <div className="Separador_links">
            <div><a>organized content</a></div>
            <div><p className="Hastag">#</p></div>
            <div><a>collective knowledge</a></div>
            <div><p className="Hastag">#</p></div>
            <div><a>Curated content</a></div>
            <div><p className="Hastag">#</p></div>
            <div><a>incentives program</a></div>
        
     
        </div>
    </div>
</div>


        )
      }