import { Box, Container } from '@chakra-ui/react';
import React from 'react';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import Done from '../features/AddDapp/Done/Done';
import FastestWay from '../features/AddDapp/FastestWay/FastestWay';
import Hero from '../features/AddDapp/Hero/Hero';
import PrepareImages from '../features/AddDapp/PrepareImages/PrepareImages';
import UploadFiles from '../features/AddDapp/UploadFiles/UploadFiles';

const Home = () => {
  return (
    <Box>
      <div className="landing-toplayer"></div>
      <Box className="landing-center" height={{ base: 550, md: 650, lg: 950 }}></Box>
      <div className="landing-centerlayer"></div>
      <div className="landing-bottom_second"></div>
      <div className="landing-bottom_first"></div>
      <Container maxW={'6xl'} className="container" position={'relative'} zIndex={10}>
        <Header />
        <Hero />
        <FastestWay />
        <PrepareImages />
        <UploadFiles />
        <Done />
      </Container>
      <Box zIndex={10} position="relative">
        <Footer />
      </Box>
    </Box>
  );
};

export default Home;
