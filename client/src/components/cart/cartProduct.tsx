import { Box, Heading, Image, Text } from '@chakra-ui/react';
import { FC } from 'react';

export const CartProduct: FC = () => {
  return (
    <Box display={'flex'} justifyContent="space-between" paddingX={'4'} my="6">
      <Box display={'flex'}>
        <Image
          src="https://cdn.shopify.com/s/files/1/0051/7042/products/HAVEN-Human-Made-Crazy-Check-LS-Shirt-RED-2_480x.progressive.jpg"
          width="30"
          height="36"
          rounded="lg"
        />
        <Box ml={'4'} padding="2">
          <Heading fontSize={'md'}>Nombre</Heading>
          <Text>Quantity: 5</Text>
        </Box>
      </Box>
      <Box padding="2">
        <Text fontWeight={'bold'}>Price</Text>
      </Box>
    </Box>
  );
};
