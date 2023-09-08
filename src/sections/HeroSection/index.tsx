import { AppButton, AppOverlay } from "@/components";
import { VStack, Heading, Image, Box } from "@chakra-ui/react";
import HeroBanner from "@/assets/Hero.png";

const HeroSection = () => {
  return (
    <Box position="relative" width="full">
      <Image
        userSelect="none"
        objectFit="cover"
        width="full"
        src={HeroBanner}
        alt="Hero"
        minHeight="375px"
      />
      <AppOverlay />
      <Box
        position="absolute"
        top="50%"
        left="50%"
        transform="translate(-50%, -50%)"
        width={{ base: "full", lg: "auto" }}
      >
        <VStack gap={0}>
          <Heading
            fontSize={{ base: "2.375rem", lg: "3.5rem" }}
            textAlign="center"
            color="white"
          >
            Nothing can stop
          </Heading>
          <Heading
            fontSize={{ base: "2.375rem", lg: "3.5rem" }}
            textAlign="center"
            color="white"
          >
            you
          </Heading>
        </VStack>

        <Box mt={{ base: "1.5rem", lg: "2rem" }} textAlign="center">
          <AppButton variant="action" title="FIND OUT MORE" />
        </Box>
      </Box>
    </Box>
  );
};

export default HeroSection;
