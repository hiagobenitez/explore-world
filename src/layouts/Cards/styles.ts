/* eslint-disable prettier/prettier */
import styled from 'styled-components';

export const Container = styled.section`
  padding: 5rem 0;

  width: 80%;
  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: center;

  flex-wrap: wrap;

  gap: 3rem;

  .transform {
    transform: translateY(4rem);
  }

  p {
    width: 90%;
    font-size: 16px;
    line-height: 200%;
    font-weight: 200;
    letter-spacing: 0.13rem;
    color: rgba(255, 255, 255, 0.5);

    text-align: justify;
    margin-top: 8rem;
  }
`;
