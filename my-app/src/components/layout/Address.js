import React, { useState } from 'react';
import styled from "styled-components";
import NavBar from "./NavBar.js";
import { useStateValue } from '../../StateProvider.js';
import { useNavigate } from 'react-router-dom';


function Address() {
  const [{},dispatch]=useStateValue();
  const[fullName, setFullName]=useState("");
  const[Phone, setPhone]=useState("");
  const[flat, setFlat]=useState("");
  const[area,setArea]=useState("");
  const[landmark,setLandmark]=useState("");
  const[city,setCity]=useState("");
  const[state,setState]=useState("");
  const navigate=useNavigate();
  const deliver=(e)=>{
    e.preventDefault()
    dispatch({
      type:'SET_ADDRESS',
      item:{
        fullName,
        Phone,
        flat,
        area,
        city,
        state,
      },
    });
    navigate("/Payment");
  };
  return (
    <Container>
        <NavBar />
       
          <Main>
                <FormConatiner>
                    
                   <InputContainer>
           
                      <p>Email</p>
                      <input type="text" placeholder="Enter Name" onChange={(e) => setFullName(e.target.value)} value={fullName}/>
                      </InputContainer>
                      <InputContainer>
           
           <p>PhoneNumber</p>
           <input type="text" onChange={(e) => setPhone(e.target.value)} value={Phone}/>
           </InputContainer>
           <InputContainer>
           
           <p>Flat, House No, Building , Company </p>
           <input type="text" onChange={(e) => setFlat(e.target.value)} value={flat}/>
           </InputContainer>
           <InputContainer>
           
           <p>Area, Colony, Street</p>
           <input type="text" onChange={(e) => setArea(e.target.value)} value={area}/>
           </InputContainer>
           <InputContainer>
           
           <p>Landmark</p>
           <input type="text" onChange={(e) => setLandmark(e.target.value)} value={landmark}/>
           </InputContainer>
           <InputContainer>
           
           <p>Town/City</p>
           <input type="text" onChange={(e) => setCity(e.target.value)} value={city}/>
           </InputContainer>
           <InputContainer>
           
           <p>State</p>
           <input type="text" onChange={(e) => setState(e.target.value)} value={state}/>
           </InputContainer>
           <button onClick={deliver}>Deliver To This Address</button>
                </FormConatiner>
          </Main>
        
    </Container>
   
  );
}
const Container=styled.div`
width:100%;
height:fit-content;
max-width:1400;
margin:auto;
background-color:rgb(234,237,237);
position:relative;

`;
const FormConatiner=styled.form`
border:1px solid lightgray;
width:50%;
min-width:400px;
height:fit-content;
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
margin:auto;
padding:15px;
background-color:#fff;
button{
    display:flex;
    align-self:flex-start;
    font-size:18px;
    padding:10px;

    height:43px;
    width:250px;
    margin-top:20px;
    background-color:#ffa32a;
    outline:none;
    cursor:pointer;
    border-radius:5px;
  }
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
const Main=styled.div``;
export default Address;