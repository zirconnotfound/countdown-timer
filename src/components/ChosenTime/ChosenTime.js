import { convertTwoDigits } from "../CountdownTimer/CountdownTimer.js";
import "./ChosenTime.css"

const ChosenTime = ({ dateString }) => {
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    
    const time = new Date(dateString);
    const year = time.getFullYear();
    const month = months[time.getMonth()];
    const date = time.getDate();
    const hour = time.getHours();
    const minute = time.getMinutes();
    const second = time.getSeconds();

    return (
        <div className="chosen-time">
            <span className="time-span">to</span>
            <h3>
                <span className="span-item">{date}</span>
                /
                <span className="span-item">{month}</span>
                /
                <span className="span-item">{year}</span>
                <span className="span-sym">|</span>
                <span className="span-item">{convertTwoDigits(hour)}</span>
                :
                <span className="span-item">{convertTwoDigits(minute)}</span>
                :
                <span className="span-item">{convertTwoDigits(second)}</span>
            </h3>
        </div>
    )
}

export { ChosenTime }