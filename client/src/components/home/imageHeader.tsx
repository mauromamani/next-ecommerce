import { Box, Heading, Image } from '@chakra-ui/react';
import NextLink from 'next/link';
import { FC } from 'react';

interface Props {
  image: string;
  title: string;
  href: string;
}

export const ImageHeader: FC<Props> = ({ image, title, href }) => {
  return (
    <Box
      transitionProperty="all"
      transitionDuration="300ms"
      transitionTimingFunction="ease"
      _hover={{ opacity: '0.9', shadow: 'xl', cursor: 'pointer' }}>
      <Box position={'relative'} width="100%">
        <NextLink href={href}>
          <Image src={image} width="100%" />
        </NextLink>
        <Heading
          position={'absolute'}
          top="40%"
          right="40%"
          color={'white'}
          fontSize={{ base: '3xl', md: '4xl' }}>
          {title}
        </Heading>
      </Box>
    </Box>
  );
};
