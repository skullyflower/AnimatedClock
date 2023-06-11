import React, { useEffect, useRef, useState } from 'react';
import { Animated } from 'react-native';
import dayjs from 'dayjs';
import { Cat } from './characters/cat';

const TICK_INTERVAL = 1000;
export default class ClockWorks extends React.Component {
  state = {
    timeValue: new Animated.Value(0),
    oddEven: new Animated.Value(0),
    tick: new Animated.Value(0),
    modulo: new Animated.Value(0),
  };
  _timer = 0;
  _tickinterval = null;
  componentDidMount() {
    const current = dayjs();
    const diff = current.endOf('day').diff(current, 'seconds');
    const oneDay = 24 * 60 * 60;

    this._timer = oneDay - diff;
    this.state.tick.setValue(this._timer);
    this.state.timeValue.setValue(this._timer - 10);

    this._animate();
    this._tickinterval = setInterval(() => {
      this._timer += 1;
      this.state.tick.setValue(this._timer);
      this.state.modulo.setValue(this._timer % 2);
    }, TICK_INTERVAL);
  }

  componentWillUnmount() {
    clearInterval(this._tickinterval);
    this._tickinterval = null;
  }

  _animate = () => {
    const { timeValue, oddEven, modulo, tick } = this.state;
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

  render() {
    const { timeValue, oddEven } = this.state;
    return (
      <Cat
        timeValue={timeValue}
        oddEven={oddEven}
      />
    );
  }
}
