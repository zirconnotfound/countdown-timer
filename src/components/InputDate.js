import { useState } from "react";

const InputDate = ({ changeFunction }) => {
    const [ value, setValue ] = useState("");

    return (
        <div className="input-box">
            <input type="datetime-local" onChange={(e) => setValue(e.target.value)} />
            <button onClick={() => changeFunction(value)}>Change Date</button>
        </div>
    )
}

export { InputDate };