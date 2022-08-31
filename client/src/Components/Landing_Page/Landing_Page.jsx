import { Navbar } from "../Navbar/Navbar";
import Soccer_Players from "../../media/Soccer_Players.png";
import Encabezado from "../../media/Encabezado.png";

export const Landing_Page = () => {
  return (
    <>
      <div><Navbar /></div>
      <div className="flex justify-center">
        <img className="absolute w-full min-h-screen min-w-max" src={Soccer_Players}>
        </img>
        <img className="absolute max-h-48 px-8 translate-y-8 z-20" src={Encabezado}>
        </img>
      </div>
    </>
  )
}


