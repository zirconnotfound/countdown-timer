import { InvalidInput } from "../InvalidInput/InvalidInput.js";
import { useCountDown } from "../../hooks/useCountDown.js";
import "./CountdownTimer.css"

const convertTwoDigits = (num) => {
    if (num >= 10)
        return num;
    else
        return "0".concat(num.toString());
}

const CountdownTimer = ({ targetDate }) => {
    const [ days, hours, minutes, seconds ] = useCountDown(targetDate);
    return (
        <ShowCountdown 
        days={days}
        hours={hours}
        minutes={minutes}
        seconds={seconds}
        />
    )
}
  
const ShowCountdown = ({ days, hours, minutes, seconds }) => {
    if (days + hours + minutes + seconds < 0)
        return <InvalidInput/>
    else {
        return (
            <div className="clock">
                <div className="clock-title">Time left</div>
                <div className="clock-item">
                    <h3>{days}</h3>
                    <span>days</span>
                </div>
                <span>:</span>
                <div className="clock-item">
                    <h3> {convertTwoDigits(hours)}</h3>
                    <span>hours</span>
                </div>
                <span>:</span>
                <div className="clock-item">
                    <h3> {convertTwoDigits(minutes)}</h3>
                    <span>minutes</span>
                </div>
                <span>:</span>
                <div className="clock-item">
                    <h3> {convertTwoDigits(seconds)} </h3>
                    <span>seconds</span>
                </div>
            </div>
        )
    }
}
export { CountdownTimer, convertTwoDigits }