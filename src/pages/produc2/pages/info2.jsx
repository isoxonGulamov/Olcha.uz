import React from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { mahsulotlar2 } from "../data2";
import { Link } from "react-router-dom";
export const Info2 = ()=>{
  const param = useParams()
  const [info,setinfo] = useState({})
  console.log(param);
 React.useEffect(()=>{
  for(let i of mahsulotlar2 ){
    if (i.id === param.id2) {
         let produc  = i
         setinfo(produc)
    }
  }
 },[])

  return(
    <div className="InfoBox">
         <div className="InfoCart">
  <img className="producImg" src={info.img} alt="dsd" />
      <div className="text_content2">
      <h3 className="produc-title">Name:--{info.name}</h3>
         <h2 className="produc-price">Price:--{info.price}$</h2>
         <p className="info_text">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis unde explicabo aspernatur nihil beatae! Ex magni debitis eveniet, minus assumenda dolor ullam beatae voluptates incidunt culpa officia? Magni, omnis repellendus?
         </p>
      </div>

    </div>
    <div className="Back">
        <span className="link">Product--<Link to={"/products"}>Soat</Link></span> <i>Pages</i> <br /> 
        <span className="link">Product--<Link to={"/products2"}>Wifi</Link></span> <i>Pages</i> <br />
        <span className="link">Product--<Link to={"/products3"}>Monitor</Link></span><i>Pages</i>     <br />
  </div>
    </div>
  )
}