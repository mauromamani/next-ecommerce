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
      position={'relative'}
      transitionProperty="all"
      transitionDuration="300ms"
      transitionTimingFunction="ease"
      _hover={{ opacity: '0.9', shadow: 'xl', cursor: 'pointer' }}>
      <NextLink href={href}>
        <Image src={image} />
      </NextLink>
      <Heading position={'absolute'} top="40%" right="40%" color={'white'}>
        {title}
      </Heading>
    </Box>
  );
};
