import { Component } from "react";
import { Text, StyleSheet } from 'react-native';

class CartScreen extends Component {

    render() {
        return (
            <Text>Cart</Text>
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


export default CartScreen;