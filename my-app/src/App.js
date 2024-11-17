import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import styled from "styled-components";
import Login from "./components/layout/Login";
import SignUp from './components/layout/SignUp';
import Home from './components/layout/Home';
import Checkout from './components/layout/Checkout';
import Address from './components/layout/Address';
import Payment from './components/Payment';
import {Elements} from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import AddProduct from './components/layout/AddProduct';
const promise= loadStripe(
  'pk_test_51NtoLYSEzKGgEJ2JbolnTf2uNFQY4nC8jqrJHKwnrgF4th3gd0YbcCVbsGzDoenhOR7IICyvXPU57AdTpcLULztw00EvreoIW5'
)
function App() {
    const [basket]=useState([]);
     console.log("basket>>>>",basket);
  return (
    <Router>
      <Container>
        <Routes>
           <Route path="/" element={<Home/>}  />
           <Route path="/login" element={<Login/>} />
           <Route path="/Checkout" element={<Checkout/>}/>
           <Route path="/signup" element={<SignUp/>} /> 
           <Route path="/Address" element={<Address/>}/>
           <Route path="/Payment" element={<Elements stripe={promise}><Payment/></Elements>}/>
           <Route path="/AddProduct" element={<AddProduct/>}/>
        </Routes>
      </Container>
    </Router>
  );  
 
}
const Container=styled.div``;    
      
export default App;
