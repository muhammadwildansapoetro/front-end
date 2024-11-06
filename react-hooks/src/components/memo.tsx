import { useMemo, useState } from "react";

export default function ComponentUseMemo() {
  const [number, setNumber] = useState<number>(0);
  const [count, setCount] = useState<number>(0);

  const incrementNumber = () => {
    setNumber(number + 1);
  };
  const incrementCount = () => {
    setCount(count + 1);
  };

  const isNumberEven = useMemo(() => {
    let i = 0;
    while (i < 2000000000) {
      i++;
    }
    return number % 2 === 0;
  }, [number]);

  return (
    <div>
      <button onClick={incrementNumber}>number: {number}</button>
      <div>{isNumberEven ? "Even" : "Odd"}</div>
      <button onClick={incrementCount}>count : {count}</button>
    </div>
  );
}
