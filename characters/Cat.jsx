import { ImageBackground, StyleSheet, Dimensions, View } from "react-native";
import ClockFace from "../ClockFace";

const { width } = Dimensions.get("screen");
const SIZE = width * 0.9;
const HEIGHT = (SIZE * 826) / 673;

const catStyles = StyleSheet.create({
  cat: {
    width: SIZE,
    height: HEIGHT,
    position: "relative",
  },
  clockPositioner: {
    position: "absolute",
    width: SIZE / 2,
    height: SIZE / 2,
    top: "31%",
    left: "25%",
  },
});
export const Cat = ({ timeValue }) => {
  return (
    <View style={catStyles.cat}>
      <ImageBackground
        source={require("../assets/CatClockSmall.gif")}
        resizeMode='contain'
        style={catStyles.cat}>
        <View style={catStyles.clockPositioner}>
          <ClockFace
            timeValue={timeValue}
            size={185}
            clockBackgroundColor='#fff'
          />
        </View>
      </ImageBackground>
    </View>
  );
};
