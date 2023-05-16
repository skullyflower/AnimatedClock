import { Animated, StyleSheet, View } from "react-native";

const getClockStyles = ({ size, clockBackgroundColor }) =>
  StyleSheet.create({
    contain: {
      flex: 1,
      backgroundColor: "transparent",
      alignItems: "center",
      justifyContent: "center",
    },
    clockface: {
      position: "absolute",
      backgroundColor: clockBackgroundColor,
      width: size,
      height: size,
      borderRadius: size / 2,
    },
    clockcenter: {
      position: "absolute",
      width: 10,
      height: 10,
      backgroundColor: "#900",
      borderRadius: 5,
    },
    mover: {
      position: "absolute",
      width: size,
      height: size,
      borderRadius: size / 2,
      alignItems: "center",
      justifyContent: "flext-start",
      border: "1 solid #000",
    },
    hourhand: {
      height: "35%",
      marginTop: "15%",
      width: 4,
      borderRadius: 4,
      backgroundColor: "#333",
    },
    minutehand: {
      height: "40%",
      marginTop: "10%",
      width: 3,
      borderRadius: 3,
      backgroundColor: "#666",
    },
    secondhand: {
      height: "45%",
      marginTop: "5%",
      width: 2,
      borderRadius: 2,
      backgroundColor: "#900",
    },
  });

export default function ClockFace({ size, clockBackgroundColor, timeValue }) {
  const styles = getClockStyles({
    size: size,
    clockBackgroundColor: clockBackgroundColor,
  });
  const interpolated = {
    inputRange: [0, 360],
    outputRange: ["0deg", "360deg"],
  };

  const angleSeconds = Animated.multiply(timeValue, 6);
  const SecondsMovement = {
    transform: [{ rotate: angleSeconds.interpolate(interpolated) }],
  };

  const angleMinutes = Animated.divide(angleSeconds, new Animated.Value(60));
  const MinutesMovement = {
    transform: [{ rotate: angleMinutes.interpolate(interpolated) }],
  };

  const angleHours = Animated.divide(angleMinutes, new Animated.Value(12));
  const HoursMovement = {
    transform: [{ rotate: angleHours.interpolate(interpolated) }],
  };

  return (
    <View style={styles.contain}>
      <View style={styles.clockface} />
      <Animated.View style={[styles.mover, HoursMovement]}>
        <View style={styles.hourhand} />
      </Animated.View>
      <Animated.View style={[styles.mover, MinutesMovement]}>
        <View style={styles.minutehand} />
      </Animated.View>
      <Animated.View style={[styles.mover, SecondsMovement]}>
        <View style={styles.secondhand}></View>
      </Animated.View>
      <View style={styles.clockcenter} />
    </View>
  );
}
