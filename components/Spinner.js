import { HStack, Heading, Spinner as Loader } from 'native-base';
import React from 'react';

const Spinner = ({ children }) => {
  return (
    <HStack space={2} justifyContent="center">
      <Loader accessibilityLabel="Loading posts" />
      {children && (
        <Heading color="primary.500" fontSize="md">
          {children}
        </Heading>
      )}
    </HStack>
  );
};

export default Spinner;
