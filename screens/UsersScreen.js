import React from 'react';
import { Box, FlatList } from 'native-base';

import Wrapper from '../container/Wrapper';
import Input from '../components/Input';
import ListItem from '../components/Users/ListItem';

let timeoutId;

const debounce = (func, delay) => {
  return (...args) => {
    if (timeoutId) {
      clearInterval(timeoutId);
    }
    timeoutId = setTimeout(() => {
      func.apply(null, args);
    }, delay);
  };
};

const UsersScreen = () => {
  const [allUsers, setAllUsers] = React.useState('');
  const [since, setSince] = React.useState(0);
  const [userSearch, setUserSearch] = React.useState('');

  React.useEffect(() => {
    if (userSearch.length < 1) {
      setAllUsers('');
      getUsers(0);
    }
  }, [getUsers, userSearch.length]);

  React.useEffect(() => {
    if (since > 0) {
      getUsers(since);
    }
  }, [getUsers, since]);

  const listItemHandler = () => console.log("I'm Pressed"); // navigation

  const getUsers = React.useCallback(() => {
    console.log('called getUsers !!!!');
    fetch(`https://api.github.com/users?since=${since}&per_page=`, {
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
    console.log('called searchUserHandler !!!!', userName);
    fetch(`https://api.github.com/search/users?q=${userName}+in:user`, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-type': 'application/json',
      },
    })
      .then(response => response.json())
      .then(data => setAllUsers(data?.items))
      .catch(error => console.error(error));
  };

  const handleChangeInput = text => {
    setUserSearch(text); // async state
    if (text) {
      debounce(searchUserHandler, 500)(text);
    }
  };

  const lastItem = React.useMemo(
    () => allUsers.length && allUsers[allUsers.length - 1].id,
    [allUsers],
  );

  return (
    <Wrapper>
      <Input
        placeholder="Users"
        handleChange={handleChangeInput}
        value={userSearch}
      />
      <Box py="2" flex={1}>
        {allUsers.length ? (
          <FlatList
            data={allUsers}
            renderItem={({ item }) => (
              <ListItem item={item} onPress={listItemHandler} />
            )}
            onEndReached={() => !userSearch && setSince(lastItem)}
            keyExtractor={item => item.id}
          />
        ) : (
          <ListItem>No user found :(</ListItem>
        )}
      </Box>
    </Wrapper>
  );
};

export default UsersScreen;