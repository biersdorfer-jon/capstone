import React from 'react';
import styled from 'styled-components';
import { GoArrowRight } from "react-icons/go";
import './nav.css';
import LogoSVG from '../../images/logo_main2.svg'; // Import your SVG file


const Container = styled.div`

display: flex;
flex-direction: column;
`;

const BottomContainer = styled.div`
    background-color: #fff;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    position: fixed;
    z-index: 11;
`;



const NavContainer = styled.div`
    width: 100%;
    max-width: 100%;
    height: 120px;
    display: flex;
    position: fixed;
    z-index: 10;
    background-color: #0c2340;
    justify-content: space-between;
    align-items: center;
    border-bottom: 2px solid  #b41010;
    top: 40px;

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
    justify-content: end;
    width: 60%;
    padding: 0px 1px 0px;

    @media (max-width: 1450px) {
        width: 40%;
    }

    @media (max-width: 1000px) {
        width: 30%;
    }
`;

const Logo = styled.img`
    width: 140px;
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
    color: #fff;
    padding: 20px 10%;
    cursor: pointer;
    font-size: 22px;
    font-weight: 600;
    text-align: center;
    text-decoration: none;

    &:hover {
        //color: #B41010;
        transform: scale(1.1);
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
const Heading = styled.div`
    font-size: 18px;
    font-weight: 700;
    font-family: ${({ fontFamily }) => fontFamily ? fontFamily : "'FigTree', sans-serif"};

    color: #ba0c2f;
    z-index: 12;
    text-align: center;
    letter-spacing: 6px;
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
                <style>
@import url('https://fonts.googleapis.com/css2?family=Figtree:ital,wght@0,300..900;1,300..900&display=swap');
</style>
                <NavContainer>
                <LogoContainer>
                    <Logo src={LogoSVG} />                </LogoContainer>
                <NavItems>
                    <Tags href='#home'>Home</Tags>
                    <Tags href='#team'>Roster</Tags>
                    <Tags href='#library'>Library</Tags>
                </NavItems>
                <div id="myNav" className="overlay">
                    <a style={{ cursor: 'pointer' }} className="closebtn" onClick={closeNav}>&times;</a>
                    <div className="overlay-content">
                        <a href="" onClick={closeNav}>Home</a>
                        <a href="/team" onClick={closeNav}>Roster</a>
                        <a href="/list" onClick={closeNav}>Library</a>
                    </div>
                </div>
                <span style={{ cursor: 'pointer' }} onClick={openNav}>&#9776;</span>
                <ButtonContainer>
                    <Button href='#contact'>Contact Us <GoArrowRight /></Button>
                </ButtonContainer>
                </NavContainer>
                <BottomContainer>
                <Heading fontFamily="'FigTree', sans-serif">
                    OFFICIAL WEBSITE OF THE ROGERS STATE HONORS PROGRAM
                    </Heading>
                    </BottomContainer>
            </Container>
            
    );
}

export default Nav;
