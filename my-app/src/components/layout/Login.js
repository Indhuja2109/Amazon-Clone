import React from 'react';
import styled from "styled-components";

function Login() {
  return ( 
  <Container>
        <Logo>
           <img src="./amazon-logo.png" alt=""/>
        </Logo>
        <FormContainer>
           <h1>Sign-In</h1>

           <InputContainer>
           
               <p>Email</p>
               <input type="email" placeholder="Enter Email"/>
           </InputContainer>
           <InputContainer>
           
               <p>Password</p>
               <input type="password" placeholder="Enter password"/>
           </InputContainer>
           <LoginButton>
                  Login</LoginButton>
            <InfoText>By continuing, you agree to Amazon's <span>conditions of use </span>and <span>Privacy Notice</span></InfoText>
          
        </FormContainer>
      <SignUpButton>Create Account in Amazon</SignUpButton>
  </Container>
  );
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
     height:400px;
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
 const LoginButton=styled.button`
       width:70%;
       height:35px;
       background-color:#f3b414;
       border:none;
       outline:none;
       border-radius:10px;
       margin-top:30px;
 `;
 const InfoText=styled.p`
    font-size:15px;
    width:100%;
    word-wrap:normal;
    word-break:normal;
    margin-top:10px;
    span{
      color:#426bc0;
    }
 `;
 const SignUpButton=styled.button`
      width:55%;
      height:35px;
      font-size:12px;
      margin-top:20px;
      &:hover{
         background-color:#dfdfdf;
         border:1px solid gray;
      }
 `;
export default Login