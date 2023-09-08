import { Button } from "@chakra-ui/react";

type Props = {
  title: string;
  variant: "primary" | "secondary" | "action";
  isSmallText?: boolean;
  isFullWidth?: boolean;
};

const AppButton = ({ title, variant, isSmallText, isFullWidth }: Props) => {
  let bgColor, color;

  switch (variant) {
    case "primary":
      bgColor = "red.300";
      color = "white";
      break;
    case "secondary":
      bgColor = "red.100";
      color = "red.300";
      break;
    case "action":
      bgColor = "white";
      color = "red.300";
      break;
    default:
      bgColor = "white";
      color = "red.300";
      break;
  }

  return (
    <Button
      fontSize={isSmallText ? "xs" : "md"}
      bgColor={bgColor}
      rounded={0}
      color={color}
      colorScheme="ghost"
      width={isFullWidth ? "full" : "auto"}
      height={isSmallText ? "3rem" : "3.25rem"}
      textTransform="uppercase"
    >
      {title}
    </Button>
  );
};

export default AppButton;
