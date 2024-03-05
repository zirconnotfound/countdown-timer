import { useEffect, useState } from "react";
import { Header } from "./layout/Header/Header";
import { MainContent } from "./layout/MainContent/MainContent";
import "./App.css"



function App() {
  const initDate = localStorage.getItem("dateSet") || "October 13, 2024 11:13:00";
  const [ date, setDate ] = useState(initDate);
  useEffect(() => {
    localStorage.setItem("dateSet", date);
  }, [date])
  return (
    <div className="App">
      <Header />
      <MainContent
        targetDate={date}
        setFunction={setDate}
      />
    </div>
  );
}

export default App;