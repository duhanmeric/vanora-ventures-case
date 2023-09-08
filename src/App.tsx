import { Box } from "@chakra-ui/react";
import { Header } from "@/components";
import { FeaturedSection, HeroSection, PromoSection } from "./sections";

function App() {
  return (
    <Box>
      <Header />
      <HeroSection />
      <FeaturedSection />
      <PromoSection />
    </Box>
  );
}

export default App;
