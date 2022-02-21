import { Box, Heading, Stack } from '@chakra-ui/react';
import { MdSearch, MdShoppingCart } from 'react-icons/md';

import { Link } from './Link';

export const Navbar = () => {
  return (
    <Box
      display={'flex'}
      justifyContent={'space-between'}
      alignItems={'center'}
      paddingX={{ base: '4', sm: '6', md: '8' }}
      paddingTop={'2'}>
      <Box>
        <Link href="/">
          <Heading size={'md'} fontWeight="light">
            E-commerce
          </Heading>
        </Link>
      </Box>

      <Stack
        direction={['row']}
        spacing="2"
        textColor={'gray.600'}
        display={{ base: 'none', md: 'inline-flex' }}>
        <Link href="/products">
          <Heading size={'sm'} fontWeight="semibold">
            Hombres
          </Heading>
        </Link>
        <Link href="/products">
          <Heading size={'sm'} fontWeight="semibold">
            Mujeres
          </Heading>
        </Link>
      </Stack>

      <Stack direction={['row']} spacing="4" alignItems="center" textColor={'gray.600'}>
        <Box display={{ base: 'none', sm: 'block' }}>
          <MdSearch size={'30px'} />
        </Box>
        <Box>
          <Link href="/cart">
            <MdShoppingCart size={'30px'} />
          </Link>
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
