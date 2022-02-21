import NextLink from 'next/link';
import { FC } from 'react';

interface IProps {
  href: string;
}

export const Link: FC<IProps> = ({ href, children }) => {
  return (
    <NextLink href={href}>
      <a>{children}</a>
    </NextLink>
  );
};
