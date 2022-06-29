import React from 'react'
import Navigation from './Navigation'
import Category from './Category';
import "../styles/sass/_header.scss";

export default function Header() {
  return (
    <header>
      <Navigation/>
      <Category/>
    </header>
  )
}
