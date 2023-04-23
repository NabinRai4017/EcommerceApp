import React from "react";
import { Component } from "react";
import { Text, StyleSheet } from 'react-native';
import { SIZES } from "../constants";


const NewArrival = () => {


        return (
            <Text
            style={styles.title}
            >New Arrials</Text>
        );
    

}

const styles = StyleSheet.create({
    title: {
        fontSize: SIZES.large,
        top:20,
        left:20
    },

    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});


export default NewArrival;