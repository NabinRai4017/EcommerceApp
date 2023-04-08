import { View, Text, Image } from "react-native";


const TabItem = (title, source, focused) =>{
    return (
        <View style={{
            alignItems: 'center', 
            justifyContent: 'center',
            top: 10
        }}>
            <Image
                source={source}
                resizeMode='contain'
                style={{
                    width: 20,
                    height: 20,
                    tintColor: focused ? '#e32f45' : '#748c94'
                }}
            />
            <Text style={{
                fontSize: 10
            }}>{title}</Text>
    </View>
    );
}

export default TabItem;