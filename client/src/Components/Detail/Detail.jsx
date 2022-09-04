import React from 'react'
import { Footer } from '../Footer/Footer';
import { Navbar } from "../Navbar/Navbar";
import { Alignment } from '../Utils/Alignment';
import { Sidebar } from "../Utils/Sidebar";
import { TitleContent } from '../Utils/TitleContent';
import { CardDetail } from './CardDetail/CardDetail';

export const Detail = () => {
  return (
    <div className=" bg-gradient-to-b from-morado to-moradosec flex flex-col items-center">
      <Navbar />
      <div className="flex flex-row justify-center py-6 w-4/5 gap-10 mb-20 mt-20 h-auto">
        <div className="w-3/5">
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
      <Footer />
    </div>
  )
}
