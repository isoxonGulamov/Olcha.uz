import React from "react";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Home_data } from "./data_home";
import { Hero } from "../../components/hero/hero";
import Carousel from "../../components/Slick/main-slider";
import { CartHome } from "./HomeCart";
export const Home = ()=>{
  const [data4,setdata4] = React.useState([])
 
 
  React.useEffect(()=>{
      setdata4(Home_data)
      
  },[])
  const setItem = (id)=>{
    for(let i of data4){
      if (i.id === id) {
        let arr4 = JSON.parse(localStorage.getItem("Products")) || []
       ///
       if (!arr4.find(el => el.id ===  id)) {
         
           arr4.push(i)
        
      }else{
        alert("avval qo'shilgan")
      }
      localStorage.setItem("Products",JSON.stringify(arr4))

      }
    }
  }
  return(
    <div className="Home__box">
     
      <Carousel />
      <Hero/>
<div className="hero__produc">
{data4?.map((el)=>{
           return  <CartHome setItem={setItem} {...el}/>
         })}
</div>
    </div>
  )
}






