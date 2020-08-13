import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

const AcademicsScreen = () => {
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.headline}>AcademicsScreen screen</Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default AcademicsScreen;
