import { Box } from '@chakra-ui/react';
import { FC } from 'react';

import { Drawer } from '@/components/drawer';
import { Navbar } from '@/components/navbar';

interface IProps {}

export const Layout: FC<IProps> = ({ children }) => {
  return (
    <Box backgroundColor={'gray.100'} height="100vh">
      <Navbar />
      {children}
      <Drawer />
    </Box>
  );
};
