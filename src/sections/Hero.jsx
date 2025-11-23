import HeroText from "../components/HeroText"
import Parallaxbackground from "../components/Parallaxbackground"

const Hero = () => {
  return (
    <section className="flex items-start justify-center md:items-start md:justify-start min-h-screen overflow-hidden c-space">
        <HeroText />
        <Parallaxbackground />
    </section>
  )
}

export default Hero