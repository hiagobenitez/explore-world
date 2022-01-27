/* eslint-disable prettier/prettier */
import styled from 'styled-components';

interface ContainerProps {
  url: string;
}
export const Container = styled.section<ContainerProps>`
  width: 477px;
  height: 527px;

  cursor: pointer;

  position: relative;

  object-fit: cover;

  background-image: url(${props => props.url});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;

  transition: 0.7s ease;

  display: flex;
  align-items: center;
  justify-content: center;

  img {
    z-index: 5;
    opacity: 0;
    transform: scale(1.2);

    transition: 0.8s ease;
  }
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 478px;
    height: 528px;

    background: linear-gradient(to top, rgba(28, 26, 28, 1), transparent);
  }
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 478px;

    height: 528px;

    background-color: rgba(28, 26, 28, 0.5);

    opacity: 0;

    transition: 0.7s ease;
  }

  &:hover {
    transform: scale(0.9);

    &::before {
      opacity: 1;
    }

    img {
      opacity: 1;
      transform: scale(1);
    }
  }
`;
