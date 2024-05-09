import React from 'react';
import LibraryCard from '../Card';
import { bookCollection } from '../../../../data/constants';
import styled from 'styled-components';

const CardContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 28px;
    flex-wrap: wrap;
`;


const Library = () => {
  return (
    <CardContainer>
      {bookCollection.map((book) => (
        <LibraryCard key={book.id} book={book} />
      ))}
    </CardContainer>
  );
};

export default Library;
