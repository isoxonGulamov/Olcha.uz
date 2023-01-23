import React from "react";
export const BuyCart = ({name,price,id,img,deleteItem,})=>{

  const [count,setcount] = React.useState(1)
  const Plus = ()=>{
    setcount((p)=>{
      return p + 1
    })
  }
  const Minus = ()=>{
    setcount((p)=>{
      return p - 1
    })
    if (count <= 1 ) {
      deleteItem(id)
    }
  }
 
  let natija = price*count

  return(
    <div className="BuyCart">
  <img className="producImg" src={img} alt="dsd" />
      <div className="text_content">
      <h3 className="produc-title">{name}</h3>
         <h2 className="produc-price">{price}$</h2>
      </div>
      <div className="PlusMinus">
         <button className="plus" onClick={Plus}>+</button><span>{count}</span><button className="minus" onClick={Minus}>-</button>
         <p className="total">Total:{natija}$</p>
         
         <button onClick={()=>deleteItem(id)} className="delete">Delete</button>
      </div>
    </div>
    
  )
}