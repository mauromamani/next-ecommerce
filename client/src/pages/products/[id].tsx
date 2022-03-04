import { Box, Button, Heading, Image, Text } from '@chakra-ui/react';
import { GetServerSideProps, NextPage } from 'next';
import { withUrqlClient } from 'next-urql';
import { MdAddShoppingCart } from 'react-icons/md';

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
        <Heading fontSize={{ base: 'xl', md: '3xl' }}>
          {data?.getProductById.title}
        </Heading>
        <Text marginY={'1rem'}>{data?.getProductById.description}</Text>
        <Heading>${data?.getProductById.price}</Heading>
        <Button
          leftIcon={<MdAddShoppingCart size={'20'} />}
          colorScheme={'teal'}
          mt="5"
          boxShadow={'md'}>
          Agregar al carrito
        </Button>
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
