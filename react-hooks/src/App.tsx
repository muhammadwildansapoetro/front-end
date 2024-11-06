import { createContext, useState } from "react";
// import StateComp from "./components/state";
// import EffectComp from "./components/effect";
// import RefComp from "./components/ref";
// import ComponentUseMemo from "./components/memo";
// import ContextComp from "./components/context";
// import ReducerComp from "./components/reducer";
import CallbackComp from "./components/callback";

export const UserContext = createContext<string>("");

function App() {
  const [user] = useState<string>("Asd");
  return (
    <div>
      <UserContext.Provider value={user}>
        {/* <StateComp /> */}
        {/* <EffectComp /> */}
        {/* <RefComp /> */}
        {/* <ComponentUseMemo /> */}
        {/* <ContextComp /> */}
        {/* <ReducerComp /> */}
        <CallbackComp />
      </UserContext.Provider>
    </div>
  );
}

export default App;
