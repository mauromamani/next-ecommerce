import { Alert, AlertDescription, AlertIcon, AlertTitle, Box } from '@chakra-ui/react';
import { FC } from 'react';

interface Props {
  status: 'error' | 'info' | 'success' | 'warning';
  title: string;
  description: string;
}

export const AlertMessage: FC<Props> = ({ status, title, description }) => {
  return (
    <Box padding={'10'}>
      <Alert status={status}>
        <AlertIcon />
        <AlertTitle mr={2}>{title}</AlertTitle>
        <AlertDescription>{description}</AlertDescription>
      </Alert>
    </Box>
  );
};
