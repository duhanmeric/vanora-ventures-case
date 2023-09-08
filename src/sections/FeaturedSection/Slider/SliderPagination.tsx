import { Box, HStack } from "@chakra-ui/react";

const SliderPagination = () => {
  const activeBulletColor = "red.300";
  const inactiveBulletColor = "red.300";

  return (
    <HStack
      width="full"
      justifyContent="center"
      alignItems="center"
      mt={{ base: "1rem", lg: "3rem" }}
    >
      <Box
        ml="4rem"
        className="custom-pagination"
        sx={{
          ".swiper-pagination-bullet-active": {
            backgroundColor: activeBulletColor,
          },
          ".swiper-pagination-bullet": {
            backgroundColor: inactiveBulletColor,
          },
        }}
      ></Box>
    </HStack>
  );
};

export default SliderPagination;
