import React from 'react';
import './Search.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons';


const Search=()=>{

      return(
          <div className="search-bar">
          <input type="text" placeholder="what are you looking for !!"/>
          <FontAwesomeIcon icon={faSearch} />

      </div>
         
      ) 
    }

  
  export default Search;
  