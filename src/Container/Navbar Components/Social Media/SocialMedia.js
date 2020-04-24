import React from 'react';
import './SocialMedia.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook ,faInstagram,faYoutube} from '@fortawesome/free-brands-svg-icons'
 

const SocialMedia=()=>{
    return(
        <div className="contact">
         <li className="facebook">
         <FontAwesomeIcon icon={faFacebook} />
         </li>
         <li className="instagram">
         <FontAwesomeIcon icon={faInstagram}/>
         </li>
         <li className="youtube">
         <FontAwesomeIcon icon={faYoutube} />
         </li>
   
       
    </div>
    )  
  }
  export default SocialMedia;