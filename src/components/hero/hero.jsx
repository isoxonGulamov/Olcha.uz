import React from "react";
import { Link } from "react-router-dom";
import "./hero.css"
export const Hero = ()=>{
  return(
  
       <ul className="hero__list">
             <li className="hero__item">
             <Link to={"/products"}><img className="hero__img" loading="lazy" src="https://olcha.uz/image/400x140/homePage/rXrheMvozBtCvtanOMq07brcJpL5e8B0oEeygQwbZgAZ36hJkUuRkgKOj6ce.png" alt="" data-v-d04850aa=""/></Link>
             </li>
             <li className="hero__item">
             <Link to={"/produc2"}><img className="hero__img" loading="lazy" src="https://olcha.uz/image/400x140/homePage/vkvEiBRbJLMzRJc0yAbnbagm4TwNTmv1gVJfB9Rvqhq26txUkCVWnZLJbKWl.png" alt="" data-v-d04850aa=""/></Link>
             </li>
             <li className="hero__item">
             <Link to={"/products3"}>
             <img className="hero__img" loading="lazy" src="https://olcha.uz/image/400x140/homePage/vb3gbz8v3ytPH3xMJycfzpEBXClOTN6gCDmMSnsDRo7tm1AccQ0ojnrQXqnL.png" alt="" data-v-d04850aa=""/>
             </Link>
             
             </li>
      </ul>
   
  )
}