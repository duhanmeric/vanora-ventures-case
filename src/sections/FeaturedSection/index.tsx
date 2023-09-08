import { Box, Heading } from "@chakra-ui/react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import { AppCard } from "@/components";
import SliderNav from "./Slider/SliderNav";
import { sliderCards } from "./Slider/data";
import SliderPagination from "./Slider/SliderPagination";

const FeaturedSection = () => {
  return (
    <Box py={{ base: "2rem", lg: "4.5rem" }} px={{ base: 0, lg: "3.75rem" }}>
      <Heading
        textAlign={{ base: "left", lg: "center" }}
        pl={{ base: "1rem", lg: 0 }}
        fontSize="2rem"
        color="brown.200"
      >
        Featured Products
      </Heading>
      <Box
        mt="3rem"
        position="relative"
        paddingLeft={{ base: 0, lg: "4.5rem" }}
        paddingRight={{ base: 0, lg: "4.5rem" }}
      >
        <Swiper
          observer={true}
          observeParents={true}
          pagination={{
            dynamicBullets: true,
            clickable: true,
            el: ".custom-pagination",
          }}
          navigation={{
            nextEl: ".swiper-button-next-custom",
            prevEl: ".swiper-button-prev-custom",
          }}
          modules={[Navigation, Pagination]}
          spaceBetween={50}
          slidesPerView={3}
          breakpoints={{
            320: {
              slidesPerView: 1.1,
              spaceBetween: 10,
              centeredSlides: true,
            },
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 50,
            },
          }}
        >
          {sliderCards.map((slider) => (
            <SwiperSlide style={{ height: "auto" }} key={slider.id}>
              <AppCard title={slider.title} description={slider.description} />
            </SwiperSlide>
          ))}
        </Swiper>
        <Box display={{ base: "none", lg: "block" }}>
          <SliderNav />
        </Box>
        <SliderPagination />
      </Box>
    </Box>
  );
};

export default FeaturedSection;
