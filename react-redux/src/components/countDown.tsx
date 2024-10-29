import { useEffect, useState } from "react";

function CountDown() {
  const [time, setTime] = useState<number>(10);

  useEffect(() => {
    if (time <= 0) return;
    setInterval(() => {
      setTime(time - 1);
    }, 1000);
  }, [time]);

  return (
    <div>
      <h1>{time}</h1>
    </div>
  );
}

export default CountDown;
