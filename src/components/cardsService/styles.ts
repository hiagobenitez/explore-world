/* eslint-disable prettier/prettier */
import styled from 'styled-components';

interface ContainerProps {
  url: string;
}
export const Container = styled.section<ContainerProps>`
  width: 346px;
  height: 421px;

  cursor: pointer;

  object-fit: cover;

  background-image: url(${props => props.url});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;

  position: relative;

  transition: 0.5s ease-in-out;

  &:hover {
    filter: brightness(1.4);
    transform: translateY(-1.5rem);
  }
  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    background: linear-gradient(to top, rgba(28, 26, 28, 1), transparent);
    width: 100%;
    height: 422px;
  }

  p {
    position: absolute;

    color: rgba(255, 255, 255, 0.8);
    font-size: 14px;
    letter-spacing: 0.2rem;
    font-weight: 500;
    text-transform: uppercase;

    top: 240px;
    right: 0;

    width: 100%;
    height: 100%;

    text-align: center;

    img {
      margin-left: 0.8rem;
    }
  }
`;
