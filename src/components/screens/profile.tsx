import { Component } from "react";
import { Text, StyleSheet } from 'react-native';



const ProfileScreen = () =>  {


        return (
           <Text style={styles.container}>Profile</Text>
        );
    
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