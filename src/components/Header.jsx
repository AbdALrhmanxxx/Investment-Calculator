import React from 'react'
import logo from '../../public/investment-calculator-logo.png'

export default function Header() {
  return (
    <header id="header">
      <img src={logo} alt="InvesmentCalculator" />
      <h1>Invesment Calculator</h1>
    </header>
  );
}
