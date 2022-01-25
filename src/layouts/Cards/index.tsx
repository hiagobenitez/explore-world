/* eslint-disable prettier/prettier */

import * as styles from './styles';

import React, { useEffect } from 'react';
import { CardExplore } from '@/components/cardsService';

function CardsSub() {
  return (
    <styles.Container>
      <div className="transform">
        <CardExplore url="./images/CARD1.jpg" title="explore world" />
      </div>
      <CardExplore url="./images/CARD2.jpg" title="explore world" />
      <div className="transform">
        <CardExplore url="./images/CARD3.jpg" title="explore world" />
      </div>

      <CardExplore url="./images/CARD4.jpg" title="explore world" />

      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vitae dui
        elit. Suspendisse dapibus tortor eu erat tempor tristique. In ultrices
        sagittis leo vitae interdum. Curabitur at dictum sapien, consectetur
        imperdiet turpis. Curabitur vitae augue sed dui suscipit suscipit. Duis
        vitae ultrices dolor. Integer id ipsum at risus blandit blandit. Lorem
        ipsum dolor sit amet, consectetur adipiscing elit. Donec vitae dui elit.
        Suspendisse dapibus tortor eu erat tempor tristique. In ultrices
        sagittis leo vitae interdum. Curabitur at dictum sapien, consectetur
        imperdiet turpis. Curabitur vitae augue sed dui suscipit suscipit. Duis
        vitae ultrices dolor. Integer id ipsum at risus blandit blandit. Lorem
        ipsum dolor sit amet, consectetur adipiscing elit. Donec vitae dui elit.
        Suspendisse dapibus tortor eu erat tempor tristique. In ultrices
        sagittis leo vitae interdum. Curabitur at dictum sapien, consectetur
        imperdiet turpis. Curabitur vitae augue sed dui suscipit suscipit. Duis
        vitae ultrices dolor. Integer id ipsum at risus blandit blandit. Lorem
        ipsum dolor sit amet, consectetur adipiscing elit. Donec vitae dui elit.
        Suspendisse dapibus tortor eu erat tempor tristique. In ultrices
        sagittis leo vitae interdum. Curabitur at dictum sapien, consectetur
        text-align-last: center; text-align-last: center; imperdiet turpis.
        Curabitur vitae augue sed dui suscipit suscipit. Duis vitae ultrices
        dolor. Integer id ipsum at risus blandit blandit. Lorem ipsum dolor sit
        amet, consectetur adipiscing elit. Donec vitae dui elit. Suspendisse
        dapibus tortor eu erat tempor tristique. In ultrices sagittis leo vitae
        interdum. Curabitur at dictum sapien, consectetur imperdiet turpis.
        Curabitur vitae augue sed dui suscipit suscipit. Duis vitae ultrices
        dolor. Integer id ipsum at risus blandit blandit. Lorem ipsum dolor sit
        amet, consectetur adipiscing elit. Donec vitae dui elit. Suspendisse
        dapibus tortor eu erat tempor tristique. In ultrices sagittis leo vitae
        interdum. Curabitur at dictum sapien, consectetur imperdiet turpis.
        Curabitur vitae augue sed dui suscipit suscipit. Duis vitae ultrices
        dolor. Integer id ipsum at risus blandit blandit. Lorem ipsum dolor sit
        amet, consectetur adipiscing elit. Donec vitae dui elit. Suspendisse
        dapibus tortor eu erat tempor tristique. In ultrices sagittis leo vitae
        interdum. Curabitur at dictum sapien, consectetur imperdiet turpis.
        Curabitur vitae augue sed dui suscipit suscipit. Duis vitae ultrices
        dolor. Integer id ipsum at risus blandit blandit.
      </p>
    </styles.Container>
  );
}
export default CardsSub;
