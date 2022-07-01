import React from 'react';
import {
  Box,
  Avatar,
  HStack,
  VStack,
  Text,
  Spacer,
  Link,
  Pressable,
} from 'native-base';

const ListItem = ({ item, onPress }) => {
  return (
    <Box
      borderBottomWidth="1"
      _dark={{
        borderColor: 'gray.600',
      }}
      borderColor="coolGray.200"
      pl="4"
      pr="5"
      py="2">
      <Pressable onPress={onPress}>
        <HStack space={3} justifyContent="space-between">
          <Avatar
            size="48px"
            source={{
              uri: item.avatar_url,
            }}
          />
          <VStack>
            <Text
              _dark={{
                color: 'warmGray.50',
              }}
              color="coolGray.800"
              bold>
              {item.login}
            </Text>
            <Link href={item.html_url}>
              <Text
                color="coolGray.600"
                underline
                _dark={{
                  color: 'warmGray.200',
                }}>
                {item.html_url}
                {item.id}
              </Text>
            </Link>
          </VStack>
          <Spacer />
        </HStack>
      </Pressable>
    </Box>
  );
};

export default ListItem;
