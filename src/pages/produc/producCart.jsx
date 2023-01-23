import React from "react";
import { Link } from "react-router-dom";
import korzinka from "../../img/korzinka.png";
export const ProducCart = ({name,price,id,img,setItem,title,rating})=>{
  return(
    <div className="ProducCart">
      <img className="producImg" src={img} alt="dsd" />
      <h1 className="produc-title"><Link to={`/products/user/${id}`}>{name}</Link></h1>
      <span className="produc__baho">{title}</span>
         <span>{rating}</span>
        <div className="btn__box">
        <h2 className="produc-price">{price}$</h2>
         <button  onClick={()=>setItem(id)} className="btn"><img className="img_btn" src={korzinka} alt="" /></button>
        </div>
    </div>
  )
}