import React from 'react';
import './Menu.css';
const Menu=()=>{
    const menuList=[{
        title:"Home",
        link:'',
    },
    {
        title:"About",
        link:'',
    },
    {
        title:"Products",
        link:'',
    },
    {
        title:"Catalogue",
        link:'',
    },
    ]
    const Menu= menuList.map((items,i)=>{
        return <li key ={i}>{items.title}</li>

    })
    return(
        <div className="nav-list">
          {Menu}        
        </div>
    )  
  }
  export default Menu;