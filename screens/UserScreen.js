import { StyleSheet } from 'react-native';
import React from 'react';
import Wrapper from '../container/Wrapper';
import Input from '../components/Input';

const UserScreen = () => {
  const [userFound, setUserFound] = React.useState('');

  const handleChangeInput = text => setUserFound(text);

  return (
    <Wrapper>
      <Input
        placeholder="Users"
        handleChange={handleChangeInput}
        value={userFound}
      />
    </Wrapper>
  );
};

export default UserScreen;

const styles = StyleSheet.create({});
