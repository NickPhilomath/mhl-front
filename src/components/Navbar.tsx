import { HStack, Text } from "@chakra-ui/react";
import ColorModeSwitch from "./ColorModeSwitch";

const Navbar = () => {
  return (
    <HStack justifyContent="space-between" padding="25px">
      <Text>Nav</Text>
      <ColorModeSwitch />
    </HStack>
  );
};

export default Navbar;
