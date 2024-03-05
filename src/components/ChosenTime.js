import { convertTwoDigits } from "./CountdownTimer";

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
        <h3>
            <span>{date}</span>
            /
            <span>{month}</span>
            /
            <span>{year}</span>
            |
            <span>{convertTwoDigits(hour)}</span>
            :
            <span>{convertTwoDigits(minute)}</span>
            :
            <span>{convertTwoDigits(second)}</span>
        </h3>
    )
}

export { ChosenTime }