import {
  Button,
  Container,
  FormControl,
  FormHelperText,
  FormLabel,
  Grid,
  Heading,
  Input,
  Stack,
  Textarea,
} from '@chakra-ui/react';
import React, { useState } from 'react';

const UploadFiles = () => {
  const [tab, setTab] = useState(0);

  return (
    <Stack
      spacing={16}
      pt={{ base: 12, md: 20 }}
      align={'center'}
      display={{ base: 'flex', md: 'flex' }}
    >
      <Stack spacing={4} align={'center'} textAlign={{ base: 'center', md: 'left' }}>
        <img src="/images/ArrowDown.svg" alt="Logo Image" />
        <Heading textAlign={'center'} fontSize={'5xl'} maxWidth={'700px'}>
          Fill the form below
        </Heading>
      </Stack>
      <Container maxW="550px" bg="purple.700" color="white" borderRadius="2xl">
        <form>
          <Stack padding={{ base: 4, md: 8 }} gap={{ base: 2 }}>
            <FormControl>
              <FormLabel>Your email</FormLabel>
              <Input type="email" />
              <FormHelperText>
                Not required. We will contact you if we need more info.
              </FormHelperText>
            </FormControl>
            <FormControl>
              <FormLabel>Project name</FormLabel>
              <Input type="text" name="projectName" placeholder="Sigmaverse" />
            </FormControl>
            <FormControl>
              <FormLabel>Description</FormLabel>
              <Textarea name="projectDescription" placeholder="Your portal to Ergo universe" />
            </FormControl>
            <FormControl>
              <FormLabel>Website</FormLabel>
              <Input type="email" placeholder="sigmaverse.io" />
            </FormControl>
            <FormControl>
              <FormLabel>Logotype</FormLabel>
              <Input type="file" />
              <FormHelperText>
                The dimensions for logo image should be minimal as <b>88x88</b> pixels.
              </FormHelperText>
            </FormControl>
            <FormControl>
              <FormLabel>Preview</FormLabel>
              <Input type="file" />
              <FormHelperText>
                For the best image quality experience, image dimensions should be <b>1560x880</b>{' '}
                pixels.{' '}
              </FormHelperText>
            </FormControl>
            <FormControl>
              <Button bg="white" color="black" type="submit">
                Submit
              </Button>
            </FormControl>
          </Stack>
        </form>
      </Container>
    </Stack>
  );
};

export default UploadFiles;
