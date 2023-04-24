import { Button, HStack } from 'native-base';
import { Text, StyleSheet, View, TextInput } from 'react-native';
import { COLORS } from '../../constants';
import { Colors } from 'react-native/Libraries/NewAppScreen';



const ProfileScreen = () => {

    return (
        <View style={styles.container}>
            <View style={styles.secondaryContainer}>
                <Text style={styles.signIn}>Sign In</Text>
                <Button style={styles.googleButton}>Sign In with Apple ID</Button>
                <Text style={styles.orText}>or sign in with your email</Text>
                <Text style={styles.emailTitle}>Email</Text>
                <TextInput placeholder='Enter email' style={styles.input}></TextInput>
                <View style={styles.passwordTitleContainer}>
                    <Text style={styles.passwordTitle}>Password</Text>
                    <Text style={styles.forgetPassword}>Forget password?</Text>
                </View>
                <TextInput placeholder='Enter password' style={styles.input}></TextInput>
                <Button style={styles.signInButton}>Sign In</Button>
            </View>
        </View>


    );

}


const styles = StyleSheet.create({
    container: {
        backgroundColor: COLORS.white,
    },
    signIn: {
        fontSize: 16,
        marginTop: 60,
        textAlign: 'center',
        fontWeight: 'medium',
    },
    googleButton: {
        marginTop: 40,
        height: 40,
        backgroundColor: COLORS.primary,
    },
    orText: {
        textAlign: 'center',
        marginTop: 20,
        color: COLORS.gray,
    },
    secondaryContainer: {
        marginHorizontal: 40,
        backgroundColor: COLORS.white,
    },
    emailTitle: {
        marginTop: 20,
        fontSize: 12
    },
    passwordTitleContainer: {
        marginTop: 8,
        flexDirection: 'row',
    },
    passwordTitle: {
        flex: 1,
        textAlign: 'left',
        fontSize: 12
    },

    forgetPassword: {
        flex: 1,
        textAlign: 'right',
        fontSize: 12,
        color: 'blue'
    },
    input: {
        marginTop: 8,
        height: 40,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: COLORS.gray2,
        paddingHorizontal: 10
    },
    signInButton: {
        marginTop: 30,
        textAlign: 'center',
        height: 40,
        backgroundColor: 'green'
    }

});


export default ProfileScreen;