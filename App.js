import 'react-native-gesture-handler';
import React, {useState} from 'react';
import {Text, View, Image} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import DashboardScreen from './screens/DashboardScreen';
import AcademicsScreen from './screens/AcademicsScreen';
import MyCreScreen from './screens/MyCreScreen';
import ExamScreen from './screens/ExamScreen';
import ProfileScreen from './screens/ProfileScreen';
import LoadingScreen from './screens/LoadingScreen';
import DashIconGreen from './assets/icons/green/dashboard.png';
import NotesIconGreen from './assets/icons/green/notes.png';
import ScholarIconGreen from './assets/icons/green/scholar.png';
import AssignmentIconGreen from './assets/icons/green/assignment.png';
import ProfileIconGreen from './assets/icons/green/profile.png';

const Tab = createBottomTabNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Tab.Navigator
                tabBarOptions={{
                    tabStyle: {borderTopWidth: 0},
                    style: {
                        borderTopWidth: 0,
                        height: 55,
                    },
                    showLabel: false,
                }}>
                <Tab.Screen
                    options={{
                        tabBarIcon: ({focused}) =>
                            !focused ? (
                                <Image
                                    source={DashIconGreen}
                                    style={{
                                        width: 45,
                                        height: 45,
                                    }}
                                />
                            ) : (
                                <View
                                    style={{
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                    }}>
                                    <Image
                                        source={DashIconGreen}
                                        style={{
                                            width: 60,
                                            height: 60,
                                            marginTop: -15,
                                            marginBottom: -10,
                                        }}
                                    />
                                    <View
                                        style={{
                                            width: 10,
                                            height: 10,
                                            borderRadius: 10 / 2,
                                            backgroundColor: '#32B44A',
                                        }}
                                    />
                                </View>
                            ),
                    }}
                    name="Dashboard"
                    component={DashboardScreen}
                />
                <Tab.Screen
                    options={{
                        tabBarIcon: ({focused}) =>
                            !focused ? (
                                <Image
                                    source={NotesIconGreen}
                                    style={{
                                        width: 45,
                                        height: 45,
                                    }}
                                />
                            ) : (
                                <View
                                    style={{
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                    }}>
                                    <Image
                                        source={NotesIconGreen}
                                        style={{
                                            width: 60,
                                            height: 60,
                                            marginTop: -15,
                                            marginBottom: -10,
                                        }}
                                    />
                                    <View
                                        style={{
                                            width: 10,
                                            height: 10,
                                            borderRadius: 10 / 2,
                                            backgroundColor: '#32B44A',
                                        }}
                                    />
                                </View>
                            ),
                    }}
                    name="Academics"
                    component={AcademicsScreen}
                />
                <Tab.Screen
                    options={{
                        tabBarIcon: ({focused}) =>
                            !focused ? (
                                <Image
                                    source={ScholarIconGreen}
                                    style={{
                                        width: 45,
                                        height: 45,
                                    }}
                                />
                            ) : (
                                <View
                                    style={{
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                    }}>
                                    <Image
                                        source={ScholarIconGreen}
                                        style={{
                                            width: 60,
                                            height: 60,
                                            marginTop: -15,
                                            marginBottom: -10,
                                        }}
                                    />
                                    <View
                                        style={{
                                            width: 10,
                                            height: 10,
                                            borderRadius: 10 / 2,
                                            backgroundColor: '#32B44A',
                                        }}
                                    />
                                </View>
                            ),
                    }}
                    name="MyCre"
                    component={MyCreScreen}
                />
                <Tab.Screen
                    options={{
                        tabBarIcon: ({focused}) =>
                            !focused ? (
                                <Image
                                    source={AssignmentIconGreen}
                                    style={{
                                        width: 45,
                                        height: 45,
                                    }}
                                />
                            ) : (
                                <View
                                    style={{
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                    }}>
                                    <Image
                                        source={AssignmentIconGreen}
                                        style={{
                                            width: 60,
                                            height: 60,
                                            marginTop: -15,
                                            marginBottom: -10,
                                        }}
                                    />
                                    <View
                                        style={{
                                            width: 10,
                                            height: 10,
                                            borderRadius: 10 / 2,
                                            backgroundColor: '#32B44A',
                                        }}
                                    />
                                </View>
                            ),
                    }}
                    name="Exam"
                    component={ExamScreen}
                />
                <Tab.Screen
                    options={{
                        tabBarIcon: ({focused}) =>
                            !focused ? (
                                <Image
                                    source={ProfileIconGreen}
                                    style={{
                                        width: 45,
                                        height: 45,
                                    }}
                                />
                            ) : (
                                <View
                                    style={{
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                    }}>
                                    <Image
                                        source={ProfileIconGreen}
                                        style={{
                                            width: 60,
                                            height: 60,
                                            marginTop: -15,
                                            marginBottom: -10,
                                        }}
                                    />
                                    <View
                                        style={{
                                            width: 10,
                                            height: 10,
                                            borderRadius: 10 / 2,
                                            backgroundColor: '#32B44A',
                                        }}
                                    />
                                </View>
                            ),
                    }}
                    name="Profile"
                    component={ProfileScreen}
                />
            </Tab.Navigator>
        </NavigationContainer>
    );
}
