import React from "react";
import { mahsulotlar2 } from "./data2";
import { Cart2 } from "./productCart2";
export const Produc2 = ()=>{
  const [data2,setdata2] = React.useState([])
  const [qiymat,setqiymat] = React.useState(true)
 
  React.useEffect(()=>{
      setdata2(mahsulotlar2)
      setTimeout(() => {
        setqiymat(false)
      }, 2000);
  },[])
  const setItem = (id)=>{
    for(let i of data2){
      if (i.id == id) {
        let arr2 = JSON.parse(localStorage.getItem("Products")) || []
       ///
       if (!arr2.find(el => el.id ===  id)) {
         
           arr2.push(i)
        
      }else{
        alert("avval qo'shilgan")
      }
      localStorage.setItem("Products",JSON.stringify(arr2))

      }
    }
  }
  return(
    <div>
      {qiymat ? <div className="load2"></div>
      :
      <div className="Produc2">
    
      {data2?.map((el)=>{
      return  <Cart2 setItem={setItem} key={el.id} {...el}/>
    })}
      
    </div>
      }
    
    </div>
  )
}