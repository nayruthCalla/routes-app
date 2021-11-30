import styled from "styled-components"
import { Link } from "react-router-dom"

const PricingContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  a{
    align-self: center;
  }
`;
const TitlePricing = styled.h1`
  color: #2755b8;
  text-align: center;
`;
const DescriptionPricing = styled.p`
  text-align: center;
`;

export const Pricing = () =>(
  <PricingContainer>
    <TitlePricing>Título de Pricing</TitlePricing>
    <DescriptionPricing> 🐱  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit dicta excepturi ut. Eum saepe perferendis ratione aliquam cum, esse accusantium officiis autem ipsam, laborum temporibus fuga necessitatibus sequi. Dolor, soluta.</DescriptionPricing>
    <Link to ="/" >Home</Link>
  </PricingContainer>
);