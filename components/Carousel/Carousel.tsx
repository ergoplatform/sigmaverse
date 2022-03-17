import React from 'react';
// Core modules imports are same as usual
// Direct React component imports
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';
import styles from './carousel.module.scss';

type Props = {
  carouselItems: any;
};

const Carousel = ({ carouselItems }: Props) => {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={1}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      {carouselItems.map(({ preview, logo, name, title, description, website }: any) => (
        <SwiperSlide>
          <div className={styles.carouselItem}>
            <img src={preview} className={styles.carouselItem__img} />
            <div className={styles.carouselItem__content}>
              <div className={styles.carouselItem__logo}>
                <img src={logo} alt={`${name} logotype`} className="dapps-card__logotype" />
                <span className={styles.carouselItem__name}>{name}</span>
              </div>
              <div className={styles.carouselItem__title}>{title}</div>
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
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Carousel;
