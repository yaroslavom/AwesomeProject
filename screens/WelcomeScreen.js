import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Wrapper from '../container/Wrapper';

const WelcomeScreen = ({ navigation }) => {
  const buttonNavigateHandler = () => {
    navigation.navigate('Profile');
  };

  return (
    <Wrapper>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={require('../assets/awesome.png')} />
      </View>
      <Pressable
        android_ripple={{ color: '#ccc' }}
        style={({ pressed }) => [pressed ? styles.buttonPressed : null]}
        onPress={buttonNavigateHandler}>
        <View style={styles.innerContainer}>
          <Text style={styles.title}>Open Profile</Text>
        </View>
      </Pressable>
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
  titleContainer: {
    padding: 14,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18,
    textAlign: 'center',
  },
  buttonPressed: {
    opacity: 0.7,
  },
  innerContainer: {
    padding: 16,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    backgroundColor: '#dc3',
  },
});
