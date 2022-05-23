import {
  Stack,
  Flex,
  Box,
  Heading,
  Text,
  Image,
  Icon,
  IconProps,
  Grid,
  GridItem,
} from '@chakra-ui/react';

export default function About() {
  return (
    <Grid
      templateColumns={{ base: '1fr', md: 'repeat(10, 1fr)' }}
      gap={{ base: 16, md: 16 }}
      mb={{ base: 10, md: 0 }}
    >
      <GridItem colSpan={{ base: 0, md: 4 }}>
        <Stack
          align={'center'}
          spacing={{ base: 8, md: 10 }}
          py={{ base: 0, md: 28 }}
          direction={{ base: 'column', md: 'row' }}
        >
          <Flex
            flex={1}
            justify={'center'}
            align={'center'}
            position={'relative'}
            w={'full'}
            display={{ base: 'none', md: 'flex' }}
          >
            <Box position={'relative'} rounded={'2xl'} width={'full'} overflow={'hidden'}>
              <Image
                alt={'Hero Image'}
                fit={'cover'}
                align={'center'}
                w={'100%'}
                h={'100%'}
                src="/images/landing_about.png"
              />
            </Box>
          </Flex>
        </Stack>
      </GridItem>
      <GridItem colSpan={{ base: 1, md: 6 }}>
        <Stack
          align={'center'}
          spacing={{ base: 8, md: 10 }}
          py={{ base: 0, md: 100 }}
          direction={{ base: 'column', md: 'row' }}
        >
          <Stack flex={1}>
            <Stack spacing={{ base: 5, md: 8 }}>
              <Heading
                lineHeight={1.1}
                fontWeight={600}
                fontSize={{ base: '3xl', sm: '4xl', lg: '5xl' }}
                mt={0}
              >
                About Sigmaverse
              </Heading>
              <Text fontSize={{ base: 'sm', md: 'lg' }} color="whiteAlpha.700">
                Ergo has amazing tech and talented developers. However, as a decentralised and
                community-powered platform, it’s not always easy to know what’s going on all the
                time.
              </Text>
              <Text fontSize={{ base: 'sm', md: 'lg' }} color="whiteAlpha.700">
                Different people are developing different dApps and use cases, formally and
                informally. Connecting them to the same users and building that all-important DeFi
                network effect isn’t always easy.
              </Text>
              <Text fontSize={{ base: 'sm', md: 'lg' }} color="whiteAlpha.700">
                Sigmaverse is a one-stop portal to the Ergo dApp ecosystem: a place where users can
                find all the cool functionality that community developers are building on Ergo, all
                in one place.
              </Text>
            </Stack>
          </Stack>
        </Stack>
      </GridItem>
    </Grid>
  );
}

export const Blob = (props: IconProps) => {
  return (
    <Icon
      width={'100%'}
      viewBox="0 0 578 440"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M239.184 439.443c-55.13-5.419-110.241-21.365-151.074-58.767C42.307 338.722-7.478 282.729.938 221.217c8.433-61.644 78.896-91.048 126.871-130.712 34.337-28.388 70.198-51.348 112.004-66.78C282.34 8.024 325.382-3.369 370.518.904c54.019 5.115 112.774 10.886 150.881 49.482 39.916 40.427 49.421 100.753 53.385 157.402 4.13 59.015 11.255 128.44-30.444 170.44-41.383 41.683-111.6 19.106-169.213 30.663-46.68 9.364-88.56 35.21-135.943 30.551z"
        fill="currentColor"
      />
    </Icon>
  );
};
