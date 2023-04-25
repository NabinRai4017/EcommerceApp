import { Text, StyleSheet, ScrollView } from 'react-native';
import { SIZES } from '../../constants'
import { fetchProducts, allProducts, productsStatus, productsError } from '../../state/features/productSlice';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../state/store';
import { useGetProductsQuery } from '../../state/services/productService';


const HomeScreen = () => {

    // const dispatch = useAppDispatch();
    // const products = useAppSelector(allProducts);
    // const status = useAppSelector(productsStatus)
    // const error = useAppSelector(productsError)

    // useEffect(() => {
    //     if (status === 'idle') {
    //         console.log('called')
    //         dispatch(fetchProducts())
    //         console.log('---------')
    //     } else {
    //     }
    // }, [status, dispatch])

    const { data, error, isLoading} = useGetProductsQuery('');


    return (
        <ScrollView>
            <Text
                style={styles.title}
            >There are {data?.length} products</Text>

        </ScrollView>
    );

}


const styles = StyleSheet.create({
    title: {
        left: 20,
        top: 20,
        fontSize: SIZES.xxLarge

    },
});


export default HomeScreen;
