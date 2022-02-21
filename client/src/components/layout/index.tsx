import { Box } from '@chakra-ui/react';
import { FC } from 'react';

import { Navbar } from '@/components/navbar';

interface IProps {}

export const Layout: FC<IProps> = ({ children }) => {
  return (
    <Box backgroundColor={'gray.100'}>
      <Navbar />
      {children}
    </Box>
  );
};
