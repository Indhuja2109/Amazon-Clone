import React from 'react';
import styled from "styled-components";
import NavBar from './NavBar.js';
import Card from './Card';
function Home( ) {

  return (
    <Container>
      
      <NavBar />
      <Banner>
          <img src='Banner.jpg' alt='bannerimg'/>
          <img src='mobilebanner.jpg' alt='img'/>
      </Banner>
      <Main>
        <Card  id={1} image={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyN_IsKhndYR6wJz4LVGPYk2eKjJv6SlwNJQ&usqp=CAU"}
        price={3999}
        rating={3}
        title={"Product LED Growth Book"}
        />
        <Card   id={2}  image={"https://m.media-amazon.com/images/G/31/kindle/journeys/eFu8CFvlYoIj2FKRtRoGVbg0fIKXUEyL3Ry8GNVsaMyM3D/ZWRhMGNkOWUt._CB404330879_.jpg"}
        price={5000}
        rating={4}
        title={"Echo Dot"}/>
        <Card  id={3}  image={"https://www.urbanplant.in/cdn/shop/files/PrimaryMulti11copy.webp?v=1684745011"}
        price={325}
        rating={3.5}
        title={"Flower Pot"}/>
        <Card  id={4} image={"https://cdn.arstechnica.net/wp-content/uploads/2015/02/MG_4188.jpg"}
        price={52000}
        rating={4}
        title={"Laptop (Dell)"}/>
        <Card  id={5} image={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyN_IsKhndYR6wJz4LVGPYk2eKjJv6SlwNJQ&usqp=CAU"}
        price={25000}
        rating={3}
        title={"Echo Dot"}/>
        <Card  id={6} image={"https://m.media-amazon.com/images/I/81ejz3uOYRL._SX679_.jpg"}
        price={6499}
        rating={4.5}
        title={"Watch"}/>
        <Card  id={7} image={"https://images-na.ssl-images-amazon.com/images/I/612W3tQclSL._AC_UL330_SR330,330_.jpg"}
        price={1300}
        rating={5}
        title={"Earpads"}/>
        <Card  id={8} image={"https://m.media-amazon.com/images/I/419AUIsb2-L._SX300_SY300_.jpg"}
        price={700}
        rating={4.5}
        title={"Wallet"} />
      </Main>
    </Container>
  )
}
const Container = styled.div`
   width:100%;
   background-color:rgb(234,237,237);
   max-width:1400px;
   margin:auto;
   height:fit-content;
`;
const Banner=styled.div`
width:100%;
img{
  width:100%;
  -webkit-mask-image:linear-gradient( to bottom, 
    rgba(0,0,0,2),
    rgba(0,0,0,0.95),
    rgba(0,0,0,0.85),
    rgba(0,0,0,0.75),
    rgba(0,0,0,0.55),
    rgba(0,0,0,0)
    );
  &:nth-child(2){
    display:none;
  }
  @media only screen and (max-width:767px){
    &:nth-child(1){
      display:none;
    }
    &:nth-child(2){
      display:block;
      -webkit-mask-image:none;
    }
  }
}
`;
const Main=styled.div`
display:grid;
justify-content:center;
place-items:center;
width:100%;
grid-auto-rows:420px 420px;
grid-template-columns:repeat(4,280px);
grid-gap:20px;
/*mobile*/
@media only screen and (max-width:767px){
  grid-template-columns:repeat(2,50%);
  grid-gap:0;
}
/*tablets*/
@media only screen and (min-width:767px) and (max-width:1200px){
  grid-template-columns:repeat(3,30%);
}
@media only and (min-width:767px){
  margin-top:-130px;
  padding:10px 0px;
}
`;
export default Home;    