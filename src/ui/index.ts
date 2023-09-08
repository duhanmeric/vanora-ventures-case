import { extendTheme } from "@chakra-ui/react";
import "@fontsource/sora/400.css";
import "@fontsource/sora/500.css";
import "@fontsource/sora/600.css";
import "@fontsource/sora/700.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

const colors = {
  red: {
    100: "#FDE4E5",
    200: "#FA141B",
    300: "#ED1C24",
  },
  brown: {
    100: "#E0D8D7",
    200: "#400E03",
  },
  gray: {
    100: "#E0D8D7",
    200: "#525252",
    300: "#434448",
  },
};

const theme = extendTheme({
  colors,
  fonts: {
    heading: "Sora, sans-serif",
    body: "Sora, sans-serif",
    monospace: "Roboto, sans-serif",
  },
});

export default theme;
