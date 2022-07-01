import { StyleSheet } from 'react-native';
import React from 'react';
import Wrapper from '../container/Wrapper';
import Input from '../components/Input';
import Button from '../components/Button';

const UserScreen = () => {
  const [allUsers, setAllUsers] = React.useState('');
  const [since, setSince] = React.useState(0);
  const [usersFound, setUsersFound] = React.useState('');
  const [userSearch, setUserSearch] = React.useState('');

  console.log(usersFound, 'users found');
  console.log(allUsers.length, 'all Users length');

  React.useEffect(() => {
    getUsers();
  }, [getUsers]);

  const handleChangeInput = text => setUserSearch(text);

  const getUsers = React.useCallback(
    (since = 0) => {
      console.log('called getUsers !!!!');
      fetch(`https://api.github.com/users?since=${since}&per_page=30`, {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-type': 'application/json',
        },
      })
        .then(response => response.json())
        .then(data => setAllUsers(prevData => [...prevData, ...data]))
        .catch(error => console.error(error));
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [since],
  );

  const searchUserHandler = userName => {
    console.log('called searchUserHandler !!!!');
    fetch(`https://api.github.com/search/users?q=${userName}+in:user`, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-type': 'application/json',
      },
    })
      .then(response => response.json())
      .then(data => setUsersFound(data?.items))
      .catch(error => console.error(error));
  };

  return (
    <Wrapper>
      <Input
        placeholder="Users"
        handleChange={handleChangeInput}
        value={userSearch}
      />
      <Button onPressHandler={() => searchUserHandler(userSearch)}>
        Search User
      </Button>
    </Wrapper>
  );
};

export default UserScreen;

const styles = StyleSheet.create({});
