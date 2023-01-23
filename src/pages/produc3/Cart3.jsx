import React from "react";
import { Link } from "react-router-dom";
import korzinka from "../../img/korzinka.png"
export const Cart3 = ({name,rating,title,id,price,img,setItem})=>{
  return (
    <div className="ProducCart2">
    <img className="producImg" src={img} alt="dsd" />
    <h3 className="produc-title"><Link to={`/Info3/${id}`}>{name}</Link></h3>
    <span className="produc__baho">{title}</span>
       <span>{rating}</span>
      <div className="btn__box">
      <h2 className="produc-price">{price}$</h2>
       <button  onClick={()=>setItem(id)} className="btn"><img className="img_btn" src={korzinka} alt="" /></button>
      </div>
  </div>
  )
}