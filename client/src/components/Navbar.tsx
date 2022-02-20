import { Box, Heading, Link, Stack } from '@chakra-ui/react';
import NextLink from 'next/link';
import { MdSearch, MdShoppingCart } from 'react-icons/md';

export const NavBar = () => {
  return (
    <Box
      display={'flex'}
      justifyContent={'space-between'}
      paddingX={'20'}
      paddingTop={'2'}>
      <Box>
        <NextLink href={'/'}>
          <Link _hover={{ textDecoration: 'none' }}>
            <Heading size={'lg'}>E-commerce</Heading>
          </Link>
        </NextLink>
      </Box>
      <Stack direction={['row']} spacing="4">
        <Box>
          <MdSearch size={'30px'} />
        </Box>
        <Box>
          <NextLink href={'/cart'}>
            <Link>
              <MdShoppingCart size={'30px'} />
            </Link>
          </NextLink>
        </Box>
      </Stack>
    </Box>
  );
};
