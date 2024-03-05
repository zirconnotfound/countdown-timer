import { useState, useEffect } from "react";

const getValue = (time) => {
    const days = Math.floor(time / (1000 * 60 * 60 * 24));
    const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
    const minutes = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((time % (1000 * 60)) / 1000);

    return [days, hours, minutes, seconds];
}

const useCountDown = (targetDate) => {
    const countdownDate = new Date(targetDate).getTime();
    const [ countdown, setCountdown ] = useState(countdownDate - new Date().getTime());

    useEffect(() => {
        const interval = setInterval(() => {
            setCountdown(countdownDate - new Date().getTime());
        }, 1000);

        return () => clearInterval(interval);
    }, [countdownDate])

    return getValue(countdown);
};
export { useCountDown };