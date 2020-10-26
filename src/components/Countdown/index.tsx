import React from 'react';
import {CountdownCircleTimer} from 'react-countdown-circle-timer';

import * as s from './styles';

const renderTime = ({ remainingTime }) => {
  if (remainingTime === 0) {
    return <div className="timer">Too lale...</div>;
  }

  return (
    <div className="timer">
      <div className="value">{remainingTime}</div>
    </div>
  );
};

type TimerProps = {
  timerKey: number;
  onComplete: () => void;
}

const Countdown: React.FC<TimerProps> = ({timerKey, onComplete}) => {
  return (
    <s.CountdownContainer>
      Tempo restante para confirmar pagamento
      <CountdownCircleTimer
          isPlaying
          key={timerKey}
          duration={30}
          strokeWidth={6}
          onComplete={onComplete}
          size={60}
          colors={[
            ['#004777', 0.4],
            ['#F7B801', 0.4],
            ['#A30000', 0.2],
          ]}
        >
          {renderTime}
        </CountdownCircleTimer>
    </s.CountdownContainer>

  )
};

export default Countdown;
