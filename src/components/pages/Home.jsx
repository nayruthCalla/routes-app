import styled from "styled-components"
import { Link } from "react-router-dom";
const HomeContainer = styled.div`
`;
const TitleHome = styled.h1`
  color: pink;
  text-align: center;
`;
const DescriptionHome = styled.p`
  text-align: center;
`;
const NavHome = styled.nav`
  display: grid;
  grid-template-columns: repeat(2,1fr);
  padding: 2rem;
  background: #f373737f;
  justify-content:center;
  a{
    justify-self: center;
  }  
`;

export const Home = () =>(
  <HomeContainer>
    <NavHome>
      <Link to="/about">About</Link>
      <Link to="/Pricing">Pricing</Link>
    </NavHome>
    <TitleHome>Título de Home</TitleHome>
    <DescriptionHome>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit dicta excepturi ut. Eum saepe perferendis ratione aliquam cum, esse accusantium officiis autem ipsam, laborum temporibus fuga necessitatibus sequi. Dolor, soluta.</DescriptionHome>    
  </HomeContainer>
);