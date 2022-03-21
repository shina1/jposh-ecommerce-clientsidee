import React, { useState } from 'react'
import { NavComponent } from './NavComponent'

const SmallNav = () => {
    let [translate, setTranslate] = useState(true)
  return (
    <>
        <button className='hanburger-btn' onClick={()=> setTranslate(!translate)}>
            {translate ? <span>&#9776;</span> : <span>&times;</span>}
        </button>
        <div id='sidebar-list' className={`${translate ? "addTransition" : "removeTransition"}`}>
            <NavComponent navClass="nav-small"
            linkClassName="nav-small-link"
            onClick = {() => setTranslate(true)}
            />
        </div>
    </>
  )
}

export default SmallNav
