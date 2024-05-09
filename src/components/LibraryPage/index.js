import React from 'react'
import Library from './components/Library'
import styled from 'styled-components';


const StyledLibrary = styled.div`
    margin-top: 220px; /* Adjust the margin-top value as needed */
`;

const TitleContainer = styled.div`
  width: 40%;
  display: flex;
  justify-content: center;
  align-items: start;
  margin: 40px;
`;


const Title = styled.div`
  font-size: 30px;
  font-weight: 800;
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