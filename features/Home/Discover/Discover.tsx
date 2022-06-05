import { Button, Heading, Stack, Text } from '@chakra-ui/react';
import Link from 'next/link';
import React from 'react';

const Discover = () => {
  return (
    <Stack
      spacing={8}
      py={{ base: 20, md: 36 }}
      align={'center'}
      display={{ base: 'flex', md: 'flex' }}
    >
      <Stack spacing={4} align={'center'} textAlign={{ base: 'center', md: 'left' }}>
        <img src="images/icons/discover.svg" alt="" />
        <Heading>Discover more Projects</Heading>
        <Text>We have more projects to show and a lot more in development.</Text>
      </Stack>
      <Link href="/all-projects">
        <Button
          size={'lg'}
          bg="white"
          color="black"
          colorScheme={'white'}
          fontWeight={'600'}
          px={6}
        >
          Browse All Projects
        </Button>
      </Link>
    </Stack>
  );
};

export default Discover;
