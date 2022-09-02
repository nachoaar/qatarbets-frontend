import React from 'react';
import { ExpiredNotice } from './ExpiredNotice';
import { useCountdown } from './hooks/useCountdown';
import { ShowCounter } from './ShowCounter';



export const CountdownTimer = ({ targetDate }) => {
    const [days, hours, minutes, seconds] = useCountdown(targetDate);

    if (days + hours + minutes + seconds <= 0) {
        return <ExpiredNotice />;
    } else {
        return (
            <ShowCounter
                days={days}
                hours={hours}
                minutes={minutes}
                seconds={seconds}
            />
        );
    }
};
