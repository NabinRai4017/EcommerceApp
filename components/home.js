import { Component } from "react";
import { Text, StyleSheet, ScrollView } from 'react-native';
import { SIZES } from '../constants'
import Trending from "./trending";
import NewArrival from "./newarrival";

class HomeScreen extends Component {

    render() {
        return (
            <ScrollView>
                <Text
                    style={styles.title}
                >Discover</Text>
                <Trending />
                <NewArrival/>
            </ScrollView>

        );
    }
}


const styles = StyleSheet.create({
    title: {
        left: 20,
        top: 20,
        fontSize: SIZES.xxLarge

    },
});


export default HomeScreen;