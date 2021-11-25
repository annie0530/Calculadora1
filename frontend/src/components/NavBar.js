import React from 'react'
import ButtonLogin from './ButtonLogin'
import ButtonSignUp from './ButtonSignUp'

const NavBar = () => {
  return (
    <>
      <nav>
          <ul>
              <li>
                  Home
              </li>
              <li>
                  Registro de liquidaciones
              </li>
              <li>
                  Calculadora empleado
              </li>
          </ul>
          <ButtonLogin/>
          <ButtonSignUp/>
      </nav>
    </>
  )
}

export default NavBar


