import React from "react";
import { Link } from "react-router-dom";
import korzinka from "../../img/korzinka.png"
export const CartHome = ({name,rating,title,id,price,img,setItem})=>{

let v = name.slice(7,25)
 
  return (
    <div className="ProducCart2">
    <img className="producImg" src={img} alt="dsd" />
    <div className="content">
    <h1 className="produc-title"><Link to={`/Info4/${id}`}>{v}</Link></h1>
    <span className="produc__baho">{title}</span>
       <span>{rating}</span>
      <div className="btn__box">
      <h2 className="produc-price">{price}$</h2>
       <button  onClick={()=>setItem(id)} className="btn"><img className="img_btn" src={korzinka} alt="" /></button>
      </div>
    </div>
  </div>
  )
}