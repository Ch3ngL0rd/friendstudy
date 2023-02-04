// Timer component
// Takes in seconds and returns formatted minutes and seconds
// Example: 120 seconds = 2:00
// Maintains state and countsdown

import React from 'react';
export const Timer = (props: { seconds: number }) => {
    const [time, setTime] = React.useState<number>(props.seconds);
    const [minutes, setMinutes] = React.useState<string>('0');
    const [seconds, setSeconds] = React.useState<string>('00');

    React.useEffect(() => {
        let interval: NodeJS.Timeout;
        if (time > 0) {
            interval = setTimeout(() => setTime(time - 1), 1000);
        }
        return () => clearInterval(interval);
    }, [time]);

    React.useEffect(() => {
        setTime(props.seconds);
    },[props.seconds])

    React.useEffect(() => {
        setMinutes(`${Math.floor(time / 60)}`);
        setSeconds(time % 60 < 10 ? `0${time % 60}` : `${time % 60}`);
    }, [time]);

    // returns minutes and seconds as varaibles
    return({
        minutes,
        seconds,
        seconds_remaining: props.seconds - time
    })
};