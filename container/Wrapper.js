import { StyleSheet, View } from 'react-native';
import React from 'react';

const Wrapper = ({ children }) => {
  return <View style={styles.container}>{children}</View>;
};

export default Wrapper;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 12,
  },
});
