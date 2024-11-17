import React from 'react'
import styled from 'styled-components';
import NavBar from './layout/NavBar';
import { useStateValue } from '../StateProvider';
import CurrencyFormat from 'react-currency-format';
import { getBasketTotal } from '../reducer';
import {CardElement,useElements,useStripe} from '@stripe/react-stripe-js';
function Payment() {
  const[{address,basket}]=useStateValue();
  const elements=useElements();
  const stripe=useStripe();
  return (
   <Container>
       <NavBar/>
       <Main>
         <ReviewContainer>
               <h2>Review Your Order</h2>
               <AddressContainer>
          <h5>Shiipping Address </h5>
                <div>
                    <p>{address.fullName}</p>
                    <p>{address.flat}</p>
                    <p>{address.area}</p>
                    <p>{address.landmark}</p>
                    <p>{address.city}</p>
                    <p>{address.state}</p>

                    <p>Phone: {address.phone}</p>
                </div>
               </AddressContainer>
               <PaymentContainer>
                            <h5>Payment Method</h5>
                            <div>
                              <p>Card Details</p>
                            </div>
                            <CardElement/>
               </PaymentContainer>
               <OrderContainer>
                  <h5>Your Order</h5>
                   <div>
                   {basket?.map((product)=>(
                    <Product>
                        <Image>
                            <img src={product.image} alt="img"/>
                        </Image>
                        <Description>
                              <h4>{product.title}</h4>
                              <p>₹{product.price}</p>
                             
                        </Description>
                    </Product>

                    ))}


                   </div>
               </OrderContainer>
         </ReviewContainer>
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
               
                <button>Place Order</button>
            </Subtotal>
         
       </Main>
   </Container>
  );
}
const Container=styled.div`
width:100%;
height:fit-content;
max-width:1400px;
background-color:rgb(234,237,237);

`;
const Main=styled.div`
padding:15px;
display:flex;

@media only screen and (max-width:1200px){
  flex-direction:column:
}
`;
const ReviewContainer=styled.div`
background-color:#fff;
flex:0.7;
padding:15px;
h2{
  font-weight:500;
  border-bottom:1px solid gray;
  padding-bottom:15px;
}
`;

const AddressContainer=styled.div`
margin-top:20px;
div{
  margin-top:10px;
  margin-left:10px;
  p{
    font-size:14px;
    margin-top:4px;
  }
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

const PaymentContainer=styled.div`
margin-top:15px;
div{
  margin-top:15px;
  margin-left:15px;
  p{
    font-size:14px;
  }
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

`;

const OrderContainer=styled.div`
margin-top:15px;


`;

export default Payment;