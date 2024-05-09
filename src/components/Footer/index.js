import React from 'react'
import styled from 'styled-components'
import LogoSVG from '../../images/footer_logo.svg';
import Outer from './Outer';

const Container = styled.div`
  width: 100%;
  display flex;
  // position: relative; /* Add position property */
  // z-index: 10;
`;

const RogersContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #0c2340;
  width: 100%;
  padding: 10px 0px;
`;

const ImageC = styled.div`
  display: flex;
  width: 30%;
  justify-content: center;
  align-items: center
`;

const RogersImage = styled.img`
  width: 10%;
  transition: all ease 0.5s;

  &:hover{
    transform: scale(1.05);
    
  }

  @media (max-width: 700px) {
    width: 100px;
  }
`;

const CopyrightCon = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 18px;
  letter-spacing: 2px;
  font-weight: 700;
  padding: 8px 0px;
  background-color: #ba0c2f;
  color: white

`;

const Bottom = styled.div``;

const Footer = () => {
  return (
    <Container>
    <RogersContainer>
        <RogersImage src={LogoSVG} />  
    </RogersContainer>

    <CopyrightCon>
        2024 © ROGERS STATE UNIVERSITY HONORS
    </CopyrightCon>

    <Outer/>
    </Container>
  )
}

export default Footer