import { Image, TouchableOpacity } from "react-native";
import { StyleSheet , ImageSourcePropType} from "react-native";
import { SIZES } from "../constants";

interface ScreenHeaderProp{
  iconUrl: ImageSourcePropType,
  dimension: string,
  handlePress: () => void
}


const ScreenHeaderBtn = ( {iconUrl, dimension ,handlePress}: ScreenHeaderProp) => {
  return (
    <TouchableOpacity style={styles.btnContainer} onPress={handlePress}>
      <Image
        source={iconUrl}
        resizeMode='cover'
        style={
          [
            {
              width: dimension,
              height: dimension,
            },
            styles.btnImg
          ]
        }
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
  btnImg: {
    borderRadius: SIZES.small,
  },
});

export default ScreenHeaderBtn;