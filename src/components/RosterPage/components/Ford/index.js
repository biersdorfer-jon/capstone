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



const Ford = () => {
  return (
    <Container>
        <Wrapper>
            {/* <Card>
                
            </Card> */}
        </Wrapper>
    </Container>
  )
}

export default Ford