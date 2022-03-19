import 'swiper/css';
import 'swiper/css/navigation';

import { Box } from '@chakra-ui/react';
import { GetServerSideProps } from 'next';
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
      <Swiper
        spaceBetween={50}
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
