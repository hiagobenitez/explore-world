import styled from 'styled-components';

export const Container = styled.div`
  width: 80%;
  height: 100%;

  margin: 0 auto;

  p {
    color: rgba(255, 255, 255, 0.3);

    font-size: 14px;
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: 2.8px;
  }

  h1 {
    margin-bottom: 2rem;
    margin-top: 1rem;
    font-size: 35px;
    font-weight: 700;
    color: rgba(255, 255, 255, 1);
  }
`;

export const Cards = styled.div`
  width: 100%;
  height: 100%;

  gap: 3rem;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`;
