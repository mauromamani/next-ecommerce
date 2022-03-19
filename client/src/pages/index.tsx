import 'swiper/css';
import 'swiper/css/navigation';

import { Box, Heading, Image, Stack } from '@chakra-ui/react';
import { GetServerSideProps } from 'next';
import NextLink from 'next/link';
import { withUrqlClient } from 'next-urql';
import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import { ProductCard } from '@/components/products/productCard';
import { AlertMessage } from '@/components/ui/alertMessage';
import { useAllProductsQuery } from '@/graphql/@types';
import { ALL_PRODUCTS } from '@/graphql/product/product.query';
import { client, ssrCache } from '@/graphql/urql-client';

function HomePage() {
  const [{ data, error }] = useAllProductsQuery();

  if (error) {
    return (
      <AlertMessage
        status="error"
        title="Ocurrió un Error!"
        description="Contacte con el administrador del sitio"
      />
    );
  }
  return (
    <Box padding="12" paddingTop={{ base: '0', md: '8' }} backgroundColor="gray.100">
      <Stack direction={['row']} spacing="10" padding={10}>
        <Box
          position={'relative'}
          transitionProperty="all"
          transitionDuration="300ms"
          transitionTimingFunction="ease"
          _hover={{ opacity: '0.9', shadow: 'xl', cursor: 'pointer' }}>
          <NextLink href="/products">
            <Image src="https://cdn.shopify.com/s/files/1/0046/2452/t/7/assets/promo1.jpg?v=17771038893842288667" />
          </NextLink>
          <Heading position={'absolute'} top="40%" right="40%" color={'white'}>
            Hombres
          </Heading>
        </Box>
        <Box
          position={'relative'}
          transitionProperty="all"
          transitionDuration="300ms"
          transitionTimingFunction="ease"
          _hover={{ opacity: '0.9', shadow: 'xl', cursor: 'pointer' }}>
          <NextLink href="/products">
            <Image src="https://cdn.shopify.com/s/files/1/0046/2452/t/7/assets/promo2.jpg?v=8958659307121583012" />
          </NextLink>
          <Heading position={'absolute'} top="40%" right="40%" color={'white'}>
            Mujeres
          </Heading>
        </Box>
      </Stack>

      <Swiper
        spaceBetween={20}
        // slidesPerView={2}
        modules={[Navigation]}
        navigation={true}
        breakpoints={{
          500: {
            width: 500,
            slidesPerView: 1,
          },
          800: {
            width: 800,
            slidesPerView: 2,
          },
        }}>
        {data?.getAllProducts.map((product) => (
          <SwiperSlide key={product.id}>
            <ProductCard {...product} />
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  await client?.query(ALL_PRODUCTS).toPromise();

  return {
    props: {
      urqlState: ssrCache.extractData(),
    },
  };
};

export default withUrqlClient(
  () => ({
    url: 'http://localhost:3000',
  }),
  { ssr: false, neverSuspend: true },
)(HomePage);
