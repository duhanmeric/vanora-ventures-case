import { AppButton, AppOverlay } from "@/components";
import { Box, HStack, Heading, Image, Text, VStack } from "@chakra-ui/react";
import PlayBtn from "@/assets/PlayBtn.png";
import videoCoverImg from "@/assets/videoCover.png";
import Volume from "@/assets/Volume.png";
import NextVideo from "@/assets/NextVideo.png";
import Play from "@/assets/Play.png";
import Caption from "@/assets/caption.png";
import fullScreen from "@/assets/fullScreen.png";
import PIP from "@/assets/PIP.png";
import Settings from "@/assets/settings.png";
import Theatre from "@/assets/theatre.png";
import { useMediaQuery } from "@chakra-ui/react";

const PromoSection = () => {
  const [isMobile] = useMediaQuery("(max-width: 768px)");

  return (
    <Box
      pb={{ base: "1rem", lg: "2.25rem" }}
      px={{ base: "1rem", lg: "4rem" }}
      bgColor="#434448"
    >
      <HStack
        py={{ base: "1rem", lg: "2.5rem" }}
        justifyContent="space-between"
        alignItems="center"
      >
        {isMobile ? (
          <Heading color="white" fontSize="1.5rem">
            Feel the excellent wet braking with Driveways!
          </Heading>
        ) : (
          <VStack gap={0} alignItems="flex-start">
            <Heading color="white" fontSize="2.5rem">
              Feel the excellent wet braking
            </Heading>
            <Heading color="white" fontSize="2.5rem">
              with Driveways!
            </Heading>
          </VStack>
        )}

        {!isMobile && (
          <Box maxWidth="19.25rem" width="full">
            <AppButton isFullWidth title="Watch All Videos" variant="action" />
          </Box>
        )}
      </HStack>
      <Box
        position="relative"
        backgroundImage={videoCoverImg}
        height="full"
        minHeight={isMobile ? "12.0625rem" : "43.75rem"}
        backgroundRepeat="no-repeat"
        backgroundPosition="center"
        backgroundSize="cover"
      >
        <AppOverlay />
        <VStack
          position="absolute"
          top="50%"
          left="50%"
          transform="translate(-50%, -50%)"
          borderRadius="md"
          cursor="pointer"
          width={{ base: "3rem", lg: "6.25rem" }}
          height={{ base: "3rem", lg: "6.25rem" }}
          rounded="full"
          zIndex={9999}
        >
          <Image width="full" height="full" src={PlayBtn} alt="play" />
        </VStack>
        <VStack
          gap="0.3rem"
          py="0.56rem"
          px="0.75rem"
          position="absolute"
          bottom={0}
          left={0}
          bgColor="black"
          opacity={0.9}
          width="full"
          height="2.8125rem"
        >
          <HStack gap={0} width="full">
            <Box bgColor="red.200" width="5rem" height="0.1875rem"></Box>
            <Box
              bgColor="brown.100"
              opacity={0.5}
              width="4rem"
              height="0.1875rem"
            ></Box>
            <Box
              bgColor="brown.100"
              opacity={0.2}
              width="full"
              height="0.1875rem"
            ></Box>
          </HStack>
          <HStack
            justifyContent="space-between"
            alignItems="center"
            px="0.75rem"
            gap={0}
            width="full"
          >
            <HStack gap={0}>
              <Box cursor="pointer">
                <Image src={Play} />
              </Box>
              <Box cursor="pointer" mr="1.25rem" ml="1.8125rem">
                <Image src={NextVideo} />
              </Box>
              <Box cursor="pointer">
                <Image src={Volume} />
              </Box>
              <Box cursor="pointer" ml="1rem">
                <Text
                  display={{ base: "none", lg: "block" }}
                  fontFamily="monospace"
                  fontSize="0.8125rem"
                  color="white"
                >
                  10:24 / 50:26
                </Text>
              </Box>
            </HStack>
            <HStack gap="1rem">
              <Box cursor="pointer">
                <Image src={Caption} />
              </Box>
              <Box cursor="pointer">
                <Image src={Settings} />
              </Box>
              <Box cursor="pointer">
                <Image src={PIP} />
              </Box>
              <Box cursor="pointer">
                <Image src={Theatre} />
              </Box>
              <Box cursor="pointer">
                <Image src={fullScreen} />
              </Box>
            </HStack>
          </HStack>
        </VStack>
      </Box>
      {isMobile && (
        <Box mt="1rem" width="full">
          <AppButton isFullWidth title="Watch All Videos" variant="action" />
        </Box>
      )}
    </Box>
  );
};

export default PromoSection;
