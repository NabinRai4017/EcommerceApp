import { Component } from "react";
import { Text, StyleSheet } from 'react-native';

class ProfileScreen extends Component {

    render() {
        return (
            <Text>Profile</Text>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});


export default ProfileScreen;