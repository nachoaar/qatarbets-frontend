import React from "react";
import { Navbar } from "../Navbar/Navbar";


export const Home = () => {
  return (
    <div className="h-screen bg-gradient-to-b from-rose-600 to-violet-600 flex flex-col items-center">
      <Navbar />
      <div className="flex flex-row justify-between items-center py-6 w-5/6 h-screen">
        <div className="h-full w-1/5 bg-yellow-300">
            <h1>soy el sidebar</h1>
        </div>
        <div className="h-full w-4/5 bg-yellow-500">
            <h1>soy el contenedor</h1>
        </div>
        

      </div>
    </div>
  );
};
