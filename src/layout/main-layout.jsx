import { Header } from "../components";
import { Footer } from "../components";
import { Outlet } from "react-router-dom";

export const Mainlayout = ()=>{
  return(
    <>
    <header>
      <Header/>
    </header>
    <main>
        <div className="container">
        <Outlet/>
        </div>
    </main>
    <footer className="footer">
      <div className="container">
      <Footer/>
      </div>
    </footer>
    </>
  )
}