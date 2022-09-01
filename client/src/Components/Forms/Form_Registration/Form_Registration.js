import React from 'react';

export default function Form_Restration() {

  return (
    <div>
      <div>
      <h5>Datos obligatorios*</h5>
      </div>
      <from>
        <div>
          <p>Nombre de usuario*</p>
          <input type="text" name='name' placeholder='Tu Nombre' />
        </div>
        <div>
          <p>Correo Electronico*</p>
          <input type="text" name='email' placeholder='Tu Email' />
        </div>
        <div>
          <p>Contraseña*</p>
        <input type="password" name='password' placeholder='Tu Contraseña' />
        </div>
        <div>
        <p>Fecha de Nacimiento*</p>
        <input type="date" name="birth" required pattern="\d{4}-\d{2}-\d{2}" />
        </div>
        <div>
        <p>Avatar</p>
        <input type="text" name='avatar' placeholder='url de la img'/>
        </div>
      </from>
    </div>
  )
}
