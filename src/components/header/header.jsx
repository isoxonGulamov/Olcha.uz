import React from "react";

import { Link } from "react-router-dom";
import korzinka from "../../img/korzinka.png"

import "./header.css"
export const  Header = ()=>{

let los = JSON.parse(localStorage.getItem("Products"))
const [re,setre] = React.useState(los?.length)

  return(
    <div className="container">
       <div className="header__box">
               <ul className="header__list">
                   <li className="header__item bg-danger">
                   <span className="eng">EN🔻</span>
                    <span className="usd">USD🔻</span>
                   </li>
                   <li className="header__item">
                   <h2 className="title2"><Link to={"/"}>Home</Link></h2>
                   </li>
                   <li className="header__item">
                     <h2 className="title2"><Link to={"/about"}>About</Link></h2>
                  
                   </li>
                   <li className="header__item">
                   <h2 className="title2"><Link to={"/contact"}>Contact</Link></h2>
                   </li>
                   <li className="header__item">
                    <div className="ring"><p className="rot">{re}</p></div>
                   <Link to={"/BuyProduc"}> <img className="korzinka" src={korzinka} alt="234" /></Link>
                   </li>

                   <li className="header__item ">
                   <button className="logout">Log Out</button>
                   </li>
               </ul>
           </div>
           <div className="header__bottom">
           <ul className="header__list-bottom">
                  
               </ul>
           </div>
      
      
      
    </div>
  )
}