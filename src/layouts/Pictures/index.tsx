import { CardPictures } from '@/components/cardPictures';
import * as styles from './styles';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { useEffect } from 'react';
export function PicturesLayout() {
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    gsap.to('#left', {
      x: 130,
      scrollTrigger: {
        trigger: '#left',
        start: 'center 80%',
        end: 'bottom 0%',
        scrub: 2,
      },
    });
    return () => {
      gsap.killTweensOf('#left');
    };
  }, []);
  return (
    <>
      <styles.Container>
        <div id="left">
          <p data-aos="fade-right">MY GALLERY</p>
          <h1 data-aos="fade-right">Adventure Pictures</h1>
        </div>
        <styles.Cards>
          <div data-aos="zoom-in-up">
            <CardPictures url="./images/4.jpg" />
          </div>
          <div data-aos="zoom-in-up" data-aos-delay="300">
            <CardPictures url="./images/5.jpg" />
          </div>
          <div data-aos="zoom-in-up">
            <CardPictures url="./images/6.jpg" />
          </div>

          <div data-aos="zoom-in-up" data-aos-delay="300">
            <CardPictures url="./images/9.jpg" />
          </div>
          <div data-aos="zoom-in-up">
            <CardPictures url="./images/8.jpg" />
          </div>
          <div data-aos="zoom-in-up" data-aos-delay="300">
            <CardPictures url="./images/7.jpg" />
          </div>

          <div data-aos="zoom-in-up">
            <CardPictures url="./images/5.jpg" />
          </div>
          <div data-aos="zoom-in-up" data-aos-delay="300">
            <CardPictures url="./images/2.jpg" />
          </div>
          <div data-aos="zoom-in-up">
            <CardPictures url="./images/3.jpg" />
          </div>
        </styles.Cards>
      </styles.Container>
    </>
  );
}
