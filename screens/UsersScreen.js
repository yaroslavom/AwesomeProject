import React, { useCallback } from 'react';
import { Box, FlatList } from 'native-base';

import Wrapper from '../container/Wrapper';
import Input from '../components/Input';
import ListItem from '../components/Users/ListItem';

import { debounce } from '../utils/debounce';
import Spinner from '../components/Spinner';

const UsersScreen = ({ navigation }) => {
  const [allUsers, setAllUsers] = React.useState('');
  const [since, setSince] = React.useState(0);
  const [userSearch, setUserSearch] = React.useState('');
  const [isLoading, setIsLoading] = React.useState(true);
  const searchDebounce = debounce(searchUserHandler, 500);

  React.useEffect(() => {
    if (userSearch.length < 1) {
      setAllUsers('');
      getUsers(0);
    }
  }, [getUsers, userSearch.length]);

  React.useEffect(() => {
    if (since > 0 && !isLoading) {
      getUsers(since);
    }
  }, [getUsers, since, isLoading]);

  const listItemHandler = useCallback(
    item => navigation.navigate('Profile', { userLogin: item }),
    [navigation],
  );

  const getUsers = useCallback(since => {
    let inception = since;
    if (typeof since !== 'number') {
      inception = 0;
    }
    console.log('called getUsers !!!!!', inception, '-since');
    fetch(`https://api.github.com/users?since=${inception}&per_page=30`)
      .then(response => response.json())
      .then(data => setAllUsers(prevData => [...prevData, ...data]))
      .catch(error => console.error(error))
      .finally(() => setIsLoading(false));
  }, []);

  function searchUserHandler(userName) {
    console.log('called searchUserHandler !!!!', userName);
    fetch(`https://api.github.com/search/users?q=${userName}+in:user`)
      .then(response => response.json())
      .then(data => setAllUsers(data?.items))
      .catch(error => console.error(error));
  }

  const refreshUsers = useCallback(() => {
    console.log('called refreshUsers !!!!');
    setIsLoading(true);
    setUserSearch('');
    fetch('https://api.github.com/search/users?q=in:user&per_page=30')
      .then(response => response.json())
      .then(data => setAllUsers(data.items))
      .catch(error => console.error(error))
      .finally(() => setIsLoading(false));
  }, []); // should reduce number of api urls, so this commit has flag - testing

  const handleChangeInput = text => {
    setUserSearch(text); // async state
    if (text) {
      searchDebounce(text);
    }
  };

  const lastItem = React.useMemo(
    () => allUsers.length && allUsers[allUsers.length - 1].id,
    [allUsers],
  );

  const renderItem = ({ item }) => (
    <ListItem item={item} onPress={listItemHandler} />
  );

  const EmptyListComponent = () => <ListItem>No user found :(</ListItem>;

  return (
    <Wrapper>
      <Input
        placeholder="Users"
        handleChange={handleChangeInput}
        value={userSearch}
      />
      <Box py="2" flex={1}>
        {isLoading && allUsers.length === 0 && <Spinner>Loading</Spinner>}
        <FlatList
          data={allUsers}
          renderItem={renderItem}
          onEndReached={() => !userSearch && setSince(lastItem)}
          ListEmptyComponent={!isLoading && EmptyListComponent}
          keyExtractor={item => item.id}
          refreshing={isLoading}
          onRefresh={refreshUsers}
        />
      </Box>
    </Wrapper>
  );
};

export default UsersScreen;
