import { AboutCard } from "./components/aboutCard"
import { Footer } from "./components/footer"
import { Hero } from "./components/hero"
import { Navbar } from "./components/navbar"


export const App = () => {
  return (
    <>
      <Navbar/>
      <Hero/>
      <AboutCard/>
      <Footer/>
    </>
  )
}
