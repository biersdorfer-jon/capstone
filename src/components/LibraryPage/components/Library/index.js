import React from 'react';
import LibraryCard from '../Card';
import { bookCollection } from '../../../../data/constants';

const Library = () => {
  return (
    <div>
      {bookCollection.map((book) => (
        <LibraryCard key={book.id} book={book} />
      ))}
    </div>
  );
};

export default Library;
