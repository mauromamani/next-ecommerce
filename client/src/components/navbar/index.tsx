import { Box, Button, Heading, Stack, Tooltip } from '@chakra-ui/react';
import { MdSearch, MdShoppingCart } from 'react-icons/md';

import { Link } from './Link';

export const Navbar = () => {
  return (
    <Box
      display={'flex'}
      justifyContent={'space-between'}
      alignItems={'center'}
      paddingX={{ base: '4', sm: '6', md: '8' }}
      paddingY={'2'}>
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

      <Stack direction={['row']} alignItems="center" textColor={'gray.600'}>
        <Box display={{ base: 'none', sm: 'block' }}>
          <Tooltip label="Busca un producto">
            <Button>
              <MdSearch size={'30px'} />
            </Button>
          </Tooltip>
        </Box>
        <Box>
          <Tooltip label="Carrito">
            <Button>
              <MdShoppingCart size={'30px'} />
            </Button>
          </Tooltip>
        </Box>
        <Box>
          <Button colorScheme={'gray'} variant={'ghost'}>
            Menu
          </Button>
        </Box>
      </Stack>
    </Box>
  );
};
