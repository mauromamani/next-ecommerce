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
import { MdAddShoppingCart, MdFavorite } from 'react-icons/md';

import { useProductByIdQuery } from '@/graphql/@types';
import { PRODUCT_BY_ID } from '@/graphql/product/product.query';
import { client, ssrCache } from '@/graphql/urql-client';

interface IProps {
  id: string;
}

const ProductDetailPage: NextPage<IProps> = ({ id }) => {
  const [{ data, error }] = useProductByIdQuery({ variables: { id } });

  if (error) {
    return <p>ERROR</p>;
  }

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
        />
      </Box>
      <Box w={{ base: '100%', md: '40%', lg: '65%' }} color="gray.700">
        <Box display={'flex'} justifyContent="space-between" paddingRight={'10'}>
          <Heading fontSize={{ base: 'xl', md: '3xl' }}>
            {data?.getProductById.title}
          </Heading>
          <Tooltip label="Agregar a favoritos">
            <Box rounded={'full'}>
              <Icon
                as={MdFavorite}
                w={8}
                h={8}
                _hover={{ color: 'red.900', cursor: 'pointer' }}
              />
            </Box>
          </Tooltip>
        </Box>
        <Text marginY={'1rem'}>{data?.getProductById.description}</Text>
        <Heading>${data?.getProductById.price}</Heading>

        <Stack direction={['row']} mt="5" spacing={'2'}>
          <Button
            leftIcon={<MdAddShoppingCart size={'20'} />}
            colorScheme={'teal'}
            boxShadow={'md'}>
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
