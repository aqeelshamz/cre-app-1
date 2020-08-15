import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    SafeAreaView,
    Image,
    ScrollView,
    TouchableOpacity,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import creLogoWhite from '../assets/icons/creLogoWhite.png';
import NotificationIconWhite from '../assets/icons/white/notifications.png';
import AssignmentIconGreen from '../assets/icons/green/assignment.png';
import CommunityIconGreen from '../assets/icons/green/community.png';
import ChatIconGreen from '../assets/icons/green/chat.png';
import HeartIconGreen from '../assets/icons/green/heart.png';

const MyCreScreen = () => {
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
                            <Text style={styles.dashboardText}>My CRE</Text>
                        </View>
                        <TouchableOpacity
                            style={styles.notificationButtonContainer}>
                            <Image
                                style={styles.notificationButtonImage}
                                source={NotificationIconWhite}
                            />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.statsContainerWrapper}>
                        <View style={styles.statsContainer}>
                            <View style={styles.statsContentContainer}>
                                <Text style={styles.statsContent}>323</Text>
                            </View>
                            <Text style={styles.statsTitle}>Score</Text>
                        </View>
                        <View style={styles.statsContainer}>
                            <View style={styles.statsContentContainer}>
                                <Text style={styles.statsContent}>92%</Text>
                            </View>
                            <Text style={styles.statsTitle}>Attendance</Text>
                        </View>
                        <View style={styles.statsContainer}>
                            <View style={styles.statsContentContainer}>
                                <Text style={styles.statsContent}>3rd</Text>
                            </View>
                            <Text style={styles.statsTitle}>
                                Center Ranking
                            </Text>
                        </View>
                    </View>
                    <View style={styles.buttonContainer}>
                        <TouchableOpacity style={styles.button}>
                            <Image
                                style={styles.buttonsIcon}
                                source={AssignmentIconGreen}
                            />
                            <Text style={styles.buttonText}>
                                Academic Calendar
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.button}>
                            <Image
                                style={styles.buttonsIcon}
                                source={CommunityIconGreen}
                            />
                            <Text style={styles.buttonText}>
                                CRE Community Forum
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.button}>
                            <Image
                                style={styles.buttonsIcon}
                                source={ChatIconGreen}
                            />
                            <Text style={styles.buttonText}>
                                Chat with admin / teachers
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.button}>
                            <Image
                                style={styles.buttonsIcon}
                                source={HeartIconGreen}
                            />
                            <Text style={styles.buttonText}>FeedBack</Text>
                        </TouchableOpacity>
                    </View>
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
    statsContainerWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginVertical: 15,
    },
    statsContainer: {
        alignItems: 'center',
    },
    statsContentContainer: {
        backgroundColor: '#00D86B',
        height: 100,
        width: 100,
        borderRadius: 100 / 2,
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
    statsContent: {
        fontFamily: 'Poppins-Bold',
        fontSize: 30,
        color: '#FFFFFF',
    },
    statsTitle: {
        fontFamily: 'Poppins-Bold',
        fontSize: 13,
        color: '#FFFFFF',
        marginTop: 10,
    },
    buttonsIcon: {
        resizeMode: 'contain',
        height: 50,
        width: 50,
    },
    buttonContainer: {
        marginVertical: 15,
    },
    button: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
        borderRadius: 7,
        padding: 10,
        marginHorizontal: 15,
        marginVertical: 15,
        shadowColor: '#000000',
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.16,
        shadowRadius: 4,
    },
    buttonText: {
        color: '#22366E',
        fontFamily: 'Poppins-Bold',
        fontSize: 17,
    },
});

export default MyCreScreen;
