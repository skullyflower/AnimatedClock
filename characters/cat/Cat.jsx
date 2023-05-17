import { StyleSheet, Dimensions, View, Animated } from "react-native";
import ClockFace from "../../ClockFace";
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
    top: SIZE * 0.1,
    left: SIZE * 0.35,
    width: SIZE * 0.35,
    height: 2 * TAIL_HEIGHT,
  },
});

export const Cat = ({ timeValue, oddEven }) => {
  const intopolTranslate = {
    inputRange: [0, 1],
    outputRange: [SIZE * -0.035, SIZE * 0.035],
  };

  const interpolDegrees = {
    inputRange: [0, 1],
    outputRange: ["-20deg", "20deg"],
  };

  const tickTock = Animated.multiply(oddEven, 1);
  const eyeMovment = {
    transform: [{ translateX: tickTock.interpolate(intopolTranslate) }],
  };

  const pendulum = new Animated.multiply(oddEven, 1);
  const tailSwing = {
    transform: [{ rotate: pendulum.interpolate(interpolDegrees) }],
  };
  return (
    <View style={catStyles.cat}>
      <Animated.View style={[catStyles.eyes, eyeMovment]}>
        <View style={catStyles.pupil} />
        <View style={catStyles.pupil} />
      </Animated.View>
      <Animated.View style={[catStyles.tail, tailSwing]}>
        <View
          style={{
            width: "100%",
            height: TAIL_HEIGHT,
            position: "absolute",
            bottom: 0,
          }}>
          <CatTail />
        </View>
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
