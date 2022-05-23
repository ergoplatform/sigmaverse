import {
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  Collapse,
  Popover,
  PopoverTrigger,
  useColorModeValue,
  useDisclosure,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import { FaPlus } from 'react-icons/fa';

import Link from 'next/link';

export default function Header() {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Box>
      <Flex
        color={useColorModeValue('gray.600', 'white')}
        minH={'60px'}
        py={{ base: 2 }}
        borderBottom={1}
        borderStyle={'solid'}
        borderColor={useColorModeValue('gray.200', 'gray.900')}
        align={'center'}
      >
        <Flex
          flex={{ base: 1, md: 'auto' }}
          ml={{ base: -2 }}
          display={{ base: 'flex', md: 'none' }}
        >
          <IconButton
            onClick={onToggle}
            icon={isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />}
            variant={'ghost'}
            aria-label={'Toggle Navigation'}
          />
        </Flex>
        <Flex flex={{ base: 1 }} justify={{ base: 'center', md: 'start' }} align="center">
          <Link href="/">
            <img src="/images/logo_new.svg" alt="Logotype" />
          </Link>

          <Flex display={{ base: 'none', md: 'flex' }} ml={10}>
            <DesktopNav />
          </Flex>
        </Flex>

        {/* <Stack flex={{ base: 1, md: 0 }} justify={'flex-end'} direction={'row'} spacing={6}>
          <Button
            display={{ base: 'none', md: 'inline-flex' }}
            fontSize={'sm'}
            fontWeight={600}
            color={'white'}
            bg={'purple.400'}
            href={'#'}
            _hover={{
              bg: 'purple.300',
            }}
            leftIcon={<FaPlus />}
          >
            Add your dApp
          </Button>
        </Stack> */}
      </Flex>
      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>
    </Box>
  );
}

const DesktopNav = () => {
  const linkColor = useColorModeValue('gray.600', 'gray.200');
  const linkHoverColor = useColorModeValue('gray.800', 'white');

  return (
    <Stack direction={'row'} spacing={4}>
      {NAV_ITEMS.map((navItem) => (
        <Box key={navItem.label}>
          <Popover trigger={'hover'} placement={'bottom-start'}>
            <PopoverTrigger>
              <Link
                p={2}
                href={navItem.href ?? '#'}
                fontSize={'sm'}
                fontWeight={500}
                color={linkColor}
                _hover={{
                  textDecoration: 'none',
                  color: linkHoverColor,
                }}
              >
                {navItem.label}
              </Link>
            </PopoverTrigger>
          </Popover>
        </Box>
      ))}
    </Stack>
  );
};

const MobileNav = () => {
  return (
    <Stack p={4} display={{ md: 'none' }}>
      {NAV_ITEMS.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
    </Stack>
  );
};

const MobileNavItem = ({ label, children, href }: NavItem) => {
  const { onToggle } = useDisclosure();

  return (
    <Stack spacing={4} onClick={children && onToggle}>
      <Flex
        py={2}
        as={Link}
        href={href ?? '#'}
        justify={'space-between'}
        align={'center'}
        _hover={{
          textDecoration: 'none',
        }}
      >
        <Text fontWeight={600} color={useColorModeValue('gray.600', 'gray.200')}>
          {label}
        </Text>
      </Flex>
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

// import React, { useRef } from 'react';
// import classNames from 'classnames';
// import { useSidebar } from '../../hooks/useSideBar';
// import Link from 'next/link';

// export default function Header() {
//   const sideBarRef = useRef(null);
//   let { isOpen, open, close } = useSidebar(sideBarRef);
//   return (
//     <div>
//       <header>
//         <nav className={classNames('navigation', { 'navigation--open': isOpen })}>
//           <button className="navigation__toggle" onClick={() => open()}>
//             <img src="/images/icons/burger-menu.svg" alt="Burger" />
//           </button>
//           <div className="navigation__logo">
//             <Link href="/">
//               <img src="/images/logo_new.svg" alt="Logotype" />
//             </Link>
//           </div>
//           <button className="navigation__close" onClick={() => close()}>
//             <img src="/images/icons/close.svg" alt="Close" />
//           </button>
//           <ul ref={sideBarRef} className="navigation-list">
//             <li className="navigation-list__item">
//               <a
//                 href="https://ergoplatform.org/en/blog/2020-12-08-ergo-headless-dapp-framework-now-available/"
//                 target="_blank"
//                 className="navigation-list__link"
//               >
//                 About DApp Framework
//               </a>
//             </li>
//             <li className="navigation-list__item">
//               <a
//                 href="https://github.com/ergoplatform/sigmaverse"
//                 target="_blank"
//                 className="button"
//               >
//                 Add New DApp
//               </a>
//             </li>
//           </ul>
//         </nav>
//       </header>
//     </div>
//   );
// }
