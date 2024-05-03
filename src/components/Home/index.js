import React from 'react';
import Slide from './Slider';
import styled from 'styled-components';
import ImageSlider from './Hero';
import HonorsLogo1 from '../../images/hero.jpg';
import HonorsLogo2 from '../../images/hero.jpg';
import HonorsLogo3 from '../../images/hero.jpg';
import { InstagramEmbed } from 'react-social-media-embed';
import { Flat } from '@alptugidin/react-circular-progress-bar';

const Container = styled.div`
  padding-top: 160px;
  display: flex;
  justify-content: center; /* Center horizontally */
  align-items: center; /* Center vertically */
  flex-direction: column;
  padding-bottom: 200px;
`;

const SlideContainer = styled.div`
  position: relative;
  width: 100%; 
  height: 0px;/* Ensure it takes the full width of the parent */
  margin-bottom: 100px; /* Add margin to push down the Instagram embed */
`;

const WhiteDiv = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  width: 30%; /* Adjust width as needed */
  height: 100%; /* Cover entire SlideContainer */
  background-color: white;
  z-index: 1; /* Ensure the white div is on top of the Slide */
`;

const LeftWhiteDiv = styled(WhiteDiv)`
  left: 0;
`;

const RightWhiteDiv = styled(WhiteDiv)`
  right: 0;
`;

const images = [
  HonorsLogo1,
  HonorsLogo2,
  HonorsLogo3,
  // Add more image imports as needed
];

const HomeFinal = () => {
  return (
    <Container>
      <ImageSlider images={images} />
      <SlideContainer>
        <LeftWhiteDiv />
        <Slide />
        <RightWhiteDiv />
      </SlideContainer>
      <div style={{ display: 'flex', justifyContent: 'center', paddingBottom: '50px', backgroundColor: 'transparent', marginTop: '500px'}}>
        <InstagramEmbed style={{height: "470px", transform: 'scale(.8)'}} url="https://www.instagram.com/p/C2fqkQjvBEn/" width={328} />
        
      </div>
      
    </Container>
  );
};

export default HomeFinal;
