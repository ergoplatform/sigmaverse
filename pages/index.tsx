import { Box, Container } from '@chakra-ui/react';
import { GetStaticProps } from 'next';
import React from 'react';
import { getCarouselItems } from '../api/getCarouselItems';
import Carousel from '../components/Carousel/Carousel';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import About from '../features/Home/About/About';
import Discover from '../features/Home/Discover/Discover';
import Hero from '../features/Home/Hero/Hero';

const Home = ({ carouselItems }: any) => {
  return (
    <Box>
      <div className="landing-toplayer"></div>
      <div className="landing-center"></div>
      <div className="landing-centerlayer"></div>
      <div className="landing-bottom_second"></div>
      <div className="landing-bottom_first"></div>
      <Container maxW={'6xl'} className="container" position={'relative'} zIndex={10}>
        <Header />
        <Hero />
        <About />
        <Carousel carouselItems={carouselItems} />
        <Discover />
      </Container>
      <Box zIndex={10} position="relative">
        <Footer />
      </Box>
    </Box>
  );
};

export default Home;

export const getStaticProps: GetStaticProps = async () => {
  const carouselItems = await getCarouselItems();

  return {
    props: {
      carouselItems,
    },
    revalidate: 3600,
  };
};
