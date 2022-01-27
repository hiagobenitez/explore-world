/* eslint-disable prettier/prettier */
/* eslint-disable @next/next/no-img-element */
import React, { useState } from 'react';
import { Container } from './styles';
import ReactDOM from 'react-dom';
import Tilt from 'react-parallax-tilt';

type cardEpProps = {
  url: string;
};

export const CardPictures = ({ url }: cardEpProps) => {
  return (
    <>
      <Tilt style={{ perspective: 1 }}>
        <Container url={url}>
          <img src="./images/IconPictures.svg" alt="" />
        </Container>
      </Tilt>
    </>
  );
};
