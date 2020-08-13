import 'react-native-gesture-handler';
import React from 'react';
import {Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import DashboardScreen from './screens/DashboardScreen';
import AcademicsScreen from './screens/AcademicsScreen';
import MyCreScreen from './screens/MyCreScreen';
import ExamScreen from './screens/ExamScreen';
import ProfileScreen from './screens/ProfileScreen';
import LoadingScreen from './screens/LoadingScreen';
import DashIcon from './icons/green/dashboard.png';
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Dashboard" component={DashboardScreen} />
        <Tab.Screen name="Academics" component={AcademicsScreen} />
        <Tab.Screen name="MyCre" component={MyCreScreen} />
        <Tab.Screen name="Exam" component={ExamScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
