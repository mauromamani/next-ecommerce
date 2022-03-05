import {
  Box,
  Button,
  Heading,
  Icon,
  Image,
  Stack,
  Text,
  Tooltip,
} from '@chakra-ui/react';
import { GetServerSideProps, NextPage } from 'next';
import { withUrqlClient } from 'next-urql';
import { useContext, useState } from 'react';
import { HiMinus, HiPlus } from 'react-icons/hi';
import { MdAddShoppingCart, MdFavorite } from 'react-icons/md';

import { NavbarCtx } from '@/context/navbar/NavbarCtx';
import { useProductByIdQuery } from '@/graphql/@types';
import { PRODUCT_BY_ID } from '@/graphql/product/product.query';
import { client, ssrCache } from '@/graphql/urql-client';

interface IProps {
  id: string;
}

const ProductDetailPage: NextPage<IProps> = ({ id }) => {
  const [{ data, error }] = useProductByIdQuery({ variables: { id } });
  const [quantity, setQuantity] = useState<number>(1);
  const { setCartProduct } = useContext(NavbarCtx);

  if (error) {
    return <p>ERROR</p>;
  }

  const handleAddCart = () => {
    const cartProduct = {
      id,
      name: data?.getProductById.title!,
      price: data?.getProductById.price!,
      quantity,
    };
    setCartProduct(cartProduct);
  };

  return (
    <Box
      display={'flex'}
      justifyContent="space-between"
      flexDirection={{ base: 'column', md: 'row' }}
      padding="12"
      paddingTop={{ base: '0', md: '8' }}
      backgroundColor="gray.100">
      <Box w={{ base: '100%', sm: '70%', md: '50%', lg: '35%' }} mr="10">
        <Image
          src={data?.getProductById.img}
          display="block"
          rounded={'md'}
          boxShadow="xl"
          draggable="false"
        />
      </Box>
      <Box
        w={{ base: '100%', md: '40%', lg: '65%' }}
        color="gray.700"
        paddingTop={{ base: '10', md: '0' }}>
        <Box
          display={'flex'}
          justifyContent="space-between"
          paddingRight={{ base: '0', lg: '10' }}>
          <Heading fontSize={{ base: '2xl', md: '3xl' }}>
            {data?.getProductById.title}
          </Heading>
          <Tooltip label="Agregar a favoritos">
            <Box rounded={'full'}>
              <Icon
                as={MdFavorite}
                w={9}
                h={9}
                _hover={{ color: 'red.900', cursor: 'pointer' }}
              />
            </Box>
          </Tooltip>
        </Box>
        <Text marginY={'1rem'}>{data?.getProductById.description}</Text>
        <Heading>${data?.getProductById.price}</Heading>

        <Box my="2">
          <Heading fontSize={'xl'} fontWeight="medium" mb="1">
            Cantidad:
          </Heading>
          <Box
            padding={2}
            display="flex"
            justifyContent={'space-between'}
            alignItems="center"
            width={{ base: '40%', lg: '20%' }}
            border={'1px'}
            borderColor="gray.300"
            rounded={'lg'}>
            <Button
              _focus={{ border: 'none' }}
              onClick={() => setQuantity((q) => q - 1)}
              disabled={quantity <= 1}>
              <Icon as={HiMinus} w={5} h={5} />
            </Button>
            <Heading fontSize={'xl'}>{quantity}</Heading>
            <Button _focus={{ border: 'none' }} onClick={() => setQuantity((q) => q + 1)}>
              <Icon as={HiPlus} w={5} h={5} />
            </Button>
          </Box>
        </Box>

        <Stack direction={['row']} mt="5" spacing={'2'}>
          <Button
            leftIcon={<MdAddShoppingCart size={'20'} />}
            colorScheme={'teal'}
            boxShadow={'md'}
            onClick={handleAddCart}>
            Agregar al carrito
          </Button>
        </Stack>
      </Box>
    </Box>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const { id } = query;

  await client?.query(PRODUCT_BY_ID, { id }).toPromise();
  return {
    props: {
      id,
      urqlState: ssrCache.extractData(),
    },
  };
};

export default withUrqlClient(
  () => ({
    url: 'http://localhost:3000',
  }),
  { ssr: false, neverSuspend: true },
)(ProductDetailPage);
