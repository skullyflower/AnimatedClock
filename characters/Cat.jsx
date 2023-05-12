import { Image, StyleSheet, Dimensions, View } from "react-native";
import ClockFace from "../ClockFace";
import { CatBackground } from "./CatBackground";

const { width } = Dimensions.get("screen");
const SIZE = width * 0.9;
const HEIGHT = (SIZE * 826) / 673;
const catStyles = StyleSheet.create({
  cat: {
    width: SIZE,
    height: HEIGHT,
  },
  clockPositioner: {
    position: "absolute",
    width: SIZE / 2,
    height: SIZE / 2,
    top: SIZE * 0.4,
    left: SIZE * 0.25,
  },
  eyes: {
    position: "absolute",
    display: "flex",
    flexDirection: "row",
    backgroundColor: "#AC4",
    top: SIZE * 0.15,
    left: SIZE * 0.23, //SIZE * 0.3,
    width: SIZE * 0.44,
    height: HEIGHT * 0.1,
    justifyContent: "space-between",
  },
  pupil: {
    marginTop: 14,
    marginLeft: 28,
    marginRight: 28,
    width: 3,
    height: 15,
    borderRadius: "50%",
    backgroundColor: "#333",
  },
});
export const Cat = ({ timeValue }) => {
  return (
    <View style={catStyles.cat}>
      <View style={catStyles.eyes}>
        <View style={catStyles.pupil} />
        <View style={catStyles.pupil} />
      </View>
      <CatBackground />

      <View style={catStyles.clockPositioner}>
        <ClockFace
          timeValue={timeValue}
          size={185}
          clockBackgroundColor='#fff'
        />
      </View>
    </View>
  );
};
