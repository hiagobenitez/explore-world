/* eslint-disable prettier/prettier */
/* eslint-disable @next/next/no-img-element */
import React, { useState } from 'react';
import { Container } from './styles';

type cardEpProps = {
  title: string;
  url: string;
};

export const CardExplore = ({ url, title }: cardEpProps) => {
  return (
    <>
      <Container url={url}>
        <p>
          {title}
          <img src="./images/IconSeta.svg" alt="" />
        </p>
      </Container>
    </>
  );
};
