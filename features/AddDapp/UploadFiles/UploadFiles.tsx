import { Box, Grid, GridItem, Heading, Stack, Text } from '@chakra-ui/react';
import React, { useState } from 'react';

const tabs = [
  {
    text: (
      <>
        Go to <b>applications</b> folder
      </>
    ),
    image: '/images/tabs/Step 1.png',
  },
  {
    text: (
      <>
        Look for <b>1010s</b> folder
      </>
    ),
    image: '/images/tabs/Step 2.png',
  },
  {
    text: (
      <>
        Find the <b>overview.md</b> file and press the <b>Copy raw contents</b> button
      </>
    ),
    image: '/images/tabs/Step 3.png',
  },
  {
    text: (
      <>
        Using any editing tool (atom, notepad etc), paste the copied info from overview.md file and
        update with your dApp’s related info: name, description, website, logo image, preview image
        and category
      </>
    ),
    image: '/images/tabs/Step 4.png',
  },
  {
    text: (
      <>
        Save file as <b>overview.md</b> and put in one project folder including logo and preview
        image assets
      </>
    ),
    image: '/images/tabs/Step 5.png',
  },
  {
    text: (
      <>
        Get back to <b>applications</b> folder and click on <b>Upload Files</b> link
      </>
    ),
    image: '/images/tabs/Step 6.png',
  },
  {
    text: <>Drag-and-drop project files into upload area</>,
    image: '/images/tabs/Step 7.png',
  },
  {
    text: (
      <>
        Enter your commit title and press <b>Commit changes</b> button
      </>
    ),
    image: '/images/tabs/Step 8.png',
  },
  {
    text: (
      <>
        After the commit look for <b>contribute</b> section and press on <b>Open pull request</b>
      </>
    ),
    image: '/images/tabs/Step 9.png',
  },
  {
    text: (
      <>
        In <b>Comparing changes</b> page press on <b>Create pull request</b>
      </>
    ),
    image: '/images/tabs/Step 10.png',
  },
  {
    text: (
      <>
        Right before a final step, review your info and press on final <b>Create pull request</b>{' '}
        button
      </>
    ),
    image: '/images/tabs/Step 11.png',
  },
];

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
        <img src="images/ArrowDown.svg" alt="Logo Image" />
        <Heading textAlign={'center'} fontSize={'5xl'} maxWidth={'700px'}>
          Edit and Upload Files
        </Heading>
        <Text textAlign={'center'} color="rgba(255, 255, 255, 0.75)" maxWidth={'650px'}>
          Prepare overview.md file by getting our template one and updating with your dApp’s
          credential info. Here’s a flow to follow:
        </Text>
      </Stack>
      <Grid templateColumns={{ base: '1fr', md: '1fr 1fr' }} gap={{ base: 12, md: 8 }}>
        <GridItem>
          {tabs.map(({ text, image }, index) => (
            <Box
              background={
                index === tab
                  ? 'linear-gradient(90deg, rgba(122, 100, 255, 0.25) 0%, rgba(173, 93, 254, 0.25) 100%)'
                  : ''
              }
              cursor="pointer"
              borderRadius="10px"
              p="15px"
              onClick={() => setTab(index)}
              key={image}
              display="flex"
              alignItems="center"
            >
              {' '}
              <Box
                borderRadius="30px"
                background="#8854F5"
                minWidth="28px"
                height="28px"
                color="#D8CEFF"
                display="flex"
                justifyContent="center"
                alignItems="center"
                mr="4"
                fontWeight={'500'}
                fontSize="18px"
              >
                {index + 1}
              </Box>
              <Text fontSize="14px" color="rgba(255, 255, 255, 0.75);">
                {text}
              </Text>
            </Box>
          ))}
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
              <img src={tabs[tab].image} alt="Preview Image" />
            </Box>
          </Stack>
        </GridItem>
      </Grid>
    </Stack>
  );
};

export default UploadFiles;
