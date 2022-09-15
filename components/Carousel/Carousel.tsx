import React, { useState } from 'react';
import classNames from 'classnames';
import { Swiper as ReactSwiper, SwiperSlide } from 'swiper/react';
import Swiper, { Autoplay, EffectFade, Thumbs } from 'swiper';

Swiper.use([Autoplay, EffectFade, Thumbs]);

import 'swiper/components/effect-fade/effect-fade.min.css';
import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';
import styles from './Carousel.module.scss';
import { Heading } from '@chakra-ui/react';
import { BACKEND_URL } from '../../api/axios';

type Props = {
  carouselItems: any;
};

const Carousel = ({ carouselItems }: Props) => {
  const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);
  const [swiperInstance, setSwiperInstance] = useState<any>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  if (!carouselItems) {
    return null;
  }
  return (
    <div className={styles.carousel}>
      <Heading fontWeight={700} mb={8}>
        Featured Projects
      </Heading>
      <ReactSwiper
        spaceBetween={50}
        slidesPerView={1}
        onSwiper={setSwiperInstance}
        allowTouchMove={false}
        autoplay={{
          delay: 7000,
          disableOnInteraction: false,
        }}
        effect="fade"
        watchSlidesProgress
        onSlideChange={() => {
          setActiveIndex(swiperInstance.activeIndex);
        }}
        thumbs={{
          swiper: thumbsSwiper,
        }}
      >
        {carouselItems?.data.map(
          ({
            attributes: { carouselImage, name, logotype, projectTitle, description, website },
          }: any) => (
            <SwiperSlide key={projectTitle}>
              <div className={styles.carouselItem}>
                <img
                  src={`${BACKEND_URL}${carouselImage?.data?.attributes?.url ?? ''}`}
                  className={styles.carouselItem__img}
                />
                <div className={styles.carouselItem__content}>
                  <div className={styles.carouselItem__logo}>
                    <img
                      src={`${BACKEND_URL}${logotype?.data?.attributes?.url ?? ''}`}
                      alt={`${name} logotype`}
                    />
                    <span className={styles.carouselItem__name}>{name}</span>
                  </div>
                  <div className={styles.carouselItem__info}>
                    <div className={styles.carouselItem__title}>{projectTitle}</div>
                    {description ? (
                      <div className={styles.carouselItem__description}>{description}</div>
                    ) : null}
                    <div className={styles.carouselItem__button}>
                      <a href={website} target="_blank">
                        Go to Project
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ),
        )}
      </ReactSwiper>

      <ReactSwiper
        slidesPerView={4}
        watchSlidesProgress
        onSwiper={setThumbsSwiper}
        className={styles.carouselThumbContainer}
        spaceBetween={30}
        allowTouchMove={false}
      >
        {carouselItems?.data.map(({ attributes: { logotype, name, title } }: any, index: any) => (
          <SwiperSlide key={title}>
            <div
              className={classNames(styles.carouselThumb, {
                [styles.carouselThumb_active]: activeIndex === index,
              })}
            >
              <div className={styles.carouselThumb__logo}>
                <img
                  alt={`${name} logotype`}
                  src={`${BACKEND_URL}${logotype?.data?.attributes?.url ?? ''}`}
                />
                <span className={styles.carouselThumb__name}>{name}</span>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </ReactSwiper>
    </div>
  );
};

export default Carousel;
