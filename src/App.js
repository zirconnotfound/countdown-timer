import { useEffect, useState } from "react";
import { CountdownTimer } from "./components/CountdownTimer";
import { InputDate } from "./components/InputDate";
import "./App.css"
import { ChosenTime } from "./components/ChosenTime";


function App() {
  const initDate = localStorage.getItem("dateSet") || "October 13, 2024 11:13:00";
  const [ date, setDate ] = useState(initDate);
  useEffect(() => {
    localStorage.setItem("dateSet", date);
  }, [date])
  return (
    <div className="App">
      <CountdownTimer
        targetDate={date}
      />
      <ChosenTime dateString={date}/>
      <InputDate changeFunction={setDate} />
    </div>
  );
}

export default App;