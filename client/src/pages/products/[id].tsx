import { Box, Heading, Image, Text } from '@chakra-ui/react';
import { GetServerSideProps, NextPage } from 'next';
import { withUrqlClient } from 'next-urql';

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

  console.log(data);

  return (
    <Box
      display={'flex'}
      justifyContent="space-between"
      flexDirection={{ base: 'column', md: 'row' }}
      paddingX="6"
      paddingTop={'8'}
      backgroundColor="gray.100">
      <Box w={'400px'} h={'600px'}>
        <Image src={data?.getProductById.img} />
      </Box>
      <Box w="40%">
        <Heading>{data?.getProductById.title}</Heading>
        <Text>{data?.getProductById.description}</Text>
        <Heading>${data?.getProductById.price}</Heading>
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
