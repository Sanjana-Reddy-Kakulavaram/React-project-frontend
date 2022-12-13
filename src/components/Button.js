import React, {useEffect, useContext} from 'react';
import './Button.css';
import { Link } from 'react-router-dom';
import { UserContext } from '../App';

export function Button() {

    const {state, dispatch } = useContext(UserContext);
      if(state)
      {
        return(
            <>
          <Link to='logout'>
          <button className='btn'>Logout</button>
          </Link>
          </>)
      }
      else{
        return(
            <>
            <Link to='Main1'>
            <button className='btn'>Sign Up</button>
            </Link>
            </>)
          
      }
}