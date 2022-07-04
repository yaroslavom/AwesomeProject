import React from 'react';
import { Box, Avatar, Center, Heading, Text, Link, HStack } from 'native-base';
import SimpleIcon from 'react-native-vector-icons/SimpleLineIcons';

const ProfileHeader = ({
  avatar,
  name,
  followers,
  following,
  blog,
  location,
  bio,
}) => {
  return (
    <Center pt="2">
      <Avatar
        size="300"
        source={{
          uri: avatar,
        }}
        borderWidth="2"
        borderColor="gray.300"
      />
      <Box minWidth="220">
        <Heading textAlign="center" py="2" size="md">
          {name}
        </Heading>
        <HStack space={2} justifyContent="space-between">
          <Box flexDirection="row" alignItems="center">
            <SimpleIcon name="user-follow" size={14} color="gray.300" />
            <Text p="1" color="coolGray.800" bold>
              {followers}
            </Text>
          </Box>
          <Box flexDirection="row" alignItems="center">
            <SimpleIcon name="user-following" size={14} color="gray.300" />
            <Text p="1" color="coolGray.800" bold>
              {following}
            </Text>
          </Box>
        </HStack>
        {bio && (
          <Box flexDirection="row" alignItems="center">
            <SimpleIcon name="paper-clip" size={14} color="gray.300" />
            <Text p="1" color="coolGray.800" bold>
              {bio}
            </Text>
          </Box>
        )}
        {blog && (
          <Box flexDirection="row" alignItems="center">
            <SimpleIcon name="link" size={14} color="gray.300" />
            <Link href={blog}>
              <Text p="1" underline color="coolGray.800" bold>
                {blog}
              </Text>
            </Link>
          </Box>
        )}
        {location && (
          <Box flexDirection="row" alignItems="center">
            <SimpleIcon name="location-pin" size={14} color="gray.300" />
            <Text p="1" color="coolGray.800" bold>
              {location}
            </Text>
          </Box>
        )}
      </Box>
    </Center>
  );
};

export default ProfileHeader;
