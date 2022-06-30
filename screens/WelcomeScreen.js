import {Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const WelcomeScreen = ({navigation}) => {
  const buttonNavigateHandler = () => {
    navigation.navigate('Profile');
  };

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>WelcomeScreen</Text>
      </View>
      <Pressable
        android_ripple={{color: '#ccc'}}
        style={({pressed}) => [pressed ? styles.buttonPressed : null]}
        onPress={buttonNavigateHandler}>
        <View style={styles.innerContainer}>
          <Text style={styles.title}>Open Profile</Text>
        </View>
      </Pressable>
    </View>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 24,
  },
  titleContainer: {
    padding: 14,
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
  title: {
    fontWeight: 'bold',
    fontSize: 18,
    textAlign: 'center',
  },
});
