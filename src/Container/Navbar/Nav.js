import React from 'react';
import Logo from '../Navbar Components/Logo/Logo';
import Menu from '../Navbar Components/Menu/menu';
import Search from '../Navbar Components/SearchField/Search';
import SocialMedia from '../Navbar Components/Social Media/SocialMedia';
import './nav.css'
class Nav extends React.Component  {
  
  
  render(){

    return(
  <div className="navbar">
          
          <Logo/>
          <Menu/>
          <Search/>
          <SocialMedia/>
          
      </div>
  
    )  ;
  }

}
export default Nav;
