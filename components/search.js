import { Component } from "react";
import { Text, StyleSheet } from 'react-native';

class SearchScreen extends Component {

    render() {
        return (
            <Text>Search</Text>
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


export default SearchScreen;