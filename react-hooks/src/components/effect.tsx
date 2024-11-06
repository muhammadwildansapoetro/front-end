import { useEffect, useState } from "react";

function EffectComp() {
  const [count, setCount] = useState<number>(1);
  const [number, setNumber] = useState<number>(0);

  const getData = async () => {
    try {
      const res = await fetch(
        `https://jsonplaceholder.typicode.com/users/${count}`
      );
      const users = await res.json();
      console.log(users);
    } catch (error) {
      console.log(error);
    }
  };

  const incrementCount = () => {
    if (count == 10) {
      alert("count limit reached");
    } else {
      setCount(count + 1);
    }
  };

  useEffect(() => {
    getData();
  }, [count]);

  return (
    <div>
      <h2>count: {count}</h2>
      <button disabled={count == 10} onClick={incrementCount}>
        + count
      </button>

      <h2>number: {number}</h2>
      <button onClick={() => setNumber(number + 1)}>+ number</button>
    </div>
  );
}

export default EffectComp;
