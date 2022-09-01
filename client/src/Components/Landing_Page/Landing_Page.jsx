import { Navbar } from "../Navbar/Navbar";
import { SectionDos } from "./SectionDos";
import { SectionUno } from "./SectionUno";

export const Landing_Page = () => {
  return (
    <div className="flex flex-col">
      <Navbar />
      <SectionUno />
      <SectionDos />
    </div>
  )
}


