import { Box, HStack, Text } from "@chakra-ui/react";
import { AppButton } from "..";

type Props = {
  title: string;
  description: string;
};

const AppCard = ({ title, description }: Props) => {
  return (
    <Box
      height="full"
      rounded="0.125rem"
      position="relative"
      borderWidth={1}
      borderStyle="solid"
      borderColor="brown.100"
    >
      <Box pt="1.5rem" px="0.75rem">
        <Text
          fontWeight="semibold"
          fontSize="1.25rem"
          lineHeight="136%"
          color="brown.200"
        >
          {title}
        </Text>
        <Text mt="0.75rem" mb="1.5rem" fontSize="sm" lineHeight="160%">
          {description}
        </Text>
      </Box>
      <HStack px="0.5rem" pb="1.2rem">
        <AppButton
          isFullWidth
          isSmallText
          variant="secondary"
          title="Learn More"
        />
        <AppButton
          isFullWidth
          isSmallText
          variant="primary"
          title="Find a Dealer"
        />
      </HStack>
      <Box
        position="absolute"
        bottom={0}
        width="full"
        left={0}
        borderBottomLeftRadius="0.125rem"
        borderBottomRightRadius="0.125rem"
        borderWidth={4}
        borderStyle="solid"
        borderColor="red.300"
      ></Box>
    </Box>
  );
};

export default AppCard;
