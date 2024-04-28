import React from 'react';
import styled from 'styled-components';
import { bookCollection } from '../../../../data/constants';

const Card = styled.div`
    display: flex;
    justify-content: center;
    align-items: flex-start;
    //padding: 15px 15px 8px 15px;
    width: 450px;
    height: 320px;
    background-color: white;
    box-shadow: 0 0 12px 4px rgba(0, 0, 0, 0.4);
    overflow: hidden;
    margin: 10px;
    gap: 14px;
    flex-direction: row;
    transition: all ease-in-out 0.3s;

    &:hover {
        transform: scale(1.05);
        transform: translateY(-10px);
        box-shadow: 0 0 12px 4px rgba(0, 0, 0, 0.6);
        transition: all ease-in-out 0.3s;
    }

`;

const Left = styled.div`
    width: 50%;
`;

const Image = styled.img`
    width: 100%;
`;

const Right = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: start;
    padding: 6px;
    width: 50%;
`;

const Title = styled.h2``;

const Author = styled.h4``;

const Year = styled.h4``;

const LibraryCard = ({ book }) => {
    return (
        <Card>
            <Left>
                <Image src={require(`../../../../images/${book.image}`)} alt={`${book.title} Cover`} />
            </Left>
            <Right>
                <Title>{book.title}</Title>
                <Author>{book.author}</Author>
                <Year>{book.year}</Year>
            </Right>
        </Card>
    );
};

export default LibraryCard;
