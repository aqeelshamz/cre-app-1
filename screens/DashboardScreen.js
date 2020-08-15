import React, {useEffect, useState} from 'react';
import {
    StyleSheet,
    View,
    Text,
    Dimensions,
    Button,
    Image,
    ScrollView,
    TouchableOpacity,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {SafeAreaView} from 'react-native-safe-area-context';
import creLogoWhite from '../assets/icons/creLogoWhite.png';
import NotificationIconWhite from '../assets/icons/white/notifications.png';
import NotesIconWhite from '../assets/icons/white/notes.png';
import ArrowIconWhite from '../assets/icons/white/arrow.png';
import Sample from '../sample.jpg';
import ScholarIconGreen from '../assets/icons/green/scholar.png';
import ArrowIconBlue from '../assets/icons/blue/arrow.png';
import TrophyIconBlue from '../assets/icons/blue/trophy.png';
import PersonIconBlue from '../assets/icons/blue/person.png';
import AnalyticsIconBlue from '../assets/icons/blue/analytics.png';
import AssignmentIconGreen from '../assets/icons/green/assignment.png';
import PlayIconWhite from '../assets/icons/white/play.png';

const DashboardScreen = () => {
    return (
        <>
            <ScrollView style={styles.container}>
                <SafeAreaView>
                    <LinearGradient
                        colors={['#2e9869', '#4BDC7B']}
                        style={styles.linearGradient}></LinearGradient>
                    <View style={styles.header}>
                        <View style={styles.creLogoContainer}>
                            <Image
                                style={styles.creLogo}
                                source={creLogoWhite}
                            />
                        </View>
                        <View style={styles.dashboardTextContainer}>
                            <Text style={styles.dashboardText}>Dashboard</Text>
                        </View>
                        <TouchableOpacity
                            style={styles.notificationButtonContainer}>
                            <Image
                                style={styles.notificationButtonImage}
                                source={NotificationIconWhite}
                            />
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity style={styles.classesButtonContainer}>
                        <Image
                            style={styles.classesButtonIcons}
                            source={NotesIconWhite}
                        />
                        <Text style={styles.classesButtonText}>
                            Class - WEEK 5
                        </Text>
                        <Image
                            style={styles.classesButtonIcons}
                            source={ArrowIconWhite}
                        />
                    </TouchableOpacity>
                    <View style={styles.videoPlayerContainer}>
                        <Image
                            style={styles.videoPlayerThumbnail}
                            source={Sample}
                        />
                        <Image
                            style={styles.videoPlayerIcon}
                            source={PlayIconWhite}
                        />
                    </View>
                    <TouchableOpacity style={styles.myCreButtonContainer}>
                        <Image
                            style={styles.classesButtonIcons}
                            source={ScholarIconGreen}
                        />
                        <Text style={styles.myCreButtonText}>My CRE</Text>
                        <Image
                            style={styles.classesButtonIcons}
                            source={ArrowIconBlue}
                        />
                    </TouchableOpacity>
                    <View style={styles.statsContainerWrapper}>
                        <View style={styles.statsContainer}>
                            <Image
                                style={styles.statsIcons}
                                source={TrophyIconBlue}
                            />
                            <Text style={styles.statsTitle}>Score</Text>
                            <Text style={styles.statsValue}>325</Text>
                        </View>
                        <View style={styles.statsContainer}>
                            <Image
                                style={styles.statsIcons}
                                source={PersonIconBlue}
                            />
                            <Text style={styles.statsTitle}>Attendance</Text>
                            <Text style={styles.statsValue}>92%</Text>
                        </View>
                        <View style={styles.statsContainer}>
                            <Image
                                style={styles.statsIcons}
                                source={AnalyticsIconBlue}
                            />
                            <Text style={styles.statsTitle}>
                                Center Ranking
                            </Text>
                            <Text style={styles.statsValue}>3rd</Text>
                        </View>
                    </View>
                    <TouchableOpacity style={styles.myCreButtonContainer}>
                        <Image
                            style={styles.classesButtonIcons}
                            source={AssignmentIconGreen}
                        />
                        <Text style={styles.myCreButtonText}>Exam</Text>
                        <Image
                            style={styles.classesButtonIcons}
                            source={ArrowIconBlue}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.testButtonContainerWrapper}>
                        <LinearGradient
                            start={{x: 0, y: 0}}
                            end={{x: 1, y: 0}}
                            colors={['#2e9869', '#4BDC7B']}
                            style={styles.testButtonContainer}>
                            <View style={styles.testButtonInnerContainer}>
                                <Text style={styles.testButtonText1}>
                                    First Mock Test
                                </Text>
                                <Text style={styles.testButtonText2}>
                                    Attend Examination
                                </Text>
                            </View>
                            <View style={styles.testButtonIconContainer}>
                                <Image
                                    style={styles.testButtonIcon}
                                    source={ArrowIconWhite}
                                />
                            </View>
                        </LinearGradient>
                    </TouchableOpacity>
                </SafeAreaView>
            </ScrollView>
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    linearGradient: {
        position: 'absolute',
        height: 250,
        width: '100%',
        borderBottomRightRadius: 20,
        borderBottomLeftRadius: 20,
    },
    header: {
        justifyContent: 'flex-start',
        flexDirection: 'row',
    },
    creLogoContainer: {
        flex: 1,
        paddingLeft: 10,
        justifyContent: 'center',
        alignItems: 'flex-start',
    },
    creLogo: {
        resizeMode: 'contain',
        height: 65,
        width: 65,
    },
    dashboardTextContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    dashboardText: {
        fontFamily: 'Poppins-Bold',
        fontSize: 20,
        color: '#FFFFFF',
    },
    notificationButtonContainer: {
        flex: 1,
        justifyContent: 'center',
        paddingRight: 5,
        alignItems: 'flex-end',
    },
    notificationButtonImage: {
        resizeMode: 'contain',
        height: 50,
        width: 50,
    },
    classesButtonContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginHorizontal: 15,
        marginTop: 10,
    },
    classesButtonIcons: {
        resizeMode: 'contain',
        height: 45,
        width: 45,
    },
    classesButtonText: {
        fontFamily: 'Poppins-Bold',
        fontSize: 20,
        color: '#FFFFFF',
        marginLeft: 10,
    },
    videoPlayerContainer: {
        marginHorizontal: 15,
        marginTop: 10,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#000000',
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.16,
        shadowRadius: 4,
    },
    videoPlayerThumbnail: {
        resizeMode: 'cover',
        height: 180,
        width: '100%',
        borderRadius: 5,
    },
    videoPlayerIcon: {
        resizeMode: 'cover',
        height: '50%',
        width: '50%',
        position: 'absolute',
        opacity: 0.8,
    },
    myCreButtonContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginHorizontal: 15,
        marginTop: 15,
    },
    myCreButtonText: {
        fontFamily: 'Poppins-Bold',
        fontSize: 20,
        color: '#22366E',
        marginLeft: 10,
    },
    statsContainerWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginHorizontal: 20,
        marginVertical: 15,
    },
    statsContainer: {
        width: 100,
        height: 100,
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        shadowColor: '#000000',
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.16,
        shadowRadius: 4,
    },
    statsIcons: {
        resizeMode: 'contain',
        height: 80,
        width: 80,
        marginBottom: -12,
        opacity: 0.1,
    },
    statsTitle: {
        fontFamily: 'Poppins-Bold',
        color: '#22366E',
        fontSize: 10,
    },
    statsValue: {
        color: '#22366E',
        position: 'absolute',
        fontSize: 22,
        fontFamily: 'Poppins-Bold',
    },
    testButtonContainerWrapper: {
        shadowColor: '#000000',
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.16,
        shadowRadius: 4,
    },
    testButtonContainer: {
        flexDirection: 'row',
        marginVertical: 15,
        marginHorizontal: 20,
        borderRadius: 5,
    },
    testButtonInnerContainer: {
        flex: 3,
        marginHorizontal: 20,
        marginVertical: 25,
        height: 55,
        justifyContent: 'space-between',
    },
    testButtonText1: {
        fontSize: 20,
        color: '#FFFFFF',
        fontFamily: 'Poppins-Bold',
    },
    testButtonText2: {
        fontSize: 17,
        color: '#FFFFFF',
        fontFamily: 'Poppins-Regular',
    },
    testButtonIconContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    testButtonIcon: {
        resizeMode: 'contain',
        height: 60,
        width: 60,
    },
});

export default DashboardScreen;
