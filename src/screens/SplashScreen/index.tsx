import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export const SplashScreen: React.FC = () => {
  return (
    <View style={styles.splashContainer}>
      <Text style={styles.textStyle}>Code Challenge</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  splashContainer: {
    flex: 1,
    backgroundColor: 'White',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textStyle: {
    fontSize: 25,
    fontWeight: '700',
    color: 'black',
  },
});
