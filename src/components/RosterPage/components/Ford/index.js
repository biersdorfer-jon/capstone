import React from 'react'
import styled from 'styled-components'


const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
    z-index: 1;
    align-items: center;
    padding: 0px 0px 60px 0px;
    padding-top: 40px;
    background: #BA0C2F;

    @media (max-width: 768px) {
        padding: 30px;
    }
`;
const Wrapper = styled.div`
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    width: 100%;
    max-width: 1350px;
    padding: 40px 0px 0px 0px;
    gap: 12px;
    @media (max-width: 960px) {
        flex-direction: column;
    }
`;

const CardContainer = styled.div`
  border: 1px solid white;
  //background-color: white;
  border-radius: 4px;
  padding: 28px;
  margin-bottom: 16px;
  display: flex;
  width: 70%;
  justify-content: space-between;
`;

const Image = styled.img`
  width: 100px;
  height: 100px;
  object-fit: cover;
  border-radius: 4px;
  margin-right: 16px;
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  width: 80%;
`;

const DetailContainer = styled.div`
display: flex;
flex-direction: column;
align-items: start;
justify-content: center;
width: 100%;
`;

const LocationContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: start;
  width: 100%;
`;

const Name = styled.h3`
  margin: 0;
  color: white;
`;

const LocationIcon = styled.div`
  
`;

const LocationText = styled.div`
  margin-bottom: 4px;
  margin-left: 5px;
`;

const Desc = styled.p`
  margin-bottom: 4px;
  color: white;
  padding-right: 10px;
`;

const Book = styled.a`
  color: white;
  //text-decoration: none;
  font-style: italic;
  margin-left: 7px;
  &:hover{
    color: #000;
    text-decoration: underline;
    cursor: pointer;
  }
`;

const BookDes = styled.div``;



const Ford = () => {
  return (
    <Container>
        <Wrapper>
        <CardContainer>
      <Image src={require(`../../../../images/FORD-min.jpeg`)} />
      <InfoContainer>
        <Name>Dr. James Ford</Name>
        <Desc>Interim Department Head, Professor and Director of Academic Enrichment</Desc>
        
      </InfoContainer>
      <DetailContainer>

      
      <LocationContainer>
       
          <LocationIcon>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="s-icon s-icon-icon-location" viewBox="0 0 16 16">
          <path d="M8 16a.667.667 0 0 1-.37-.112c-.257-.171-6.297-4.255-6.297-9.221a6.667 6.667 0 0 1 11.38-4.714 6.623 6.623 0 0 1 1.953 4.714c0 4.966-6.04 9.05-6.296 9.22A.667.667 0 0 1 8 16ZM8 1.333a5.333 5.333 0 0 0-5.334 5.334c0 3.608 4.067 6.908 5.334 7.847 1.266-.939 5.333-4.239 5.333-7.847A5.333 5.333 0 0 0 8 1.333Zm0 8A2.667 2.667 0 1 1 8 4a2.667 2.667 0 0 1 0 5.333Zm0-4A1.333 1.333 0 1 0 8 8a1.333 1.333 0 0 0 0-2.667Z"/>
        </svg>
</LocationIcon>
      <LocationText>
          Edmond, OK
      </LocationText>
      </LocationContainer>
      <LocationContainer>

        <BookDes>Favorite Work Studied:</BookDes>
        <Book>Normal People</Book>
      </LocationContainer>
      </DetailContainer>


    </CardContainer>
        </Wrapper>
    </Container>
  )
}

export default Ford