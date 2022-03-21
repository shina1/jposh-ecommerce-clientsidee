import React from 'react'
import Link from 'react-scroll/modules/components/Link'

export const NavComponent = ({onClick, navClass, linkClassName}) => {
  return (
    <nav className={navClass}>
      {
          ['Projects', 'About', 'Contact', 'Footer'].map((section, i )=> <Link to={section} smooth={true} className={linkClassName} onClick={onClick} key={i}>{section}</Link>)
      }
    </nav>
  )
}


