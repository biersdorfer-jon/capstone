import React from 'react'
import Roster from './components/Roster'
import styled from 'styled-components'
import RosterHeader from '../../images/Roster-Header.jpg';
import './roster.css'
import Ford from './components/Ford';
import { CircularProgressBar } from "@tomickigrzegorz/react-circular-progress-bar";


const Container = styled.div`
    width: 100%;
    padding-top: 220px;
`;
const BigImageContainer = styled.div`
    display: flex;
    justify-content: center;
    text-align: center;
    width: 100%;
`;
const ImageContainer = styled.div`
    display: flex;
    justify-content: center;
    text-align: center;
    width: 60%;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
`;

const TitleContainer = styled.div`
  width: 70%;
  display: flex;
  justify-content: center;
  align-items: start;
`;


const Title = styled.div`
  font-size: 30px;
  font-weight: 800;
`;

const ProgressC = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  margin-bottom: 30px;
`;

const CircleC = styled.div`
  display: flex;
  width: 150px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Sub = styled.div`
font-weight: 600;
font-size: 18px;
`;




const RosterFinal = () => {
  return (
    <Container>
      <ProgressC>
        <CircleC>
        <CircularProgressBar
    colorCircle="#e6e6e6"
    colorSlice="#0c2340"
    percent={21}
    round
    strokeBottom={5}
    size= {120}
    fontSize="1.4rem"
    fontWeight= {800} 
     />
<Sub>Business</Sub>
</CircleC>
<CircleC>
        <CircularProgressBar
    colorCircle="#e6e6e6"
    colorSlice="#0c2340"
    percent={75}
    round
    strokeBottom={5}
    size= {120}
    fontSize="1.4rem"
    fontWeight= {800} 
     />
<Sub>Business</Sub>
</CircleC>
      </ProgressC>
      
    <TitleContainer>
    <svg height="45" width="15">
        <line x1="0" y1="0" x2="0" y2="55" style={{strokeWidth: 7, stroke: '#ba0c2f'}} />
      </svg>
              <Title>2023-2024 RSU Honors Roster</Title>
              
    </TitleContainer>
        <Roster/>
        <br></br>
        <br></br>
        <div class="shape-bottom">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" class="shape-fill"></path>
        <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" class="shape-fill"></path>
        <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" class="shape-fill"></path>
    </svg>
      </div>
      <Ford/> 
    </Container>
  )
}

export default RosterFinal