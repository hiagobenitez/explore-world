import * as styles from './styles';

import React, { useEffect } from 'react';
import { CardExplore } from '@/components/cardsService';

function CardsSub() {
  return (
    <styles.Container>
      <div data-aos="zoom-in-up">
        <div className="transform">
          <CardExplore url="./images/CARD1.jpg" title="explore world" />
        </div>
      </div>
      <div data-aos="zoom-in-up" data-aos-delay="300">
        <CardExplore url="./images/CARD2.jpg" title="explore world" />
      </div>
      <div data-aos="zoom-in-up">
        <div className="transform">
          <CardExplore url="./images/CARD3.jpg" title="explore world" />
        </div>
      </div>
      <div data-aos="zoom-in-up" data-aos-delay="600">
        <CardExplore url="./images/CARD4.jpg" title="explore world" />
      </div>

      <p data-aos="fade-up">
        Mountain. Desert. There are many variations of passages of Lorem Ipsum
        available, but the majority have suffered alteration in some form, by
        injected humour, or randomised words which don’t look even slightly
        believable. If you are going to use a passage of Lorem Ipsum, you All
        the Lorem Ipsum gene rators on the Internet tend to hidden in the middle
        of text. repeat predefined chunks as necessary, making this the first
        true ge nerator on the Internet. It uses a dictionary of over 200 Latin
        words, comb.
      </p>
    </styles.Container>
  );
}
export default CardsSub;
