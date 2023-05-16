import { StyleSheet, Dimensions, View, Animated } from "react-native";
import ClockFace from "../ClockFace";
import { CatBackground } from "./CatBackground";
import { CatTail } from "./CatTail";

const { width } = Dimensions.get("screen");
const SIZE = width * 0.9;
const HEIGHT = (SIZE * 826) / 673;
const TAIL_HEIGHT = (SIZE * 0.35 * 1014) / 454;
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
    left: SIZE * 0.27,
    width: SIZE * 0.44,
    height: HEIGHT * 0.1,
    justifyContent: "space-between",
  },
  pupil: {
    marginTop: 14,
    marginLeft: 28,
    marginRight: 28,
    width: 5,
    height: 20,
    borderRadius: "50%",
    backgroundColor: "#333",
  },
  tail: {
    position: "absolute",
    top: SIZE * 0.9,
    left: SIZE * 0.35,
    width: SIZE * 0.35,
    height: TAIL_HEIGHT,
  },
});

export const Cat = ({ timeValue }) => {
  const interloated = {
    inputRange: [0, 1],
    outputRange: [SIZE * -0.035, SIZE * 0.035],
  };
  const tickTock = Animated.modulo(timeValue, 1);

  const eyeMovment = {
    transform: [{ translateX: tickTock.interpolate(interloated) }],
  };

  return (
    <View style={catStyles.cat}>
      <Animated.View style={[catStyles.eyes, eyeMovment]}>
        <View style={catStyles.pupil} />
        <View style={catStyles.pupil} />
      </Animated.View>
      <Animated.View style={[catStyles.tail]}>
        <CatTail />
      </Animated.View>
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
