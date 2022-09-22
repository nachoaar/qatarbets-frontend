import React from 'react'
import { Navbar } from '../Navbar/Navbar'
import nosotros from './nosotros';
import lin from "../../media/linkedin.png";
import git from "../../media/github.png";
import { SeparatorHorizontal } from '../Utils/SeparatorHorizontal';

function AboutUs() {
  console.log(nosotros);
  return (
    <div className='flex flex-wrap gap-4'>
      <div className='flex flex-col items-start justify-center'>
        {nosotros.map(el => {
          return (
            <div className='flex items-center justify-between gap-4 w-full' key={el.nombre}>
              <div className='flex items-center justify-center gap-2 '>
                <img className='w-14 h-14 rounded-full mr-1 mt-2 mb-2 ring-2 ring-gris ' src={el.img} alt={el.nombre} />
                <p>{el.nombre}</p>
                <a href={el.linkedin} target="_blank" rel="noreferrer noopener" ><img className='w-6' src={lin} /></a>
                <br />
                <a href={el.github} target="_blank" rel="noreferrer noopener" ><img className='w-6' src={git} /></a>
              </div>
                <div className='flex '>
                  <SeparatorHorizontal />
                </div>
            </div>
          )
        }).slice(0, 4)}
      </div>
      <div className='flex flex-col items-start justify-center '>
        {nosotros.map(el => {
          return (
            <div className='flex items-center justify-between gap-4 w-full' key={el.nombre}>
              <div className='flex items-center justify-center gap-2 '>
                <img className='w-14 h-14 rounded-full mr-1 mt-2 mb-2 ring-2 ring-gris' src={el.img} alt={el.nombre} />
                <p>{el.nombre}</p>
                <a href={el.linkedin} target="_blank" rel="noreferrer noopener" ><img className='w-6' src={lin} /></a>
                <br />
                <a href={el.github} target="_blank" rel="noreferrer noopener" ><img className='w-6' src={git} /></a>
              </div>
                <div className='flex '>
                  <SeparatorHorizontal />
                </div>
            </div>
          )
        }).slice(4, 8)}
      </div>
    </div>
  )
}

export default AboutUs