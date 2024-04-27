import React, { useState } from 'react';
import styled from 'styled-components';
import { IoLocationOutline } from "react-icons/io5";


const CardContainer = styled.div`
  border: 1px solid #ddd;
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
  color: #ba0c2f;
`;

const LocationIcon = styled.div`
  
`;

const LocationText = styled.div`
  margin-bottom: 4px;
  margin-left: 5px;
`;

const Desc = styled.p`
  margin-bottom: 4px;
  color: #ba0c2f;
`;

const Book = styled.a`
  color: #ba0c2f;
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

const Dropdown = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  background-color: #fff; /* Added white background */
  border-radius: 0 4px 0 4px; /* Rounded corners for top-right of dropdown */
`;

const Description = styled.div`
  display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
  position: absolute;
  top: 100%; /* Position below the card */
  left: 0;
  width: 100%;
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 0 0 4px 4px; /* Rounded corners for bottom of dropdown */
  padding: 16px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  z-index: 1; /* Ensure dropdown is above other cards */
`;

const RosterCard = ({ rosterItem }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <CardContainer>
      <Image src={require(`../../../../images/${rosterItem.image}`)} alt={`${rosterItem.name}'s photo`} />
      <InfoContainer>
        <Name>{rosterItem.name}</Name>
        <Desc>{`${rosterItem.year} - ${rosterItem.major}`}</Desc>
        
      </InfoContainer>
      <DetailContainer>

      
      <LocationContainer>
       
          <LocationIcon>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="s-icon s-icon-icon-location" viewBox="0 0 16 16">
          <path d="M8 16a.667.667 0 0 1-.37-.112c-.257-.171-6.297-4.255-6.297-9.221a6.667 6.667 0 0 1 11.38-4.714 6.623 6.623 0 0 1 1.953 4.714c0 4.966-6.04 9.05-6.296 9.22A.667.667 0 0 1 8 16ZM8 1.333a5.333 5.333 0 0 0-5.334 5.334c0 3.608 4.067 6.908 5.334 7.847 1.266-.939 5.333-4.239 5.333-7.847A5.333 5.333 0 0 0 8 1.333Zm0 8A2.667 2.667 0 1 1 8 4a2.667 2.667 0 0 1 0 5.333Zm0-4A1.333 1.333 0 1 0 8 8a1.333 1.333 0 0 0 0-2.667Z"/>
        </svg>
</LocationIcon>
      <LocationText>
          {`${rosterItem.city}`}
      </LocationText>
      </LocationContainer>
      <LocationContainer>

        <BookDes>Favorite Work Studied:</BookDes>
        <Book>{`${rosterItem.book}`}</Book>
      </LocationContainer>
      </DetailContainer>


    </CardContainer>
  );
};

export default RosterCard;