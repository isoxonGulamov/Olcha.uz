import React from "react";
import { BuyCart } from "./buyCart";
import Gif from "../../img/giphy.gif"
export const BuyProduc = ()=>{
  let mahsulot = JSON.parse(localStorage.getItem("Products"))
  const [buydata,setbuydata] = React.useState(mahsulot)
  const deleteItem = (id)=>{
    let el = buydata.filter((item)=>item.id !== id)
    console.log(el);
    setbuydata((buydata)=> el)
    localStorage.setItem('Products',JSON.stringify(el))
  }

  return(
    <div>
         {!buydata.length ? <img className="gif" src={Gif} alt="sdf" /> 
         :
         buydata?.map((el)=>{
          return <BuyCart  key={el.id} deleteItem={deleteItem} {...el}/>
          
         })
         }
         <div className="Total">
             
         </div>
    </div>
  )
}