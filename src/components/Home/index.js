import React from 'react'
import Slider from 'react-slick'
import Slide from './Slider'
import styled from 'styled-components';

const Container = styled.div`
  padding-top: 140px;
  display: flex;
  justify-content: center; /* Center horizontally */
  align-items: center; /* Center vertically */
  height: 50vh; /* Set height to 100% of viewport height */
`;

const WhiteDiv = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  width: 40%; /* Adjust width as needed */
  background-color: white;
  z-index: 1; /* Ensure the white div is on top of the slider */
`;

const LeftWhiteDiv = styled(WhiteDiv)`
  left: 0;
`;

const RightWhiteDiv = styled(WhiteDiv)`
  right: 0;
`;

const HomeFinal = () => {
  return (
    <Container>
      <LeftWhiteDiv />
      <Slide />
      <RightWhiteDiv />
    </Container>
  )
}

export default HomeFinal;
