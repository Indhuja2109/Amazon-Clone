import React from 'react';
import { useStateValue } from '../../StateProvider';
import styled from 'styled-components';
import NavBar from './NavBar';
import CurrencyFormat from 'react-currency-format';
import { getBasketTotal } from '../../reducer';
import { useNavigate } from 'react-router-dom';

function Checkout() {
    const [{basket},dispatch]= useStateValue();
    const navigate=useNavigate();
    const removeFromBasket=(e,id)=>{
        e.preventDefault();
        dispatch({
            type:'REMOVE_FROM_BASKET',
            id:id,
        });
    };
    console.log('checkout>>',basket);
       return(
       <Container>       
          <NavBar/>
          <Main>
            <ShoppingCart>
                <h2>ShoppingCart</h2>
                {basket?.map((product)=>(
                    <Product>
                        <Image>
                            <img src={product.image} alt="img"/>
                        </Image>
                        <Description>
                              <h4>{product.title}</h4>
                              <p>₹{product.price}</p>
                              <button onClick={(e)=>removeFromBasket(e,product.id)}>Remove</button>
                        </Description>
                    </Product>

                    ))}
                
            </ShoppingCart>
            <Subtotal>
                <CurrencyFormat 
                  renderText={(value) => (
                  <>
                       <p>
                          Subtotal({basket.length} items ) : <strong>{value}</strong>
                       </p>
                       <small>
                           <input type="checkbox"/>
                           <span> This Order Contains a Gift.</span>
                       </small>
                  </>
                  )}
                  decimalScale={2}
                  value={getBasketTotal(basket)}
                  displayType="text"
                  thousandSeparator={true}
                  prefix={"₹"}
                
                />
               
                <button onClick={()=>navigate("/Address")}>Proceed to Checkout</button>
            </Subtotal>
          </Main>
       </Container>
       );
  
}
const Container=styled.div`
      width:100%;
      max-width:1400px;
      height:fit-content;
      margin:auto;
      background-color:rgb(234,237,237);
     
      position:relative;
`;
const Main=styled.div`
      display:flex;
      padding:15px;
       @media only screen and (max-width:1200px){
        flex-direction:bottom;
       }
`;
const Subtotal=styled.div`
   flex:0.3;
   background-color:white;
   margin-left:15px;
   margin-top:15p;
   height:fit-content;
   display:flex;
   flex-direction:column;
   align-items:center;
   justify content:center;
   p{
    font-size:20px;

   }
   small{
    display:flex;
    align-items:center;
    margin-top:10px;
  
   span{
    margin-left:10px;

   }
   }
   button{
    width:65%;
    height:33px;
    margin-top:20px;
    background-color:#ffd814;
    border:none;
    outline:none;
    border-radius:8px;
   }
   @media only screen and (max-width:1200px){
    flex:none;
    margin-top:200px;
   }
   
  
`;
const ShoppingCart=styled.div`
padding:15px;
background-color:#fff;
flex:0.7;
h2{
    font-weight:500;
    border-bottom:1px solid lightgray;
    padding-bottom:15px;
}
@media screen and (max-width:1200px){
    flex:none;
}
`;
const Product=styled.div`
display:flex;
align-items:center;


`;
const Image=styled.div`
 flex:0.3;
 margin-top:20px;
 width:400px;
 height:400px;
 img{
    width:100%;
    height:80%;
 }
`;
const Description=styled.div`
flex:0.7;
h4{
    font-weight:500;
    font-size:30px;
    margin-left:110px;
}
p{
    font-weight:600;
    font-size:25px;
    margin-top:10px;
    margin-left:110px;
}
button{
    baackground-color:transparent;
    border:none;
    outline:none;
    font-size:23px;
    color:#1384b4;
    margin-top:10px;
    margin-left:110px;
    cursor:pointer;
    &:hover{
        text-decoration:underline;
    }
}
`;

export default Checkout;