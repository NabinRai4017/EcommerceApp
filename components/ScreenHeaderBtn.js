import { Image, TouchableOpacity } from "react-native";

import { StyleSheet } from "react-native";

import { SIZES } from "../constants";


const ScreenHeaderBtn = ({ iconUrl, dimension, handlePress }) => {
  return (
    <TouchableOpacity style={styles.btnContainer} onPress={handlePress}>
      <Image
        source={iconUrl}
        resizeMode='cover'
        style={styles.btnImg(dimension)}
      />
    </TouchableOpacity>
  );
};


const styles = StyleSheet.create({
  btnContainer: {
    width: 20,
    height: 20,
    right: 10,
    borderRadius: SIZES.small,
    justifyContent: "center",
    alignItems: "center",
  },
  btnImg: (dimension) => ({
    width: dimension,
    height: dimension,
    borderRadius: SIZES.small,
  }),
});

export default ScreenHeaderBtn;