import { Heading } from '@chakra-ui/react';
import { FC, useContext } from 'react';

import { NavbarCtx } from '@/context/navbar/NavbarCtx';

export const Cart: FC = () => {
  const { cart } = useContext(NavbarCtx);

  console.log(cart);

  return <Heading>Tu carrito</Heading>;
};
