import { Link as L } from '@chakra-ui/react';
import NextLink from 'next/link';
import { FC } from 'react';

interface IProps {
  href: string;
}

export const Link: FC<IProps> = ({ href, children }) => {
  return (
    <NextLink href={href}>
      <L _hover={{ textColor: 'gray.700' }}>{children}</L>
    </NextLink>
  );
};
