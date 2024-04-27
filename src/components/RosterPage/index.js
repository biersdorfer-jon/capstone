import React from 'react'
import Roster from './components/Roster'
import styled from 'styled-components'
import RosterHeader from '../../images/Roster-Header.jpg';


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




const RosterFinal = () => {
  return (
    <Container>
      {/* <BigImageContainer>
        <ImageContainer>
            <Image src={RosterHeader}/>
        </ImageContainer>
      </BigImageContainer> */}
    <TitleContainer>
    <svg height="45" width="15">
        <line x1="0" y1="0" x2="0" y2="55" style={{strokeWidth: 7, stroke: '#ba0c2f'}} />
      </svg>
              <Title>2023-2024 RSU Honors Roster</Title>
    </TitleContainer>
        <Roster/>
    </Container>
  )
}

export default RosterFinal