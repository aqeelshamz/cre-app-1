import React, {useEffect, useState} from 'react';
import {StyleSheet, View, Text, Dimensions, Button, Image} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {SafeAreaView} from 'react-native-safe-area-context';
import creLogoWhite from '../icons/creLogoWhite.png';
import notificationIconWhite from '../icons/white/notifications.png';

const DashboardScreen = () => {
  return (
    // <>
    //   <View style={styles.container}>
    // <LinearGradient
    //   colors={['#2e9869', '#4BDC7B']}
    //   style={styles.linearGradient}></LinearGradient>
    //     <View style={styles.another}></View>
    //     <Text>Hello</Text>
    //   </View>
    // </>
    <>
      <SafeAreaView style={styles.container}>
        <LinearGradient
          colors={['#2e9869', '#4BDC7B']}
          style={styles.topGreenContainer}></LinearGradient>
        <View style={styles.bottomContainer} />
        <View style={styles.actualContainer}>
          <View>
            <Image
              style={{
                // backgroundColor: 'black',
                resizeMode: 'contain',
                height: 55,
              }}
              source={creLogoWhite}
            />
            <Text>Dashboard</Text>
            <Image
              style={{
                // backgroundColor: 'black',
                resizeMode: 'contain',
                height: 55,
              }}
              source={notificationIconWhite}
            />
          </View>
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  topGreenContainer: {
    flex: 1,
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
  },
  bottomContainer: {
    flex: 2,
  },
  actualContainer: {
    flex: 1,
    backgroundColor: 'blue',
    // position: 'absolute',
    // width: '100%',
    // height: '100%',
    // // backgroundColor: 'blue',
    // marginTop: 50,
    // // justifyContent: 'center',
    // alignItems: 'center',
  },
});

export default DashboardScreen;
