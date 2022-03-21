import React, { useState } from 'react'
import {NavComponent} from './NavComponent'

const Navbar = ({navClass, linkClassName}) => {
  return (
    <>
      <NavComponent navClass={navClass} linkClassName={linkClassName}/>
    </>
  )
}

export default Navbar
