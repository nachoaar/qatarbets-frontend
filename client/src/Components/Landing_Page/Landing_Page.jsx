import { Navbar } from "../Navbar/Navbar";
import Soccer_Players from "../../media/Soccer_Players.png";
import Encabezado from "../../media/Encabezado.png";

export const Landing_Page = () => {
  return (
    <>
      <div><Navbar /></div>
      <div>
        <img className="absolute " src={Soccer_Players}>
        </img>
        <img className="absolute w-3/4 translate-y-8 z-20" src={Encabezado}>
        </img>
      </div>
    </>
  )
}


