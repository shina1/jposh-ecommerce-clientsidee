import React from 'react'
import './style.css'

const Divider = ({section}) => {
  return (
    <div className='divider'>
      <div className='left-line'></div>
      <p>{section}</p>
      <div className='right-line'></div>
    </div>
  )
}

export default Divider
