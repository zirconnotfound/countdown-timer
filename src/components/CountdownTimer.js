import { useCountDown } from "../hooks/useCountDown";
import { InvalidInput } from "./InvalidInput";

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
                <h3>
                    <span style={{marginRight: "12px"}}>{days} days</span>
                    <span style={{marginRight: "6px"}}>{convertTwoDigits(hours)} hours</span>
                    :
                    <span style={{marginRight: "6px"}}>{convertTwoDigits(minutes)} minutes</span>
                    :
                    <span style={{marginRight: "6px"}}>{convertTwoDigits(seconds)} seconds</span>
                </h3>
            </div>
        )
    }
}
export { CountdownTimer, convertTwoDigits }