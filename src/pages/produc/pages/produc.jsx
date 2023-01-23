import React from "react";

import { mahsulot } from "../data";
import { ProducCart } from "../producCart";
export const Produc = ()=>{
  const [data,setdata] = React.useState([])
  const [qiymat,setqiymat] = React.useState(true)
  React.useEffect(()=>{
      setdata(mahsulot)
      setTimeout(() => {
        setqiymat(false)
      }, 2000);
  },[])
  const setItem = (id)=>{
   for(let i of data){
    if (i.id === id) {
      
      let arr = JSON.parse(localStorage.getItem("Products")) || []
       ///
       if (!arr.find(el => el.id ==  id)) {
         
           arr.push(i)
        
      }else{
        alert("avval qo'shilgan")
      }
      localStorage.setItem("Products",JSON.stringify(arr))
    }
   }
  }

  return(
    <div className="MegicBox">
     {qiymat ? <div className="load"></div>
     :
     
     <ul className="Produc__list">
     {
      data?.map((el)=>{
        return <ProducCart setItem={setItem} key={el.id} {...el}/>
      })
     }
</ul>
     }
    </div>
  )
}