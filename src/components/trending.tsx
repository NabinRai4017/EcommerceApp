import React from "react";
import { Component } from "react";
import { Text, StyleSheet } from 'react-native';
import { SIZES } from "../constants";

const Trending = () => {

        return (
            <Text
            style={styles.title}
            >Trendings</Text>
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




export default Trending;