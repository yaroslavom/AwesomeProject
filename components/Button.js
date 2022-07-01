import { StyleSheet, Pressable, Text, View } from 'react-native';
import React from 'react';

const Button = ({ onPressHandler, children }) => {
  return (
    <Pressable
      android_ripple={{ color: '#ccc' }}
      style={({ pressed }) => [pressed ? styles.buttonPressed : null]}
      onPress={onPressHandler}>
      <View style={styles.innerContainer}>
        <Text style={styles.title}>{children}</Text>
      </View>
    </Pressable>
  );
};

export default Button;

const styles = StyleSheet.create({
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
