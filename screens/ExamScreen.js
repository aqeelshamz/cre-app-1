import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    SafeAreaView,
    Image,
    TouchableOpacity,
    ScrollView,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import creLogoWhite from '../assets/icons/creLogoWhite.png';
import NotificationIconWhite from '../assets/icons/white/notifications.png';

const ExamScreen = () => {
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
                            <Text style={styles.dashboardText}>Exam</Text>
                        </View>
                        <TouchableOpacity
                            style={styles.notificationButtonContainer}>
                            <Image
                                style={styles.notificationButtonImage}
                                source={NotificationIconWhite}
                            />
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
});

export default ExamScreen;
