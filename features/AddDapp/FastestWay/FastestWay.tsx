import { Box, Heading, Link, Stack, Text } from '@chakra-ui/react';
import React from 'react';

const FastestWay = () => {
  return (
    <Stack
      spacing={20}
      pt={{ base: 10, md: 0 }}
      pb={{ base: 0, md: 20 }}
      align={'center'}
      display={{ base: 'flex', md: 'flex' }}
    >
      <Stack spacing={4} align={'center'} textAlign={{ base: 'center', md: 'left' }}>
        <img src="/images/Upload.svg" alt="" />
        <Heading textAlign={'center'} fontSize={{ base: '3xl', md: '5xl' }} maxWidth={'700px'}>
          The fastest way to add your dApp via Github
        </Heading>
      </Stack>
      <Stack spacing={{ base: 6, md: 10 }} direction={{ base: 'column', md: 'row' }}>
        <Stack spacing={{ base: 4, md: 0 }}>
          <Text textTransform="uppercase" fontSize={'18px'} letterSpacing="0.1em" fontWeight={700}>
            <span className="text-fill">Get started</span>
          </Text>
          <Heading fontSize={{ base: '3xl', md: '4xl' }}>
            Create a Fork of ergoplatform/sigmaverse
          </Heading>
          <Text color="rgba(255, 255, 255, 0.75)">
            For the begining you need to duplicate the project by creating a fork from{' '}
            <Link
              textDecoration={'underline'}
              href="https://github.com/ergoplatform/sigmaverse"
              target="_blank"
            >
              ergoplatform/sigmaverse
            </Link>
            .
          </Text>
        </Stack>
        <Box
          position={'relative'}
          height={{ base: '135px', md: '185px' }}
          rounded={'2xl'}
          width={'100%'}
          maxWidth={{ base: '100%', md: '50%' }}
          overflow={'hidden'}
        >
          <img src="/images/Fork.png" alt="" />
        </Box>
      </Stack>
    </Stack>
  );
};

export default FastestWay;
