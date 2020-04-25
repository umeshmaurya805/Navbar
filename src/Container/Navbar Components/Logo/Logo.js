import React from 'react';
import './Logo.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons';
import {bars_click} from '../../../Redux-files/action';
import { useDispatch } from 'react-redux';
 
const Logo=()=>{
  const dispatch = useDispatch()
    return(
     <div className="logo">
     <div className="head">
      <h1>Vr fashion</h1>
     </div> 
      <div className="bars" id="bars" onClick={()=>dispatch(bars_click())} >
      <FontAwesomeIcon icon={faBars} />
      </div>
  </div>
    )  
  }
  export default (Logo);
