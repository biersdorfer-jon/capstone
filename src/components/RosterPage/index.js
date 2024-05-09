import React, { useState, useEffect } from 'react';
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

  @media (max-width: 500px) {
    width: 90%
  }
`;


const Title = styled.div`
  font-size: 30px;
  font-weight: 800;

  @media (max-width: 700px) {
    font-size:24px;
    padding-top: 5px;
  }

  @media (max-width: 560px) {
    font-size:20px;
    padding-top: 8px;
  }
`;

const ProgressC = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin-bottom: 30px;
`;

const MCon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 40px;
`;

const CircleC = styled.div`
  display: flex;
  width: 150px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 10px;
`;

const Sub = styled.div`
font-weight: 600;
font-size: 18px;
`;

const Center = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;


const RosterFinal = () => {

  const [iframeWidth, setIframeWidth] = useState(640);

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      const newIframeWidth = screenWidth <= 700 ? 320 : 640;
      setIframeWidth(newIframeWidth);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup the event listener when component unmounts
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);


  return (
    <Container>
      <TitleContainer style={{padding: '20px 0px'}}>
    <svg height="45" width="15">
        <line x1="0" y1="0" x2="0" y2="55" style={{strokeWidth: 7, stroke: '#ba0c2f'}} />
      </svg>
              <Title>RSU Honors Popular Degrees</Title>
              
    </TitleContainer>
      <ProgressC>
        <CircleC>
        <CircularProgressBar
    colorCircle="#e6e6e6"
    colorSlice="#0c2340"
    percent={19}
    round
    strokeBottom={5}
    size= {120}
    fontSize="1.4rem"
    fontWeight= {800} 
     />
<Sub>Biology</Sub>
</CircleC>
<CircleC>
        <CircularProgressBar
    colorCircle="#e6e6e6"
    colorSlice="#0c2340"
    percent={13}
    round
    strokeBottom={5}
    size= {120}
    fontSize="1.4rem"
    fontWeight= {800} 
     />
<Sub>Allied Health</Sub>
</CircleC>
<CircleC>
        <CircularProgressBar
    colorCircle="#e6e6e6"
    colorSlice="#0c2340"
    percent={13}
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
    percent={13}
    round
    strokeBottom={5}
    size= {120}
    fontSize="1.4rem"
    fontWeight= {800} 
     />
<Sub>History</Sub>
</CircleC>
<CircleC>
        <CircularProgressBar
    colorCircle="#e6e6e6"
    colorSlice="#0c2340"
    percent={11}
    round
    strokeBottom={5}
    size= {120}
    fontSize="1.4rem"
    fontWeight= {800} 
     />
<Sub>Psychology</Sub>
</CircleC>
<CircleC>
        <CircularProgressBar
    colorCircle="#e6e6e6"
    colorSlice="#0c2340"
    percent={11}
    round
    strokeBottom={5}
    size= {120}
    fontSize="1.4rem"
    fontWeight= {800} 
     />
<Sub>IT</Sub>
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
        <Center>
        <svg height="45" width="320">
        <line x1="0" y1="0" x2="320" y2="" style={{strokeWidth: 7, stroke: '#ba0c2f'}} />
      </svg>
      <br></br>
        <br></br>
      <Ford/> 
      </Center>
      <TitleContainer style={{padding: '20px 0px'}}>
    <svg height="45" width="15">
        <line x1="0" y1="0" x2="0" y2="55" style={{strokeWidth: 7, stroke: '#ba0c2f'}} />
      </svg>
              <Title>The Honors Hometown Map</Title>
              
    </TitleContainer>
    <MCon>
        <iframe src="https://www.google.com/maps/d/u/1/embed?mid=1wugupOoZvIt4OOdQO96MEG9-B3Xc5a0&ehbc=2E312F&noprof=1" width={iframeWidth} height="300"></iframe>
      </MCon>
    </Container>
  )
}

export default RosterFinal