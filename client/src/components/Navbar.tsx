import { Box, Heading, Link, Stack } from '@chakra-ui/react';
import NextLink from 'next/link';
import { MdSearch, MdShoppingCart } from 'react-icons/md';

export const NavBar = () => {
  return (
    <Box
      display={'flex'}
      justifyContent={'space-between'}
      alignItems={'center'}
      paddingX={{ base: '4', sm: '6', md: '8' }}
      paddingTop={'2'}>
      <Box>
        <NextLink href={'/'}>
          <Link _hover={{ textDecoration: 'none' }}>
            <Heading size={'md'} fontWeight="light">
              E-commerce
            </Heading>
          </Link>
        </NextLink>
      </Box>

      <Stack
        direction={['row']}
        spacing="2"
        textColor={'gray.600'}
        display={{ base: 'none', md: 'inline-flex' }}>
        <NextLink href={'/products'}>
          <Link>
            <Heading size={'sm'} fontWeight="semibold">
              Hombres
            </Heading>
          </Link>
        </NextLink>
        <NextLink href={'/products'}>
          <Link>
            <Heading size={'sm'} fontWeight="semibold">
              Mujeres
            </Heading>
          </Link>
        </NextLink>
      </Stack>

      <Stack direction={['row']} spacing="4" alignItems="center" textColor={'gray.600'}>
        <Box display={{ base: 'none', sm: 'block' }}>
          <MdSearch size={'30px'} />
        </Box>
        <Box>
          <NextLink href={'/cart'}>
            <Link>
              <MdShoppingCart size={'30px'} />
            </Link>
          </NextLink>
        </Box>
        <Box>
          <Box cursor={'pointer'} fontWeight="semibold">
            Menu
          </Box>
        </Box>
      </Stack>
    </Box>
  );
};
