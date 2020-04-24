import React,{Component} from 'react';
import './Search.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons';

class Search extends Component{
  constructor(){
    super();
    this.state={
     widthfull:false,
    }
  }
  
   showTextField=(event)=>{
     this.setState({widthfull:!this.state.widthfull});
  }
    render(){
      const width=this.state.widthfull?"show":"hide";
      return(
          <div className="search">
          <input className ={width}  type="text" placeholder="what you are looking for !!"/>
          <div className="searchicon" onClick={this.showTextField}>
           <FontAwesomeIcon icon={faSearch} />
           </div>
         </div>
      ) 
    }
  }
  export default Search;