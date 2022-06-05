import { Heading, Stack, Text } from '@chakra-ui/react';
import React from 'react';

const Done = () => {
  return (
    <Stack
      spacing={8}
      pb={{ base: 20, md: 44 }}
      mt={{ base: 20, md: 20 }}
      align={'center'}
      display={{ base: 'flex', md: 'flex' }}
    >
      <Stack spacing={4} align={'center'} textAlign={{ base: 'center', md: 'left' }}>
        <img src="/images/Checkmark.svg" alt="" />
        <Heading>And you're done, congrats!</Heading>
        <Text>
          After your pull request will be reviewed and approved, your dApp will be placed in
          Sigmaverse platform.
        </Text>
      </Stack>
    </Stack>
  );
};

export default Done;
