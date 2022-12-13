import React, { useState, useEffect, useContext } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Navbar.css';
import {UserContext} from '../App.js'

function Navbar() {
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);


  const RenderMenu = () => {

    const {state, dispatch } = useContext(UserContext);

      if(state)
      {
          return(

            <>
              <li className='nav-item'>
            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
              Home
            </Link>
          </li>
          <li>
            <Link
              to='/Contactus'
              className='nav-links-mobile'
              onClick={closeMobileMenu}
            >
              AboutUs
            </Link>
          </li>
          <li className='nav-item'>
            <Link
              to='/transactions'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Transactions
            </Link>
          </li>
          <li className='nav-item'>
            <Link
              to='/history'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              History
            </Link>
          </li>
          <li>
            <Link
              to='/logout'
              className='nav-links-mobile'
              onClick={closeMobileMenu}
            >
              Logout
            </Link>
          </li>
              </>
          )
      }
      else
      {
          return(
            <>
            <li className='nav-item'>
            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
              Home
            </Link>
          </li>
          <li className='nav-item'>
            <Link
              to='/Contactus'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              AboutUs
            </Link>
          </li>
          <li>
            <Link
              to='/Main1'
              className='nav-links-mobile'
            //   onClick={closeMobileMenu}
            >
              Sign Up
            </Link>
          </li>
          </>
          )
      }
  }
 

  return (
    <>
      <nav className='navbar'>
        <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
          PAYTRACK
          <i class='fab fa-firstdraft' />
        </Link>
        <div className='menu-icon' onClick={handleClick}>
          <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>

        <RenderMenu />

        </ul>
        <Button />
      </nav>
    </>
  );
}

export default Navbar;