import { Box, Image } from "@chakra-ui/react";
import Prev from "@/assets/prev.png";
import Next from "@/assets/next.png";

const SliderNav = () => {
  return (
    <>
      <Box
        rounded="0.125rem"
        zIndex={9}
        position="absolute"
        left={0}
        top="calc(50% - 2rem)"
        transform="translate(0, -50%)"
        cursor="pointer"
        background="black"
        width="3rem"
        height="3rem"
        className="swiper-button-prev-custom"
      >
        <Image
          rounded="inherit"
          width="full"
          height="full"
          src={Prev}
          alt="prev nav"
        />
      </Box>
      <Box
        rounded="0.125rem"
        zIndex={9}
        position="absolute"
        right={0}
        top="calc(50% - 2rem)"
        transform="translate(0, -50%)"
        cursor="pointer"
        background="black"
        width="3rem"
        height="3rem"
        className="swiper-button-next-custom"
      >
        <Image
          rounded="inherit"
          width="full"
          height="full"
          src={Next}
          alt="next nav"
        />
      </Box>
    </>
  );
};

export default SliderNav;
