import React from 'react';
import './Menu.css';
import { useSelector } from 'react-redux';

const Menu=()=>{
const showList = useSelector(state=>state.show)
    const show=showList?"show":"nav-list";
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
        <div className={show} >
          {Menu}        
        </div>
    )  
  }
  export default (Menu);
