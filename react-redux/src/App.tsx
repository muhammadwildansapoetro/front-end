import { useDispatch } from "react-redux";
import { useCounter } from "./context/counterContext";
import DisplayCounter from "./components/display";
import { decrement, increment } from "./store/counterSlice";
import DisplayCounter2 from "./components/display2";
import CountDown from "./components/countDown";

function App() {
  const dispatch = useDispatch();
  const { count, increment: inc, decrement: dec } = useCounter();
  return (
    <div>
      {/* Redux Version */}
      <button onClick={() => dispatch(increment())}>increment</button>
      <DisplayCounter />
      <DisplayCounter2 />
      <button onClick={() => dispatch(decrement())}>decrement</button>
      <hr />
      {/* Context Version */}
      <button onClick={inc}>increment</button>
      <h1>{count}</h1>
      <button onClick={dec}>decrement</button>
      <hr />
      <CountDown />
    </div>
  );
}

export default App;
