import React from 'react';
import './App.css';
import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import { About } from './pages/about/about';
import { Home } from './pages/home/home';
import { Contact } from './pages/contact/contact';
import { Mainlayout } from './layout/main-layout';
import { Produc } from './pages/produc/pages/produc';
import { BuyProduc } from './pages/buyProduc/buyProduc';
import { Produc2 } from './pages/produc2/produc2';
import { Info } from './pages/produc/pages/info_list';
import { Products } from './pages/produc/products';
import { Info2 } from './pages/produc2/pages/info2';
import { Products3 } from './pages/produc3/produc3';
import { Info3 } from './pages/produc3/pages/Info3';
import { Info4 } from './pages/home/Info4';

function App() {

  return (
    
       <Routes>
        <Route path='/' element={<Mainlayout/>}>
        <Route index element={<Home/>}/>
        <Route path='about' element={<About/>}/>
        <Route path='products' element={<Products/>}>
          <Route index element={<Produc/>}/>
          <Route path='user/:id' element={<Info/>}/>
        </Route>
        <Route path='products2' element={<Produc2/>}/>
        <Route path='Info2/:id2' element={<Info2/>}/>
        <Route path='products3' element={<Products3/>}/>
        <Route path='Info3/:id3' element={<Info3/>}/>
        <Route path='contact' element={<Contact/>}/>
        <Route path='BuyProduc' element={<BuyProduc/>}/>
        <Route path='Info4/:id4' element={<Info4/>}/>
        <Route path='produc2' element={<Produc2/>}/>
   
        </Route>
        <Route path='*' element={<h1>Pages Not Found</h1>}/>
       </Routes>
 
  );
}

export default App;
