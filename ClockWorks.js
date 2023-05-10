import { useEffect, useRef, useState } from "react";
import { Animated } from "react-native";
import dayjs from "dayjs";
import ClockFace from "./ClockFace";

const TICK_INTERVAL = 1000;

export default function ClockWork({ character }) {
  const [tick, setTick] = useState(new Animated.Value(0));
  const [ticker, setTicker] = useState(null);
  const timeValue = useRef(new Animated.Value(0)).current;
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
    setTicker(_ticker);
    return () => {
      clearInterval(ticker);
      _ticker = null;
    };
  }, [tick]);

  const animate = () => {
    Animated.timing(timeValue, {
      toValue: tick,
      duration: TICK_INTERVAL / 2,
      useNativeDriver: true,
    }).start();
  };

  return (
    <ClockFace
      timeValue={timeValue}
      size={200}
      clockBackgroundColor='#70A8DB'
    />
  );
}
