import React from "react";
import { Cart3 } from "./Cart3";
import { mahsulotlar3 } from "./data3";
export const Products3 = ()=>{
  const [data3,setdata3] = React.useState([])
  const [qymat,setqiymat] = React.useState(true)
  React.useEffect(()=>{
  setdata3(mahsulotlar3)
 setTimeout(() => {
  setqiymat(false)
 }, 2000);
  },[])
  const setItem = (id)=>{
    for(let i of data3){
      if (i.id === id) {
        let arr3 = JSON.parse(localStorage.getItem("Products")) || []
       ///
       if (!arr3.find(el => el.id ===  id)) {
         
           arr3.push(i)
        
      }else{
        alert("avval qo'shilgan")
      }
      localStorage.setItem("Products",JSON.stringify(arr3))

      }
    }
  }
  return(
    <div>
      {qymat ? <div className="load2"></div>
      :
      <div className="Produc3">
    
      {data3?.map((el)=>{
      return  <Cart3 setItem={setItem} key={el.id} {...el}/>
    })}
      
    </div>
      }
    
    </div>
  )
}