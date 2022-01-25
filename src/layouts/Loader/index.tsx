/* eslint-disable prettier/prettier */
import * as styles from './styles';
import React, { useEffect } from 'react';
import { gsap } from 'gsap';

function AnimationLayout() {
  useEffect(() => {
    gsap.to('#animation', {
      opacity: '0',
      delay: 2.8,
      ease: Expo.easeInOut,
    });
  });

  return (
    <>
      <styles.Animation id="animation">
        <div className="bg-loader"></div>
      </styles.Animation>
    </>
  );
}

export default AnimationLayout;
