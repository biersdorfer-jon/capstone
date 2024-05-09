import React from 'react'
import styled from 'styled-components';


const Container = styled.div`
width: 100%;
display: flex;
background: #f2f2f2;
align-items: center;
color: white;
justify-content: center;
flex-direction: column;
padding-top: 30px;
padding-bottom: 20px;


@media (max-width: 700px) {
  margin-top: 0px;
}

`;

const TopLogoContainer = styled.div`
display: flex;
align-items: center;
justify-content: center;
width: 60%;
padding: 0 6px;
margin-bottom: 15px;

@media (max-width: 1450px) {
    width: 40%;
}

@media (max-width: 1000px) {
    width: 30%;
}


`;

const BottomLogoContainer = styled.div`
display: flex;
align-items: center;
justify-content: center;
width: 60%;
padding: 15px 6px;
margin-bottom: 15px;

@media (max-width: 1450px) {
    width: 40%;
}

@media (max-width: 1000px) {
    width: 30%;
}


`;

const Logo = styled.img`
width: 220px;
display: flex;
cursor: pointer;
text-decoration: none;
align-items: center;
`;

const BotLogo = styled.img`
width: 160px;
display: flex;
cursor: pointer;
text-decoration: none;
align-items: center;
`;

const FooterContent = styled.div`
  display: flex;
  align-items: start;
  justify-content: center;
  flex-direction: row;
  flex-wrap: wrap;
  width: 90%;

`;

const Panel = styled.div`
padding-left: 5%;
  display: flex;
  flex-direction: column;
  align-items: start;
  width: 250px;
  margin-bottom: 15px;

  

  @media (max-width: 1110px) {
    width: 270px;
    padding-top: 10px;
    align-items: center;
    padding-left: 0px;
  }


//   @media (max-width: 780px) {
//     width: 300px;
//     padding-left: 75px;
//   }

  
  @media (max-width: 670px) {
      align-items: center;
      padding-left: 0px;
  }
`;

const Header = styled.div`
  color: black;
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 5px;
  margin-top: 6px;
`;

const Tag = styled.a`
  color: black;
  font-size: 16px;
  font-weight: 400;
  margin-bottom: 3px;
  text-decoration: none;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;
const Para = styled.div`
    color: black;
    font-size: 16px;
    font-weight: 400;
    margin-bottom: 3px;
    
`;

const Copyright = styled.div`
  color: black;
  font-size: 12px;
  font-weight: 400;
  text-align: center;
  width: 85%;
  margin-bottom: 2px;
`;

const Address = styled.div`
  color: black;
  font-size: 14px;
  font-weight: 400;
  text-align: center;
  width: 85%;
  margin-bottom: 6px;

`;

const ButtonContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    z-index: 2;
    padding: 20px 0px 20px;

    @media (max-width: 768px) {
      justify-content: center;
    }
`;

const Button = styled.a`
    padding: 5px 25px;
    width: 220px;
    height: 60px;
    background-color: #B41010;
    color: white;
    text-decoration: none;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 6px 6px;
    font-size: 18px;

    &:hover {
        background-color: #f0f0f0;
        border: 1px solid #B41010;
        color: #B41010;    
    }

`;




const Outer = () => {
  return (
    <Container>
      {/* <TopLogoContainer>
        <Logo src={require('../../images/logoBlack.png')} />
      </TopLogoContainer> */}

      <FooterContent>
        <Panel>
          <Header>EXPLORE</Header>
          <Tag href='https://www.rsu.edu/academics/degrees-majors/' target='_blank'>Degrees & Majors</Tag>
          <Tag href='https://www.rsu.edu/academics/graduate-programs/' target='_blank'>Graduate Programs</Tag>
          <Tag href='https://www.rsu.edu/academics/academic-enrichment-programs/studies-at-large/' target='_blank'>Studies-at-Large</Tag>
          <Tag href='https://www.rsu.edu/about/meeting-event-services/' target='_blank'>Meeting & Event Services</Tag>
          <Tag href='https://rsu.tv/' target='_blank'>RSU Public TV</Tag>
          <Tag href='https://www.rsuradio.com/' target='_blank'>RSU Radio</Tag>

        </Panel>
        <Panel>
          <Header>CAMPUS</Header>
          <Tag href='https://www.rsu.edu/campus-life/student-activities/cat/' target='_blank'>Campus Activities Team</Tag>
          <Tag href='https://www.rsu.edu/about/contact-directory/' target='_blank'>Directory</Tag>
          <Tag href='https://www.rsu.edu/campus-life/event-calendar/' target='_blank'>Event Calendar</Tag>
          <Tag href='https://www.rsu.edu/about/maps-directions/' target='_blank'>Campus Directions</Tag>
          <Tag href='https://www.rsu.edu/campus-life/event-calendar/' target='_blank'>Visit Campus</Tag>
          <Tag href='https://www.rsu.edu/about/offices-services/rsu-police-department/' target='_blank'>Campus Safety</Tag>

        </Panel>
        <Panel>
          <Header>LEARN MORE</Header>
          <Tag href='https://www.rsu.edu/development-foundation/' target='_blank'>Give to RSU</Tag>
          <Tag href='https://www.rsu.edu/admissions/admission-requirements/transfer-students/' target='_blank'>Transfer Information</Tag>
          <Tag href='https://www.rsu.edu/admissions/enrollment/request-a-transcript/' target='_blank'>Transcripts</Tag>
          <Tag href='https://www.rsu.edu/admissions/student-consumer-information/' target='_blank'>Student Consumer Info</Tag>
          <Tag href='https://www.rsu.edu/resources/coronavirus/cares-act-grant/' target='_blank'>CARES Act Grant</Tag>
        </Panel>
        <Panel>
          <Header>CONTACT US</Header>
          <Para>Rogers State University</Para>
          <Para>1701 W. Will Rogers Blvd.</Para>
            <Para>Claremore, OK 74017</Para>
            <Tag href='mailto:rsuaeinterns@gmail.com'>rsuaeinterns@gmail.com</Tag>
            <Tag href='tel:9182372363'>(918) 237-2363</Tag>
        </Panel>
      </FooterContent>
      <ButtonContainer>
            <Button href='#home'>Back to Top</Button>
        </ButtonContainer>
      <Copyright>This website, RSUHonors.com, developed by Jon Biersdorfer in 2024, is dedicated to promoting equality and fairness in all aspects.</Copyright>
      <Copyright> We are committed to providing equal opportunities and support non-discriminatory practices.</Copyright>
      <Copyright>Please be aware that RSUHonors.com operates independently and is not associated with any franchise company. </Copyright>
      <Copyright>All content and materials on this website are protected by copyright © 2024 RSUHonors.com. All rights reserved.</Copyright>
    </Container>
  )
}

export default Outer