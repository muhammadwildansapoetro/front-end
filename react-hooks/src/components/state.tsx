import { useState } from "react";
import "../App.css";

function StateComp() {
  const [count, setCount] = useState<number>(0);
  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    setCount(count - 1);
  };

  const [name, setName] = useState<string>("");
  const showName = (e: any) => {
    setName(e.target.value);
  };

  return (
    <div>
      {/* <button onClick={() => setCount(count + 1)}>+</button> */}
      <button onClick={increment}>+</button>
      <h1>{count}</h1>
      <button onClick={decrement}>-</button>
      <h1>{name}</h1>
      <input type="text" onChange={showName} />
    </div>
  );
}

export default StateComp;
