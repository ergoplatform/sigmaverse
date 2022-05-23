import { Box, Button, Heading, Stack, Text } from '@chakra-ui/react';
import React from 'react';

type Props = {};

const Discover = (props: Props) => {
  return (
    <Stack spacing={8} py={36} align={'center'} display={{ base: 'none', md: 'flex' }}>
      <Stack spacing={4} align={'center'}>
        <Heading>Discover more Projects</Heading>
        <Text>We have more projects to show and a lot more in development.</Text>
      </Stack>
      <Button
        size={'lg'}
        bg="purple.400"
        color="white"
        colorScheme={'purple'}
        fontWeight={'600'}
        px={6}
      >
        Browse All Projects
      </Button>
    </Stack>
  );
};

export default Discover;
