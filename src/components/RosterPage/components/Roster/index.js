import React, { useState } from 'react';
import styled from 'styled-components';
import RosterCard from '../Card';
import { house } from '../../../../data/constants';

const Container = styled.div`
  background: transparent;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
  align-items: center;
  padding-top: 20px;
  padding-bottom: 40px;
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 1350px;
  gap: 12px;
  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

const Title = styled.div`
  font-size: 42px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_primary};
  text-align: center;
  margin-top: 20px;
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 32px;
  }
`;

const Description = styled.div`
  font-size: 18px;
  max-width: 600px;
  text-align: center;
  color: ${({ theme }) => theme.text_secondary};
  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const ToggleGroup = styled.div`
  display: flex;
  background-color: white;
  border: 1.5px solid #0c2340};
  color: #0c2340;
  font-size: 12px;
  font-weight: 500;
  margin: 22px 0;
  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

const ToggleButton = styled.div`
  padding: 8px 18px;
  font-size: 14px;
  cursor: pointer;
  color: ${({ theme }) => theme.text_primary};
  ${({ active, theme }) =>
    active &&
    `
        background-color: #ba0c2f;
        color: white;
    `}

  &:hover {
    background-color: #d8627a;
    color: white;
  }

  @media (max-width: 768px) {
    padding: 6px 8px;
    border-radius: 4px;
  }
`;

const Divider = styled.div`
  background-color: #0c2340;
  width: .5px;
`;

const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 28px;
  flex-wrap: wrap;
`;

const Roster = () => {
  const [toggle, setToggle] = useState('all');
  const [sortOrder, setSortOrder] = useState('asc'); // Default to ascending order

  // Function to handle sorting
  const handleSort = () => {
    setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
  };

  // Sort the house array based on name and sortOrder
  const sortedHouse = house.slice().sort((a, b) => {
    if (sortOrder === 'asc') {
      return a.name.localeCompare(b.name);
    } else {
      return b.name.localeCompare(a.name);
    }
  });

  return (
    <Container id="projects">
      <Wrapper>

        <ToggleGroup className="project">
          {toggle === 'all' ? (
            <ToggleButton active value="all" onClick={() => setToggle('all')}>
              ALL
            </ToggleButton>
          ) : (
            <ToggleButton value="all" onClick={() => setToggle('all')}>
              ALL
            </ToggleButton>
          )}
          <Divider />
          {toggle === 'Freshman' ? (
            <ToggleButton active onClick={() => setToggle('Freshman')}>
              FRESHMEN
            </ToggleButton>
          ) : (
            <ToggleButton value="Freshman" onClick={() => setToggle('Freshman')}>FRESHMEN</ToggleButton>
          )}
          <Divider />
          {toggle === 'Sophomore' ? (
            <ToggleButton active onClick={() => setToggle('Sophomore')}>
              SOPHOMORES
            </ToggleButton>
          ) : (
            <ToggleButton value="Sophomore" onClick={() => setToggle('Sophomore')}>SOPHOMORES</ToggleButton>
          )}
          <Divider />
          {toggle === 'Junior' ? (
            <ToggleButton active onClick={() => setToggle('Junior')}>
              JUNIORS
            </ToggleButton>
          ) : (
            <ToggleButton value="Junior" onClick={() => setToggle('Junior')}>JUNIORS</ToggleButton>
          )}
          <Divider />
          {toggle === 'Senior' ? (
            <ToggleButton active onClick={() => setToggle('Senior')}>
              SENIORS
            </ToggleButton>
          ) : (
            <ToggleButton value="Senior" onClick={() => setToggle('Senior')}>SENIORS</ToggleButton>
          )}
          <Divider />
          {/* <ToggleButton onClick={handleSort}>
            {sortOrder === 'asc' ? 'Sort A-Z' : 'Sort Z-A'}
          </ToggleButton> */}
        </ToggleGroup>

        <CardContainer className="project">
          {toggle === 'all'
            ? house.map((rosterItem) => (
                <RosterCard key={rosterItem.id} rosterItem={rosterItem} />
              ))
            : house
                .filter((item) => item.year === toggle)
                .map((rosterItem) => (
                  <RosterCard key={rosterItem.id} rosterItem={rosterItem} />
                ))}
        </CardContainer>
      </Wrapper>
    </Container>
  );
};

export default Roster;
