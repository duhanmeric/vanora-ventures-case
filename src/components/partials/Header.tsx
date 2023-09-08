import { useEffect, useState } from "react";
import { Box, HStack, Image, Stack, Text } from "@chakra-ui/react";
import Logo from "@/assets/logo.png";
import Hamburger from "@/assets/hamburgerIcon.png";
import RightArrow from "@/assets/rightArrow.png";
import CloseBtn from "@/assets/close.png";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    {
      id: crypto.randomUUID(),
      label: "Show All Tyres",
    },
    {
      id: crypto.randomUUID(),
      label: "Find a Dealer",
    },
    {
      id: crypto.randomUUID(),
      label: "Guides & Videos",
    },
    {
      id: crypto.randomUUID(),
      label: "Go with",
    },
    {
      id: crypto.randomUUID(),
      label: "Service & Help",
    },
  ];

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isMobileMenuOpen]);

  return (
    <Box bgColor="white" height={{ base: "3.5rem", lg: "4rem" }} width="full">
      <HStack
        px={{ base: "1.325rem", lg: "3.75rem" }}
        py="0.625rem"
        height="full"
        justifyContent="space-between"
      >
        <Box
          width={{ base: "8.75rem", lg: "auto" }}
          height={{ base: "2rem", lg: "auto" }}
          cursor="pointer"
        >
          <Image src={Logo} alt="Vanora Ventures Logo" />
        </Box>
        <Stack
          zIndex={999999}
          position={{ base: "fixed", lg: "unset" }}
          left={isMobileMenuOpen ? "0" : "-100%"}
          top="54px"
          height={{ base: "full", lg: "auto" }}
          width={{ base: "full", lg: "auto" }}
          direction={{ base: "column", lg: "row" }}
          display={{ base: "flex", lg: "flex" }}
          bgColor={{ base: "brown.200", lg: "transparent" }}
          transition="left .2s"
          gap={{ base: "0", lg: "2.5rem" }}
        >
          {navLinks.map((link) => (
            <HStack
              p={{ base: "1.5rem", lg: "0" }}
              width={{ base: "full", lg: "auto" }}
              justifyContent="space-between"
              borderBottomWidth={{ base: 1, lg: 0 }}
              borderStyle="solid"
              borderColor="#525252"
              key={link.id}
            >
              <Text
                cursor="pointer"
                color={{ base: "white", lg: "brown.200" }}
                fontSize="sm"
                fontWeight="semibold"
                textTransform="uppercase"
              >
                {link.label}
              </Text>
              <Box display={{ base: "block", lg: "none" }}>
                <Image src={RightArrow} alt="right" />
              </Box>
            </HStack>
          ))}
        </Stack>
        {isMobileMenuOpen ? (
          <Box
            cursor="pointer"
            display={{ base: "block", lg: "none" }}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <Image src={CloseBtn} alt="close" />
          </Box>
        ) : (
          <Box
            cursor="pointer"
            display={{ base: "block", lg: "none" }}
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <Image opacity={0.2} src={Hamburger} alt="menu" />
          </Box>
        )}
      </HStack>
    </Box>
  );
};

export default Header;
