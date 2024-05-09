import { React, useState, useEffect} from 'react';
import styled from 'styled-components';
import { bookCollection } from '../../../../data/constants';

const Card = styled.div`
    display: flex;
    justify-content: center;
    align-items: flex-start;
    width: 450px;
    background-color: white;
    overflow: hidden;
    margin: 10px;
    border-radius: 10px;
    border: 1px solid #ddd;
    flex-direction: row;
    transition: all ease-in-out 0.3s;
    height: ${({ cardHeight }) => cardHeight}px; /* Set height dynamically */

    &:hover {
        transform: scale(1.05);
        transform: translateY(-10px);
        //box-shadow: 0 0 px 4px rgba(0, 0, 0, 0.6);
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

const TitleC = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
`;

const Fav = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin-top: 5px;
`;

const TitleC2 = styled.div`
    display: flex;
    margin-top: 0px;
    flex-direction: row;
    justify-content: start;
    align-items: center;
    flex-wrap: wrap;
    width: 100%;
`;

const Label = styled.div`
    font-size: 16px;
    font-weight: 700;
    padding-right: 5px;

    @media (max-width 500px) {
        font-size: 12px;
    }
`;

const Tags = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 8px;
    margin-top: 4px;
    align-items: center;
    justify-content: center;
`;

const Tag = styled.div`
    font-size: 14px;
    display: flex;
    font-weight: 400;
    background-color: #b10e27;
    opacity: 0.8;
    color: white;
    padding: 2px 12px;
    border-radius: 15px;

    @media (max-width 500px) {
        font-size: 12px;
    }
`;

const Title = styled.h2`

    text-align: center;
    color: #b10e27;
`;

const Author = styled.div`
    

    @media (max-width 500px) {
        font-size: 12px;
    }
    
`;

const Themes = styled.div`
    display: flex;
    width: 100%;

    @media (max-width 500px) {
        font-size: 12px;
    }
`;

const Year = styled.div``;

const LibraryCard = ({ book }) => {
    const [cardHeight, setCardHeight] = useState(0);

    const handleImageLoad = (event) => {
        setCardHeight(event.target.height);
    };

    const getCardStyles = () => {
        if (book.id === 13) { // Example: Styling for book with ID 1
            return {
                fontSize: "10px"
                // Add more styles as needed
            };
        } else {
            return {}; // Default styles
        }
    };

    return (
        <Card cardHeight={cardHeight} >
            <Left>
                <Image src={require(`../../../../images/${book.image}`)} alt={`${book.title} Cover`} onLoad={handleImageLoad} />
            </Left>
            <Right>
                <TitleC style={{marginTop: "-5px"}}><Title>{book.title}</Title>
                </TitleC>
                <TitleC2>
                    <Label>Author: </Label>
                    <Author>{book.author}</Author>
                </TitleC2>
                <TitleC2>
                    <Label>Year Published:</Label>
                    <Year>{book.year}</Year>
                </TitleC2>
                <TitleC2>
                    <Label style={{textDecoration: "underline"}}>Key Themes</Label>
                    
                        {book.themes.map((theme, index) => (
                           <Themes key={index}>{theme}</Themes>
                        ))}
                    
                </TitleC2>
                <Fav>
                    <Label>Favorited by</Label>
                </Fav>
                <Tags>
                    {book.students.map((student, index) => (
                        <Tag  style={getCardStyles()} key={index}>{student}</Tag>
                    ))}
                </Tags>
            </Right>
        </Card>
    );
};

export default LibraryCard;