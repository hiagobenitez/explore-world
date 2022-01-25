/* eslint-disable prettier/prettier */
import styled from 'styled-components';

export const Animation = styled.section`
  width: 100%;
  height: 100vh;

  position: fixed;
  top: 0;
  left: 0;
  opacity: 1;

  z-index: 999;

  .bg-loader {
    display: flex;
    width: 100%;
    height: 100vh;
    align-items: center;
    justify-content: center;

    background: #1c1a1c;
    .logovrau {
      fill: transparent;

      animation: logoman 12s ease infinite alternate;
    }
    @keyframes logoman {
      0% {
        strokewidth: 0;
        stroke-dasharray: 1 100;
        fill: transparent;
      }
      25% {
        strokewidth: 1;
        stroke-dasharray: 100 0;

        fill: transparent;
      }
      60%,
      100% {
        fill: #fff;

        strokewidth: 0.3;
      }
    }
  }
`;
