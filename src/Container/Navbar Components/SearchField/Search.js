import React from 'react';
import './Search.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import {search_click} from '../../../Redux-files/action';
import { connect } from 'react-redux';

const mapStateToProps=state=>{
  console.log(state);
  return{
    widthfull:state.widthfull
  }
}
const mapDispatchToProps=dispatch=>{
  return{
    search_click:()=>dispatch(search_click())
    
  }
}

const Search=(props)=>{
      const width=props.widthfull?"show":"hide";
      return(
          <div className="search">
          <input className ={width}  type="text" placeholder="what you are looking for !!"/>
          <div className="searchicon" onClick={props.search_click}>
           <FontAwesomeIcon icon={faSearch} />
           </div>
         </div>
      ) 
    }

  
  export default connect(mapStateToProps,mapDispatchToProps)(Search);
  