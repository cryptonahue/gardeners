import Image from 'next/image'

export default function Hero() {
        return (
          
<div className="HeroContainer">
    <div className="left_hero_container">
        <h1>Taggig content</h1>
        <h2>The Web3 knownledge graph</h2>
    </div>
    <div className="left_hero_container">
        <Image src='/vercel.svg' alt='' width='30' height='30'/>
    </div>
</div>

        )
      }