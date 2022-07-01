import React from 'react';
import { Box, Input as InputComp } from 'native-base';

const Input = ({ placeholder, value, handleChange }) => {
  return (
    <Box alignItems="center">
      <InputComp
        size="xl"
        my="2"
        placeholder={placeholder}
        value={value}
        onChangeText={handleChange}
      />
    </Box>
  );
};

export default Input;
