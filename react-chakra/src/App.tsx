import { Flex } from "@chakra-ui/react";
import DemoDrawer from "./components/my-components/drawer";
import { Avatar } from "./components/ui/avatar";

function App() {
  return (
    <div>
      <Flex
        bgColor={"teal.500"}
        h={"50px"}
        justifyContent={"space-between"}
        alignItems={"center"}
        px={"100px"}
      >
        <DemoDrawer />
        <Avatar />
      </Flex>
    </div>
  );
}

export default App;
