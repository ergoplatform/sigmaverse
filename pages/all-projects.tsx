import { Box, Container } from '@chakra-ui/react';
import React from 'react';
import { AllProjectsPageContent } from '../components/AllProjects/AllProjects';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';

const AllProjects = () => {
  return (
    <Box>
      <Container maxW={'6xl'} className="container">
        <Header />
        <AllProjectsPageContent />
      </Container>
      <Footer />
    </Box>
  );
};

export default AllProjects;
