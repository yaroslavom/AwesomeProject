import React, { useEffect, useLayoutEffect, useState } from 'react';
import { ScrollView } from 'react-native';

import Wrapper from '../container/Wrapper';
import Spinner from '../components/Spinner';
import ProfileHeader from '../components/Profile/ProfileHeader';

const ProfileScreen = ({ route, navigation }) => {
  const [user, setUser] = useState('');
  const { userLogin } = route.params;
  useLayoutEffect(() => {
    navigation.setOptions({
      title: userLogin,
    });
  }, [navigation, userLogin]);

  useEffect(() => {
    getUser(userLogin);
  }, [getUser, userLogin]);

  console.log(user);

  const getUser = React.useCallback(() => {
    console.log('called getUser !!!!');
    fetch(`https://api.github.com/users/${userLogin}`, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-type': 'application/json',
      },
    })
      .then(response => response.json())
      .then(data => setUser(data))
      .catch(error => console.error(error));
  }, [userLogin]);

  return (
    <Wrapper>
      <ScrollView>
        {!user ? (
          <Spinner>Loading</Spinner>
        ) : (
          <ProfileHeader
            avatar={user.avatar_url}
            name={user.name}
            followers={user.followers}
            following={user.following}
            blog={user.blog}
            location={user.location}
            bio={user.bio}
          />
        )}
      </ScrollView>
    </Wrapper>
  );
};

export default ProfileScreen;
