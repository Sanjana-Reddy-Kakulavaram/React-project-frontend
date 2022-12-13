import React, {useContext} from 'react'
//import { UserContext } from '../../App';

import{ 
    Nav,
    NavLink, 
    Bars, 
    NavMenu,
    NavBtn, 
    NavBtnLink 
} from './NavbarElements2';

export const NavBar = () => {

    //const {state, dispatch } = useContext(UserContext);

    // let user = JSON.parse(localStorage.getItem('user-info'))
    // console.warn(user);
  return (
    <div>
        {/* if(localStorage.getItem('user-info')) ? */}
        
        <Nav>
            <NavLink to="/">
                <h1>Home</h1>
            </NavLink>
            <Bars />
            <NavMenu>
                {/* <NavLink to="/Display">
                    Display
                </NavLink> */}
                {/* <NavLink to="/Register">
                    Register
                </NavLink> */}
            </NavMenu>
            <NavBtn>
                <NavBtnLink to="/Main1">Login/Register</NavBtnLink>
            </NavBtn>
        </Nav>
        {/* :<Nav>
        <NavLink to="/">
                <h1>Home</h1>
            </NavLink>
            <Bars />
            <NavMenu>
                <NavLink to="/Display">
                    Display
                </NavLink>
                <NavLink to="/Register">
                    Register
                </NavLink>
            </NavMenu>
            <NavBtn>
                <NavBtnLink to="/Main1">Logout</NavBtnLink>
            </NavBtn>
        </Nav> */}
    </div>
  )
}