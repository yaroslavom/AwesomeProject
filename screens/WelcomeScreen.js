import { Image, StyleSheet, View } from 'react-native';
import React from 'react';
import Wrapper from '../container/Wrapper';
import Button from '../components/Button';

const WelcomeScreen = ({ navigation }) => {
  const buttonNavigateHandler = () => {
    navigation.navigate('Users');
  };

  return (
    <Wrapper>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={require('../assets/awesome.png')} />
      </View>
      <Button onPressHandler={buttonNavigateHandler}>Open Profile</Button>
    </Wrapper>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  imageContainer: {
    height: 120,
    marginVertical: 12,
  },
  image: {
    width: '100%',
    height: '100%',
  },
});
