import styled from 'styled-components';

export const Animation = styled.section`
  width: 100%;
  height: 100vh;
  pointer-events: none;
  position: fixed;
  top: 0;
  left: 0;
  opacity: 1;

  z-index: 5;

  
  .bg-loader {
    display: flex;
    width: 100%;
    height: 100vh;
    align-items: center;
    justify-content: center;
    padding: 0 4rem;

    background: #1c1a1c;

    display: flex;
  align-items: center;
  justify-content: center;

  .logo {
      fill: transparent;

      animation: logoo 4s linear;
    }
    @keyframes logoo {
      0% {
        stroke-width: 0;
        stroke-dasharray: 1 100;
        fill: transparent;
      }
      35% {
        stroke-width: 1;
        stroke-dasharray: 100 0;

        fill: transparent;
      }
      60%,
      100% {
        fill: #fff;

        stroke-width: 0.3;
      }
    }
  }
  }
`;

export const Container = styled.section`
  width: 100%;
  height: 100vh;

  .parallax {
    width: 100%;
    height: 100vh;
    position: relative;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;

    &::before {
      content: '';
      position: absolute;
      left: 0;
      bottom: 0;
      background: linear-gradient(
        to top,
        rgba(28, 26, 28, 1),
        rgba(28, 26, 28, 0.75),
        transparent
      );
      /* background: red; */
      width: 100%;
      height: 400px;
      z-index: 4;
    }
    img {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
      pointer-events: none;
    }

    #text {
      position: relative;
      bottom: 0%;
      color: #fff;
      font-size: 10vw;
    }
    .header {
      position: absolute;
      top: 0%;
      width: 100%;
      height: 100px;

      display: flex;
      align-items: center;
      justify-content: center;
      .div {
        width: 80%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
      }
    }
  }

  .sec {
    position: relative;
    padding: 100px;

    h2 {
      font-size: 2.7rem;
      margin: 0 0 10px 0;
    }
    p {
      font-size: 1.2rem;
      text-align: justify;
      line-height: 170%;
    }
  }
`;
