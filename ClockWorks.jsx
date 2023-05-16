import { useEffect, useRef, useState } from "react";
import { Animated } from "react-native";
import dayjs from "dayjs";
import { Cat } from "./characters/";

const TICK_INTERVAL = 1000;

export default function ClockWorksr({ character }) {
  const [tick, setTick] = useState(new Animated.Value(0));
  const [modulo, setModulo] = useState(new Animated.Value(0));
  const [ticker, setTicker] = useState(null);

  const timeValue = useRef(new Animated.Value(0)).current;
  const oddEven = useRef(new Animated.Value(0)).current;
  const oneDay = 24 * 60 * 60;
  const current = dayjs();
  const diff = current.endOf("day").diff(current, "seconds");

  useEffect(() => {
    let _timer = oneDay - diff;
    setTick(_timer);
    setModulo(_timer % 2);
    timeValue.current = _timer - 10;
    oddEven.current = _timer % 2;
    animate();

    let _ticker = setInterval(() => {
      _timer += 1;
      setTick(_timer);
      setModulo(_timer % 2);
    }, TICK_INTERVAL);
    setTicker(_ticker);
    return () => {
      clearInterval(ticker);
      _ticker = null;
    };
  }, [tick]);

  const animate = () => {
    Animated.parallel([
      Animated.timing(oddEven, {
        toValue: modulo,
        duration: TICK_INTERVAL,
        useNativeDriver: true,
      }),
      Animated.timing(timeValue, {
        toValue: tick,
        duration: TICK_INTERVAL / 2,
        useNativeDriver: true,
      }),
    ]).start();
  };

  return (
    <Cat
      timeValue={timeValue}
      oddEven={oddEven}
    />
  );
}
