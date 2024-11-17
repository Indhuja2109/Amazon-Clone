import React from 'react'
import styled from 'styled-components';
import { useStateValue } from '../../StateProvider';
import { useNavigate } from 'react-router-dom';

function NavBar() {
  const [{basket}] = useStateValue();
  const navigate=useNavigate()
  return (
    <Container>
        
        <Inner>
            <Logo>
              <img src="./amazon-logo1.png" alt=""/>
              
            </Logo>
            
            <SearchBar>

               <input type="text" placeholder='Search......'></input>
               <SearchIcon onClick={()=>navigate("/AddProduct")}>
                   <img src='searchicon.png' alt=''/>
               </SearchIcon>
            </SearchBar>
            <RightContainer>
                   <NavButton>
                      <p>Hello,  
                      <p>Guest</p>
                      </p>
                   </NavButton>
                   <NavButton>
                      <p><a href='http://localhost:3000/LOGIN'>Login</a></p>
                      <p><a href='http://localhost:3000/SIGNUP'>Sign Up</a></p>
                    </NavButton>
                   <NavButton>
                      <p>Return &<p>Orders</p>
                      </p>
                     
                   </NavButton>
                   <BasketButton onClick={()=>navigate("/Checkout")}>
                        <img src='basketimg.png' alt='basket'/>
                        <p>{basket?.length}</p>
                   </BasketButton>
            </RightContainer>
        </Inner>
        <MobileSearchBar>

<input type="text" placeholder='Search......'></input>
<SearchIcon onClick={()=>navigate("/AddProduct")}>
    <img src='searchicon.png' alt=''/>
</SearchIcon>
</MobileSearchBar>
    </Container>
  );
}
const Container = styled.div`
width:100%;
height:60px;
background-color:#131921;
align-items:center;
position:relative;
@media only screen and (max-width:767px){
  height:150px;
  flex-direction:column;
}


`;
const Inner = styled.div`
width:100%;
display:flex;
align-items:center;
@media only screen and (max-width:767px){
  justify-content:space-between;
}
`;
const Logo = styled.div`
  margin-left:20px;
  cursor:pointer;
  img{
    width:100px;
    margin-top:15px;
    margin-bottom:32px;
  }
`;
const SearchBar = styled.div`
height:35px;
flex:1;
margin:0 15px;
margin-bottom:32px;
display:flex;
align-items:center;
input{
 
  width:100%;
  height:100%;
  border:none;
  border-radius:5px 0px 0px 5px;
} 
@media only screen and (max-width:768px){
  display:none;
}
`;
const MobileSearchBar=styled.div`
      height:35px;
      width:90%;
      display:flex;
      align-items:center;
      padding:10px;
      input{
        flex:1;
        width:100%;
        height:100%;
        border:none;
        border-radius:5px 0px 0px 5px;
        &:placeholder{
          padding-left:10px;
        }
      }
@media only screen and (min-width:767px){
  display:none;
}

      `;
const SearchIcon=styled.div`
   background-color:#febd69;
   height:100%;
   width:40px;
   display:flex;
   align-items:center;
   justify-content:center;
   img{
    width:22px;
   }
   border-radius:0px 5px 5px 0px;
   &::placeholder{
    padding-left:5px;
   }
`;
const RightContainer = styled.div`
display:flex;
align-items:center;
width:fit-content;
justify-content:space-between;
height:100%;
padding:5px 15px;
`;

const NavButton=styled.div`
color:#fff;
padding:2px;
height:80px;
display:flex;
flex-direction:column;
justify-content:center;
cursor:pointer;
margin-right:15px;

p{
  &:nth-child(1){
    font-size:19px;
   
  }
  &:nth-child(2){
    font-size:17px;
    font-weight:600;
    margin-bottom:52px;
  }
  line-height:0px;
  &:hover {
    color: yellow;
  }

}
a{
  &:nth-child(1){
    font-size:19px;
   
  }
  &:nth-child(2){
    font-size:17px;
    font-weight:600;
    margin-bottom:52px;
  }
  line-height:0px;
  &:hover {
    color: yellow;
  }

}
`;

const BasketButton=styled.div`
display:flex;
align-items:
height:90%;
cursor:pointer;
img{
  width:30px;
  margin-right:10px;
  margin-bottom:22px;
}
p{
  display:flex;
  flex-diretion:column;
  color:white;
  margin-bottom:25px;
}
`;

export default NavBar;     