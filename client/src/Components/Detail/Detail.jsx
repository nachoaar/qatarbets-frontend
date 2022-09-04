import React from 'react'
import { Navbar } from "../Navbar/Navbar";
import { Alignment } from '../Utils/Alignment';
import { Sidebar } from "../Utils/Sidebar";
import { TitleContent } from '../Utils/TitleContent';
import { CardDetail } from './CardDetail/CardDetail';

export const Detail = () => {
  return (
    <div className=" bg-gradient-to-b from-morado to-moradosec flex flex-col items-center">
      <Navbar />
      <div className="flex flex-row justify-between py-6 w-5/6 gap-3">
        <div className="w-full">
          <CardDetail />
          <div className="flex flex-row gap-3 mt-3">
            <div className="w-full">
              <TitleContent title="PLANTILLAS" />
              <div className="flex flex-row gap-5">
                <div className="w-2/4">
                  <Alignment />
                </div>
                <div className="w-2/4">
                  <Alignment />
                </div>
              </div>
            </div>
            <div className="w-2/4 h-auto">
              <TitleContent title="SEDE" />
              <div className="h-full bg-gris w-full">

              </div>
            </div>
          </div>
        </div>
        <Sidebar />  
      </div> 
    </div>
  )
}
