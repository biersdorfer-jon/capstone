import React from 'react'
import Library from './components/Library'
import styled from 'styled-components';


const StyledLibrary = styled.div`
    margin-top: 200px; /* Adjust the margin-top value as needed */
`;

const LibraryFinal = () => {
  return (
    <StyledLibrary>
      <Library style="" />
    </StyledLibrary>
  )
}

export default LibraryFinal