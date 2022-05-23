import { Box, Container, Divider } from '@chakra-ui/react';
import { GetStaticProps } from 'next';
import React from 'react';
import Carousel from '../components/Carousel/Carousel';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import About from '../features/Home/About/About';
import Discover from '../features/Home/Discover/Discover';
import Hero from '../features/Home/Hero/Hero';
import { getCarouselItems } from '../utils/getCarouselItems';

const Home = ({ carouselItems }: any) => {
  return (
    <Box>
      <Container maxW={'6xl'} className="container">
        <Header />
        <Hero />
        <Divider />
        <About />
        <Carousel carouselItems={carouselItems} />
        <Discover />
      </Container>
      <Footer />
    </Box>
  );
};

export default Home;

export const getStaticProps: GetStaticProps = async () => {
  const carouselItems = getCarouselItems();
  return {
    props: {
      carouselItems,
    },
  };
};
