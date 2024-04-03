import React from 'react';
import styled from 'styled-components';
import { GoArrowRight } from "react-icons/go";
import './nav.css';


const Container =  styled.div`
    width: 100%;
    max-width: 100%
    height: 100px;
    display: flex;
     // position: fixed;
    z-index: 10;
    background-color: #ffffff;
    justify-content: space-between;
    align-items: center;
    border-bottom: 2px solid  #b41010;

    @media (max-width: 1450px) {
        padding: 0 60px;
    }

    @media (max-width: 1000px) {
        padding: 0 30px;
    }

`;
const LogoContainer = styled.div`
display: flex;
align-items: center;
justify-content: start;
width: 40%;
height: 100%;
padding: 0px 1px 0px;

@media (max-width: 1450px) {
    width: 40%;
}

@media (max-width: 1000px) {
    width: 30%;
}


`;

const Logo = styled.img`
width: 100px;
display: flex;
cursor: pointer;
text-decoration: none;
align-items: center;



`;

const NavItems = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 6px 10%;

    @media (max-width: 1450px) {
        padding: 6px 40px;
    }

    @media (max-width: 1000px) {
        padding: 6px 40px;
    }

    @media (max-width: 800px) {
        padding: 6px 20px;
    }

    @media (max-width: 768px) {
        display: none;
    }

`;

const Tags = styled.a`
    color: #000;
    padding: 10%;
    cursor: pointer;
    font-size: 18px;
    text-align: center;
    text-decoration: none;

    &:hover {
        color: #B41010;
        transform: scale(1.05);
    }

    @media (max-width: 1000px) {
        font-size: 16px;
    }

`;

const ButtonContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 60%;
    height: 100%;

    @media (max-width: 1450px) {
        width: 40%;
    }

    @media (max-width: 1000px) {
        width: 30%;
    }

    @media (max-width: 768px) {
        display: none;
    }

`;

const Button = styled.a`
    padding: 5px 25px;
    width: 150px;
    height: 50px;
    background-color: #B41010;
    color: white;
    text-decoration: none;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-radius: 6px 6px;
    font-size: 15px;

    &:hover {
        background-color: transparent;
        border: 1px solid #B41010;
        color: #B41010;    
    }

`;





const Nav = () => {

    function openNav() {
        document.getElementById("myNav").style.width = "100%";
        document.getElementById("myNav").style.opacity = "1";
      }
      
      function closeNav() {
        document.getElementById("myNav").style.width = "0%";
        document.getElementById("myNav").style.opacity = "0";
      }


  return (
    <Container>
    <LogoContainer>
        <Logo src={require('../../images/HonorsLogo.png')}/>
    </LogoContainer>
        <NavItems>
            <Tags href='#home'>Home</Tags>
            <Tags href='#team'>Roster</Tags>
            <Tags href='#library'>Library</Tags>
        </NavItems>
            <div id="myNav" class="overlay">
                <a style={{cursor: 'pointer',}} class="closebtn" onClick={closeNav}>&times;</a>
                <div class="overlay-content">
                    <a href="#home" onClick={closeNav}>Home</a>
                    <a href="#team" onClick={closeNav}>Roster</a>
                    <a href="#list" onClick={closeNav}>Library</a>
                    {/* <a href="#contact" class="contact" onClick={closeNav}>Contact Us</a> */}

                </div>
            </div>
            <span style={{cursor: 'pointer',}} onClick={openNav}>&#9776;</span>
        <ButtonContainer>
            <Button href='#contact'>Contact Us <GoArrowRight/></Button>
        </ButtonContainer>
    </Container>
  )
}

export default Nav