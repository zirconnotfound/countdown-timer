import { useState } from "react";
import "./InputDate.css"

const InputDate = ({ changeFunction }) => {
    const [ value, setValue ] = useState("");

    return (
        <div className="input-box">
            <span className="input-title">Select a Date and Time:</span>
            <input className="time-input" type="datetime-local" onClick={(e) => e.currentTarget.showPicker()} onChange={(e) => setValue(e.target.value)} />
            <button class="choose-button" onClick={() => changeFunction(value)}>Change Date</button>
        </div>
    )
}

export { InputDate };