import React from 'react';
import { Box, FlatList } from 'native-base';

import Wrapper from '../container/Wrapper';
import Input from '../components/Input';
import Button from '../components/Button';
import ListItem from '../components/Users/ListItem';

const UserScreen = () => {
  const [allUsers, setAllUsers] = React.useState('');
  const [since, setSince] = React.useState(0);
  const [usersFound, setUsersFound] = React.useState('');
  const [userSearch, setUserSearch] = React.useState('');

  console.log(usersFound, 'users found');
  console.log(allUsers.length, 'all Users length');

  React.useEffect(() => {
    getUsers(since);
  }, [getUsers, since]);

  const handleChangeInput = text => setUserSearch(text);
  const listItemHandler = () => console.log("I'm Pressed");

  const getUsers = React.useCallback(() => {
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
  }, [since]);

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

  const lastItem = React.useMemo(
    () => allUsers && allUsers[allUsers.length - 1].id,
    [allUsers],
  );

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
      <Box py="2" flex={1}>
        <FlatList
          data={allUsers}
          renderItem={({ item }) => (
            <ListItem item={item} onPress={listItemHandler} />
          )}
          onEndReached={() => setSince(since + lastItem)}
          keyExtractor={item => item.id}
        />
      </Box>
    </Wrapper>
  );
};

export default UserScreen;
