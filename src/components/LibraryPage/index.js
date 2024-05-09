import React from 'react'
import Library from './components/Library'
import styled from 'styled-components';


const StyledLibrary = styled.div`
    padding-top: 220px; /* Adjust the margin-top value as needed */
`;

const TitleContainer = styled.div`
  width: 70%;
  display: flex;
  justify-content: center;
  align-items: start;
  padding-bottom: 10px;


  @media (max-width: 900px) {
    width: 90%;
  }
  @media (max-width: 500px) {
    width: 90%;
  }
`;


const Title = styled.div`
  font-size: 30px;
  font-weight: 800;

  @media (max-width: 700px) {
    font-size: 24px;
    padding-top: 5px;
  }

  @media (max-width: 560px) {
    font-size: 20px;
    padding-top: 8px;
  }

  @media (max-width: 400px) {
    font-size: 17px;
    padding-top: 8px;
  }
`;


const LibraryFinal = () => {
  return (
    <StyledLibrary>
      <TitleContainer>
    <svg height="45" width="15">
        <line x1="0" y1="0" x2="0" y2="55" style={{strokeWidth: 7, stroke: '#ba0c2f'}} />
      </svg>
              <Title>2023-2024 RSU Honors Favorite Books</Title>
              
    </TitleContainer>
      <Library style="" />
    </StyledLibrary>
  )
}

export default LibraryFinal