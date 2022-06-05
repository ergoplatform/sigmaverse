import { Box, Grid, GridItem, Heading, Stack, Text } from '@chakra-ui/react';
import React from 'react';

const PrepareImages = () => {
  return (
    <Stack
      spacing={16}
      pt={{ base: 12, md: 0 }}
      pb={{ base: 30, md: 0 }}
      align={'center'}
      display={{ base: 'flex', md: 'flex' }}
    >
      <Stack spacing={4} align={'center'} textAlign={{ base: 'center', md: 'left' }}>
        <img src="/images/ArrowDown.svg" alt="Logo Image" />
        <Heading textAlign={'center'} fontSize={'5xl'} maxWidth={'700px'}>
          Prepare Images
        </Heading>
        <Text textAlign={'center'} color="rgba(255, 255, 255, 0.75)" maxWidth={'700px'}>
          Two image assets are needed - project’s logo and preview images.
        </Text>
      </Stack>
      <Grid templateColumns={{ base: '1fr', md: '1fr 1fr' }} gap={{ base: 12, md: 8 }}>
        <GridItem>
          <Stack spacing={'6'}>
            <Box
              position={'relative'}
              rounded={'2xl'}
              width={'100%'}
              maxWidth={'100%'}
              overflow={'hidden'}
            >
              <img src="/images/LogoImage.png" alt="Logo Image" />
            </Box>
            <Stack spacing={'2'}>
              <Text fontSize={'2xl'} fontWeight={700}>
                Logo Image
              </Text>
              <Text color="rgba(255, 255, 255, 0.75)">
                The dimensions for logo image should be minimal as <b>88x88</b> pixels. The logo
                asset should be placed in the container with 20px padding on each side. Also, it
                should have transparent background, so the asset must be exported as in <b>PNG</b>{' '}
                format.
              </Text>
            </Stack>
          </Stack>
        </GridItem>
        <GridItem>
          <Stack spacing={'6'}>
            <Box
              position={'relative'}
              rounded={'2xl'}
              width={'100%'}
              maxWidth={'100%'}
              overflow={'hidden'}
            >
              <img src="/images/PreviewImage.png" alt="Preview Image" />
            </Box>
            <Stack spacing={'2'}>
              <Text fontSize={'2xl'} fontWeight={700}>
                Get started
              </Text>
              <Text color="rgba(255, 255, 255, 0.75)">
                For the best image quality experience, image dimensions should be <b>1560x880</b>{' '}
                pixels. To preserve image file size, we suggest to export the asset as in <b>JPG</b>{' '}
                file format.
              </Text>
            </Stack>
          </Stack>
        </GridItem>
      </Grid>
      <Box width={'100%'} border="1px solid rgba(255, 255, 255, 0.2)" borderRadius="10px" p="4">
        <Text fontSize={'14px'} color="rgba(255, 254, 255, 0.5);">
          <b>(Optional)</b> To make PNG/JPG assets even smaller size, we encourage to compress it
          via tinypng.com web app. This way you will help sigmaverse load up even faster!
        </Text>
      </Box>
    </Stack>
  );
};

export default PrepareImages;
