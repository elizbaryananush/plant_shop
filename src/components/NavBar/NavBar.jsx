import React from 'react'
import { Link } from 'react-router-dom'

function NavBar() {
  return (
    <Link to='/'>
      <div className='NavBar flex'>
        <div className="logoDiv">
          <a href='/'>plantarium</a>
        </div>
        <div className="menu">
          <ul>
            <li className="listItem">
              <a href="#plants">plants</a>
            </li>
            <li className="listItem">
              <a href="#collections">collections</a>
            </li>
            <li className="listItem">
              <a href="#caretools">caretools</a>
            </li>
          </ul>
        </div>
        <div className="account">
          <svg xmlns="http://www.w3.org/2000/svg" id="Outline" viewBox="0 0 24 24" width="30" height="30"><path d="M12,12A6,6,0,1,0,6,6,6.006,6.006,0,0,0,12,12ZM12,2A4,4,0,1,1,8,6,4,4,0,0,1,12,2Z" /><path d="M12,14a9.01,9.01,0,0,0-9,9,1,1,0,0,0,2,0,7,7,0,0,1,14,0,1,1,0,0,0,2,0A9.01,9.01,0,0,0,12,14Z" /></svg>
          <Link to='/cart/'>
            <svg xmlns="http://www.w3.org/2000/svg" id="Outline" viewBox="0 0 24 24" width="30" height="30"><path d="M22.713,4.077A2.993,2.993,0,0,0,20.41,3H4.242L4.2,2.649A3,3,0,0,0,1.222,0H1A1,1,0,0,0,1,2h.222a1,1,0,0,1,.993.883l1.376,11.7A5,5,0,0,0,8.557,19H19a1,1,0,0,0,0-2H8.557a3,3,0,0,1-2.82-2h11.92a5,5,0,0,0,4.921-4.113l.785-4.354A2.994,2.994,0,0,0,22.713,4.077ZM21.4,6.178l-.786,4.354A3,3,0,0,1,17.657,13H5.419L4.478,5H20.41A1,1,0,0,1,21.4,6.178Z" /><circle cx="7" cy="22" r="2" /><circle cx="17" cy="22" r="2" /></svg>
          </Link>
        </div>
      </div>
    </Link>
  )
}

export default NavBar
