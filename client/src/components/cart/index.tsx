import { Box, Button, Divider, Heading } from '@chakra-ui/react';
import { FC, useContext } from 'react';

import { NavbarCtx } from '@/context/navbar/NavbarCtx';
import { getTotalCart } from '@/utils/getTotalCart';

import { CartProduct } from './cartProduct';

export const Cart: FC = () => {
  const { cart } = useContext(NavbarCtx);

  return (
    <Box color={'gray.700'} pb="8">
      <Heading fontWeight="black" mb={'8'}>
        Tu Carrito ({cart.length})
      </Heading>

      {cart.map((p) => (
        <CartProduct key={p.id} {...p} />
      ))}

      {!!cart.length && (
        <>
          <Divider my="4" />
          <Box>
            <Heading fontSize={'2xl'}>Total Carrito: ${getTotalCart(cart)}</Heading>
            <Button colorScheme={'green'} mt="4">
              Comprar Ahora
            </Button>
          </Box>
        </>
      )}
    </Box>
  );
};
