import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

const ExamScreen = () => {
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.headline}>ExamScreen screen</Text>
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

export default ExamScreen;
