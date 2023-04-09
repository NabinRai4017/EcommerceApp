import { Component } from "react";
import { Text, StyleSheet, ScrollView } from 'react-native';
import { SIZES } from '../../constants'

class HomeScreen extends Component {

    constructor(){
       
    }

    render() {
        return (
            <ScrollView>
                <Text
                    style={styles.title}
                >Discover</Text>
              
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