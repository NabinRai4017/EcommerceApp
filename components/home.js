import { Component } from "react";
import { Text, StyleSheet } from 'react-native';

class HomeScreen extends Component {

    render() {
        return (
            <Text
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >Home</Text>
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


export default HomeScreen;