import { Navbar } from "../Navbar/Navbar";
import { SectionDos } from "./SectionDos";
import { SectionUno } from "./SectionUno";
import { SectionThree } from "./SectionThree";
import { Footer } from "../Footer/Footer";

export const LandingPage = () => {
  return (
    <div className="flex flex-col">
      <Navbar />
      <SectionUno />
      <SectionDos />
      <SectionThree />
      <Footer />
    </div>
  )
}


