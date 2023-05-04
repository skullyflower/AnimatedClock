import { useEffect, useRef, useState } from "react";
import { Animated, StyleSheet, Dimensions, View } from "react-native";
import dayjs from "dayjs";

const { width } = Dimensions.get("screen");
const TICK_INTERVAL = 1000;
const getClockStyles = ({ size, clockBackgroundColor }) =>
  StyleSheet.create({
    container: {
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

export default function Clock({ size, clockBackgroundColor }) {
  const styles = getClockStyles({
    size: size,
    clockBackgroundColor: clockBackgroundColor,
  });
  const [tick, setTick] = useState(new Animated.Value(0));
  const timeValue = useRef(new Animated.Value(0)).current;

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

  const oneDay = 24 * 60 * 60;

  useEffect(() => {
    const current = dayjs();
    const diff = current.endOf("day").diff(current, "seconds");
    let _timer = oneDay - diff;
    setTick(_timer);
    timeValue.current = _timer - 30;

    animate();

    let _ticker = setInterval(() => {
      _timer += 1;
      setTick(_timer);
    }, TICK_INTERVAL);
    return () => {
      clearInterval(_ticker);
      _ticker = null;
    };
  }, [tick, timeValue]);

  const animate = () => {
    Animated.timing(timeValue, {
      toValue: tick,
      duration: TICK_INTERVAL / 2,
      useNativeDriver: true,
    }).start();
  };

  return (
    <View style={styles.container}>
      <View style={styles.clockface} />
      <Animated.Text></Animated.Text>
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
