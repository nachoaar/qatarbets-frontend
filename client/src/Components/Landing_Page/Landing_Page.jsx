import { Navbar } from "../Navbar/Navbar";
// import Soccer_Players from "../../media/Soccer_Players.png";
import Encabezado from "../../media/Encabezado.png";
import { Boton } from "../Utils/Boton";

export const Landing_Page = () => {
  return (
    <>
      <Navbar />
      <div className="bg-soccerPlayers h-screen bg-cover flex flex-col items-center justify-center">
        <div className="flex flex-col items-start px-8 gap-3">
          <img className=" max-h-48" src={Encabezado}>
          </img>
          <p className="text-mikeWhite font-semibold max-w-md text-justify">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut soluta ullam itaque unde odit? Exercitationem eos deleniti, cupiditate ratione voluptates quisquam corrupti fugiat quibusdam at eum consectetur rem explicabo sunt!</p>
        <Boton name='Register' />
        </div>
      </div>
    </>
  )
}


