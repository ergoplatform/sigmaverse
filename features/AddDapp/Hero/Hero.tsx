import {
  Stack,
  Link as CharkaLink,
  Flex,
  Box,
  Heading,
  Button,
  Image,
  Icon,
  IconProps,
  Text,
} from '@chakra-ui/react';
import Link from 'next/link';
import { FaGithub } from 'react-icons/fa';

export default function Hero() {
  return (
    <Stack py={{ base: 16, md: 10 }} pt={{ base: 10, md: 20 }}>
      <Stack
        align={{ base: 'center', md: 'flex-start' }}
        spacing={{ base: 2, md: 10 }}
        direction={{ base: 'column', md: 'row' }}
      >
        <Stack flex={1} spacing={{ base: 3 }} pt={{ base: 4, md: 14 }}>
          <Heading
            fontWeight={700}
            fontSize="18px"
            textTransform={'uppercase'}
            letterSpacing="0.1em"
            textAlign={{ base: 'center', md: 'initial' }}
          >
            Become a part of our community
          </Heading>
          <Stack spacing={{ base: 8, md: 10 }}>
            <Stack spacing={{ base: 8, md: 6 }}>
              <Heading
                lineHeight={1.2}
                fontWeight={700}
                fontSize={{ base: '5xl', lg: '64px' }}
                textAlign={{ base: 'center', md: 'initial' }}
                mt={0}
              >
                Add your dApp
              </Heading>
              <Text
                fontSize={{ base: 'md', md: 'lg' }}
                color="whiteAlpha.700"
                textAlign={{ base: 'center', md: 'left' }}
              >
                We have a step-by-step guide for non tech-savvy users of how to do the dapp
                submition. Just user follow the instructions down below. It's really simple. Pro
                users can jump directly to Sigmaverse's Github repo.
              </Text>
            </Stack>
            <Stack
              spacing={{ base: 4, sm: 6 }}
              direction={{ base: 'column', md: 'row' }}
              display="flex"
              justifyContent={{ base: 'center', md: 'flex-start' }}
              align={{ base: 'center', md: 'flex-start' }}
            >
              <Link href="/all-projects">
                <Button
                  size={'lg'}
                  color="black"
                  bg="white"
                  colorScheme={'white'}
                  fontWeight={'600'}
                  px={6}
                >
                  Browse All Projects
                </Button>
              </Link>
              <Button
                as="a"
                href="https://github.com/ergoplatform/sigmaverse"
                target="_blank"
                size={'lg'}
                colorScheme="white"
                variant="outline"
                fontWeight={'600'}
                px={6}
                leftIcon={<FaGithub />}
              >
                Jump to Github
              </Button>
            </Stack>
          </Stack>
        </Stack>
        <Flex
          display={{ base: 'none', md: 'flex' }}
          flex={1}
          justify={'flex-end'}
          align={'center'}
          position={'relative'}
          w={'full'}
        >
          <Box
            position={'relative'}
            height={'553px'}
            rounded={'2xl'}
            width={'264px'}
            overflow={'hidden'}
          >
            <Image
              alt={'Hero Image'}
              fit={'cover'}
              align={'center'}
              w={'100%'}
              h={'100%'}
              src="/images/Rocket.svg"
            />
          </Box>
        </Flex>
      </Stack>
    </Stack>
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
