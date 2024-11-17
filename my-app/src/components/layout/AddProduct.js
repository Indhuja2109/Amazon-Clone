import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
function AddProduct() {
   const [title,setTitle]=useState("");
   const [ImageURL,setImageURL]=useState("");
   const [Price,setPrice]=useState(0);
   const [rating,setRating]=useState(0);
   const AddProduct=(e)=>{
      e.preventDefault();
      axios.post('http://localhost:8000/products/add',{title,ImageURL,Price,rating}).then(()=>{
         setTitle("");
         setImageURL("");
         setPrice(0);
         setRating(0);
      }).catch((error)=>alert(error.message));
   };
  return (
    <Container>
    <Logo>
       <img src="./amazon-logo.png" alt=""/>
    </Logo>
    <FormContainer>
       <h1>Sign-In</h1>

       <InputContainer>
       
           <p>Title</p>
           <input type="text" onChange={(e)=>setTitle(e.target.value)} value={title}/>
       </InputContainer>
       <InputContainer>
       
           <p>ImageURL</p>
           <input type="text"  onChange={(e)=>setImageURL(e.target.value)} value={ImageURL}/>
       </InputContainer>
       <InputContainer>
       
           <p>Price</p>
           <input type="number"  onChange={(e)=>setPrice(e.target.value)} value={Price}/>
       </InputContainer>
       <InputContainer>
       
       <p>Rating</p>
       <input type="number"  onChange={(e)=>setRating(e.target.value)} value={rating}/>
   </InputContainer>
       <Button onClick={AddProduct}>
              Add Product</Button>
       
      
    </FormContainer></Container>
  )
}
const Container=styled.div`
 width: 100%;
 min-width: 450px;
 height: fix-content;
 padding: 15px;
 margin: auto;
 display:flex;
 flex-direction:column;
 align-items: center;
 `;
 const Logo=styled.div`
      width:120px;
      img{
         width:100%;
      } 

 `;
 const FormContainer=styled.form`
    
     width:55%;
     margin-top:45px;
     height:fit-content;
     display:flex;
     flex-direction:column;
     align-items:center;
     h1{
      font-size:20px;
      font-weight:400;
      line-height:33px;
      align-self:flex-start;
     }
     border:1px solid black;
     padding:10px;
 `;
 const InputContainer=styled.div`
        width:100%;
        padding:4px;
      p{
         font-size:24px;
         font-weight:600;
      }
      input{
         width:95%;
         height:33px;
         padding-left:5px;
         border-radius:5px;
         border:1px solid lightgray;
         background-color:lightgray;

         &:hover{
            border:1px solid orange;
         
         }
      }
   
      
 `;
 const Button=styled.button`
       width:70%;
       height:35px;
       background-color:#f3b414;
       border:none;
       outline:none;
       border-radius:10px;
       margin-top:30px;
 `;
 
export default AddProduct;