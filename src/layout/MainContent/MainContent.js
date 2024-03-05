import { CountdownTimer } from "../../components/CountdownTimer/CountdownTimer";
import { InputDate } from "../../components/InputDate/InputDate";
import { ChosenTime } from "../../components/ChosenTime/ChosenTime";
import "./MainContent.css"

const MainContent = ({ targetDate, setFunction }) => {
    return (
        <div id="main-content">
            <div className="content-wrapper">
                <InputDate 
                    changeFunction={setFunction}
                />
                <CountdownTimer
                    targetDate={targetDate}
                />
                <ChosenTime dateString={targetDate}/>
            </div>
        </div>
    )
}

export { MainContent };