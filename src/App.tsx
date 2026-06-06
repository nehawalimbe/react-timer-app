import { useEffect, useState } from "react";
import "./App.css";
import TimerDisplay from "./TimerDisplay";
import TimerButtons from "./TimerButtons";

function App() {
  type TimerStatus = "idle" | "running" | "paused";
  const [seconds, setSeconds] = useState(0);
  const [timerStatus, setTimerStatus] = useState<TimerStatus>("idle");
  useEffect(() => {
    let timer: number;
    if (timerStatus === 'running') {
      timer = setInterval(() => {
        setSeconds((prevSec) => prevSec + 1);
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [timerStatus]);

  const getFormattedTime = () => {
    const remainingSeconds = seconds % 60;
    const mins = Math.floor(seconds / 60);
    return `${String(mins).padStart(2, "0")}:${String(remainingSeconds).padStart(2, "0")}`;
  };

  const resetTimer = () => {
    setSeconds(0);
    setTimerStatus("idle");
  };


  const getBtnName = () => {
    if (timerStatus === "idle") {
      return "Start";
    } else if (timerStatus === "running") {
      return "Pause";
    } else if (timerStatus === "paused") {
      return "Resume";
    }
    return "Start";
  };

  const updateTimerState = () => {
    if (timerStatus === "idle") {
      setTimerStatus("running");
    } else if (timerStatus === "running") {
      setTimerStatus("paused");
    } else if (timerStatus === "paused") {
      setTimerStatus("running");
    }
  };
  return (
    <section id="center">
      <div>{seconds}</div>
      <TimerDisplay formattedTime={getFormattedTime()}></TimerDisplay>
      <div className="btn-container">
        <TimerButtons
          buttonName={getBtnName()}
          onClick={updateTimerState}
        ></TimerButtons>
        <TimerButtons
          buttonName="Reset"
          onClick={resetTimer}
        ></TimerButtons>
      </div>
    </section>
  );
}

export default App;
