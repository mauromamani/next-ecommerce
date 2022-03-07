import { Box, Button, Heading, Image, Text } from '@chakra-ui/react';
import { FC, useContext } from 'react';

import { NavbarCtx } from '@/context/navbar/NavbarCtx';

interface IProps {
  id: string;
  name: string;
  price: number;
  quantity: number;
  img: string;
}

export const CartProduct: FC<IProps> = ({ id, name, price, quantity, img }) => {
  const { removeCartProduct } = useContext(NavbarCtx);

  return (
    <Box display={'flex'} justifyContent="space-between" paddingX={'4'} my="6">
      <Box display={'flex'}>
        <Image
          src={img}
          width="30"
          height="36"
          rounded="md"
          boxShadow={'md'}
          draggable="false"
        />
        <Box ml={'4'} padding="2">
          <Heading fontSize={'md'}>{name}</Heading>
          <Text>Cantidad: {quantity}</Text>
          <Text>Precio: ${price}</Text>
        </Box>
      </Box>
      <Box padding="2">
        <Text fontWeight={'bold'}>Precio Total: ${price * quantity}</Text>
        <Button colorScheme={'red'} mt="3" onClick={() => removeCartProduct(id)}>
          Eliminar
        </Button>
      </Box>
    </Box>
  );
};
