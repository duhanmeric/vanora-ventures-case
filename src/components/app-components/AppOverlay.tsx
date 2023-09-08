import { Box } from "@chakra-ui/react";

const AppOverlay = () => {
  return (
    <Box
      position="absolute"
      left={0}
      top={0}
      width="full"
      height="full"
      bgColor="black"
      opacity={0.24}
    ></Box>
  );
};

export default AppOverlay;
