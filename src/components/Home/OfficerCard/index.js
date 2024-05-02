import React from 'react'
import styled from 'styled-components'


const Card = styled.div`
    width: 310px;
    display: flex;
    margin: 20px;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 280px;
    cursor: pointer;
    margin-bottom: 15px;
    border-radius: 10px 10px;
    -webkit-box-shadow: 0px 4px 5px 0px rgba(148,148,148,1);
-moz-box-shadow: 0px 4px 5px 0px rgba(148,148,148,1);
box-shadow: 0px 4px 5px 0px rgba(148,148,148,1);
transition: all 0.5s ease;

&:hover {
    transform: translateY(-15px);
}

`;

const Image = styled.img`
    width: 45%;
    border-radius: 50%;
    border: 3px solid #ba0c2f;

`;

const Name = styled.div`
  font-size: 24px;
  margin-top: 10px;
  font-weight: 700;
`;

const Title = styled.div`
  font-size: 16px;
  margin-top: 7px;
  font-weight: 700;
`;

const OfficerCard = ({ officers }) => {
  return (
    <Card>
         <Image src={require(`../../../images/${officers.img}`)} alt={`${officers.name}'s photo`}/>
         <Name>{officers.name}</Name>
        <Title>{officers.pos}</Title>
    </Card>
  )
}

export default OfficerCard