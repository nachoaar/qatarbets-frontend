import React from 'react'
import { Navbar } from '../Navbar/Navbar'
import nosotros from './nosotros'

function AboutUs() {
  console.log(nosotros);
  return (
    <div>
      {/* <Navbar /> */}
      <p>Nosotros: </p>
      <div>
        {nosotros.map( el => {
          return(
          <div key={el.nombre}>
            <p>{el.nombre}</p>
            <img src={el.img} alt={el.nombre} />
            <a href={el.linkedin} target="_blank" rel="noreferrer noopener" >Linkedin</a>
            <br />
            <a href={el.github} target="_blank" rel="noreferrer noopener" >Github</a>
          </div>
          )
        } )}
      </div>
    </div>
  )
}

export default AboutUs