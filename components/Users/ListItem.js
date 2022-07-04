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

const ListItem = ({ item, onPress, children }) => {
  return (
    <Box borderBottomWidth="1" borderColor="coolGray.200" pl="4" pr="5" py="2">
      <Pressable onPress={() => onPress(item.login)}>
        {item ? (
          <HStack space={3} justifyContent="space-between">
            <Avatar
              size="48px"
              source={{
                uri: item.avatar_url,
              }}
            />
            <VStack>
              <Text color="coolGray.800" bold>
                {item.login}
              </Text>
              <Link href={item.html_url}>
                <Text color="coolGray.600" underline>
                  {item.html_url}
                  {item.id}
                </Text>
              </Link>
            </VStack>
            <Spacer />
          </HStack>
        ) : (
          <Text color="coolGray.800" bold>
            {children}
          </Text>
        )}
      </Pressable>
    </Box>
  );
};

export default ListItem;
