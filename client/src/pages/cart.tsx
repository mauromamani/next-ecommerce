import { Box } from '@chakra-ui/react';
import { NextPage } from 'next';

import { Cart } from '@/components/cart';

const CartPage: NextPage = () => {
  return (
    <Box backgroundColor={'gray.100'}>
      <Cart />
    </Box>
  );
};

export default CartPage;
