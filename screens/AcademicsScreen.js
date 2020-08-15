import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    ScrollView,
    Image,
    TouchableOpacity,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import LinearGradient from 'react-native-linear-gradient';
import creLogoWhite from '../assets/icons/creLogoWhite.png';
import NotificationIconWhite from '../assets/icons/white/notifications.png';
import PlayIconGreen from '../assets/icons/green/play.png';
import HelpIconGreen from '../assets/icons/green/help.png';
import NotesIconGreen from '../assets/icons/green/notes.png';
import AssignmentsIconGreen from '../assets/icons/green/assignment.png';
import TaskIconGreen from '../assets/icons/green/task.png';

const AcademicsScreen = () => {
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
                            <Text style={styles.dashboardText}>Academics</Text>
                        </View>
                        <TouchableOpacity
                            style={styles.notificationButtonContainer}>
                            <Image
                                style={styles.notificationButtonImage}
                                source={NotificationIconWhite}
                            />
                        </TouchableOpacity>
                    </View>
                    <View style={{flex: 1, marginTop: 50}}>
                        <View style={styles.buttonsContainerWrapper}>
                            <TouchableOpacity style={styles.buttonsContainer}>
                                <Image
                                    style={styles.buttonIcons}
                                    source={PlayIconGreen}
                                />
                                <Text style={styles.buttonTitle}>
                                    Videos/Classes
                                </Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.buttonsContainer}>
                                <Image
                                    style={styles.buttonIcons}
                                    source={HelpIconGreen}
                                />
                                <Text style={styles.buttonTitle}>Quiz</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.buttonsContainerWrapper}>
                            <TouchableOpacity style={styles.buttonsContainer}>
                                <Image
                                    style={styles.buttonIcons}
                                    source={NotesIconGreen}
                                />
                                <Text style={styles.buttonTitle}>Notes</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.buttonsContainer}>
                                <Image
                                    style={styles.buttonIcons}
                                    source={AssignmentsIconGreen}
                                />
                                <Text style={styles.buttonTitle}>
                                    Assignments
                                </Text>
                            </TouchableOpacity>
                        </View>
                        <View
                            style={
                                (styles.buttonsContainerWrapper,
                                {alignItems: 'center', marginBottom: 30})
                            }>
                            <TouchableOpacity style={styles.buttonsContainer}>
                                <Image
                                    style={styles.buttonIcons}
                                    source={TaskIconGreen}
                                />
                                <Text style={styles.buttonTitle}>
                                    Activities
                                </Text>
                            </TouchableOpacity>
                        </View>
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
    buttonsContainerWrapper: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 30,
        marginHorizontal: 20,
    },
    buttonsContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
        width: 150,
        height: 150,
        borderRadius: 15,
        shadowColor: '#000000',
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.16,
        shadowRadius: 4,
    },
    buttonIcons: {
        resizeMode: 'contain',
        height: 100,
        width: 100,
    },
    buttonTitle: {
        fontFamily: 'Poppins-Bold',
        fontSize: 13,
        color: '#22366E',
    },
});

export default AcademicsScreen;
