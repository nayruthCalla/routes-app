import styled from "styled-components"
import { Link } from "react-router-dom";

const AboutContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  a{
    align-self: center;
  }
`;
const TitleAbout = styled.h1`
  color: #27b84b;
  text-align: center;
`;
const DescriptionAbout = styled.p`
  text-align: center;
`;

export const About = () =>(
  <AboutContainer>
    <TitleAbout>Título de About</TitleAbout>
    <DescriptionAbout> 🔥 🐉  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit dicta excepturi ut. Eum saepe perferendis ratione aliquam cum, esse accusantium officiis autem ipsam, laborum temporibus fuga necessitatibus sequi. Dolor, soluta.</DescriptionAbout>
    <Link to="/">Home</Link>    
  </AboutContainer>
);