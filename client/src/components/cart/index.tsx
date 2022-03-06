import { Box, Heading } from '@chakra-ui/react';
import { FC, useContext } from 'react';

import { NavbarCtx } from '@/context/navbar/NavbarCtx';

import { CartProduct } from './cartProduct';

export const Cart: FC = () => {
  const { cart } = useContext(NavbarCtx);

  return (
    <Box>
      <Heading color={'gray.700'} fontWeight="black" mb={'8'}>
        Tu Carrito ({cart.length})
      </Heading>

      {cart.map((p) => (
        <CartProduct key={p.id} {...p} />
      ))}
    </Box>
  );
};
