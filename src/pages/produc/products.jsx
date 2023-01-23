import React from "react";

import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
export const Products = ()=>{
  

  return(
    <div className="Producs">
       <div className="navbar">
     
        <span className="link">Product--<Link to={"/products"}>Soat</Link></span> <i>Pages</i> <br /> 
        <span className="link">Product--<Link to={"/products2"}>Wifi</Link></span> <i>Pages</i> <br />
        <span className="link">Product--<Link to={"/products3"}>Monitor</Link></span><i>Pages</i>     <br />

         </div>
         
      <Outlet/>
    </div>
  )
}