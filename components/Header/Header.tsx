import {
  Flex,
  Text,
  Stack,
  Link as ChakraLink,
  useColorModeValue,
  Box,
  Button,
} from '@chakra-ui/react';

import React, { useRef } from 'react';
import classNames from 'classnames';
import { useSidebar } from '../../hooks/useSideBar';
import Link from 'next/link';
import { FaPlus } from 'react-icons/fa';

export default function Header() {
  const sideBarRef = useRef(null);
  let { isOpen, open, close } = useSidebar(sideBarRef);

  return (
    <>
      <Box display={{ base: 'none', md: 'block' }}>
        <Flex
          color={useColorModeValue('gray.600', 'white')}
          minH={'60px'}
          py={{ base: 6 }}
          align={'center'}
        >
          <Flex flex={{ base: 1 }} justify={{ base: 'center', md: 'start' }} align="center">
            <Link href="/">
              <img
                src="/images/logo_new2.svg"
                style={{ height: '40px', cursor: 'pointer' }}
                alt="Logotype"
              />
            </Link>

            <Flex display={{ base: 'none', md: 'flex' }} ml={10}>
              <DesktopNav />
            </Flex>
          </Flex>

          <Stack flex={{ base: 1, md: 0 }} justify={'flex-end'} direction={'row'} spacing={6}>
            <Link href={'/add-dapp'}>
              <Button
                display={{ base: 'none', md: 'inline-flex' }}
                fontSize={'sm'}
                fontWeight={600}
                color={'black'}
                bg={'white'}
                _hover={{
                  bg: 'purple.300',
                }}
                leftIcon={<FaPlus />}
              >
                Add your dApp
              </Button>
            </Link>
          </Stack>
        </Flex>
      </Box>

      <Box display={{ base: 'block', md: 'none' }}>
        <header>
          <nav className={classNames('navigation', { 'navigation--open': isOpen })}>
            <button className="navigation__toggle" onClick={() => open()}>
              <img src="/images/icons/burger-menu.svg" alt="Burger" />
            </button>
            <div className="navigation__logo">
              <Link href="/">
                <img src="/images/logo_new2.svg" alt="Logotype" />
              </Link>
            </div>
            <button className="navigation__close" onClick={() => close()}>
              <img src="/images/icons/close.svg" alt="Close" />
            </button>
            <Box display={{ base: 'block', md: 'none' }}>
              <ul ref={sideBarRef} className="navigation-list">
                <li className="navigation-list__item">
                  <Flex
                    py={2}
                    as={Link}
                    href={'/'}
                    justify={'space-between'}
                    align={'center'}
                    _hover={{
                      textDecoration: 'none',
                    }}
                  >
                    <Text fontWeight={600} color={useColorModeValue('gray.600', 'gray.200')}>
                      Home
                    </Text>
                  </Flex>
                </li>
                <li className="navigation-list__item">
                  <Flex
                    py={2}
                    as={Link}
                    href={'/all-projects'}
                    justify={'space-between'}
                    align={'center'}
                    _hover={{
                      textDecoration: 'none',
                    }}
                  >
                    <Text fontWeight={600} color={useColorModeValue('gray.600', 'gray.200')}>
                      Browse Projects
                    </Text>
                  </Flex>
                </li>
              </ul>
            </Box>
          </nav>
        </header>
      </Box>
    </>
  );
}

const DesktopNav = () => {
  return (
    <Stack direction={'row'} spacing={4}>
      {NAV_ITEMS.map((navItem) => (
        <Box key={navItem.label}>
          <Link href={navItem.href ?? '#'}>
            <ChakraLink
              p={2}
              fontSize={'sm'}
              fontWeight={600}
              color={'white'}
              _hover={{
                textDecoration: 'none',
                color: 'whiteAlpha.700',
              }}
            >
              {navItem.label}
            </ChakraLink>
          </Link>
        </Box>
      ))}
    </Stack>
  );
};

interface NavItem {
  label: string;
  subLabel?: string;
  children?: Array<NavItem>;
  href?: string;
}

const NAV_ITEMS: Array<NavItem> = [
  {
    label: 'Home',
    href: '/',
  },
  {
    label: 'Browse Projects',
    href: '/all-projects',
  },
];
