import { createCss } from "@stitches/react";

export const { theme, css, styled, global, getCssString } = createCss({
  theme: {
    colors: {
      dark: "#2b2d35",
      grey100: "#dddcd3",
      grey200: "#b9b9b6",
      grey300: "#9c9e9d",
      grey400: "#858789",
      grey500: "#73767c",
      grey600: "#63676f",
      grey700: "#575b65",
      grey800: "#414450",
      grey900: "#3e3f43",
      blue200: "#5fd1be",
      blue300: "#5fc0d2",
      blue400: "#609ad2",
      blue500: "#629ed9",
      blue600: "#6074d3",
      blue700: "#58659d",
      green400: "#b0c87c",
      green500: "#53bd97",
      green600: "#4ca585",
      green700: "#4e8b78",
      yellow400: "#d8c679",
      yellow500: "#fee787",
      yellow600: "#dbba7e",
      yellow700: "#dbba7e",
      red300: "#cea37f",
      red400: "#d88e79",
      red500: "#d38676",
      red600: "#b7776b",
    },
    space: {
      1: "5px",
      2: "10px",
      3: "15px",
      4: "20px",
      5: "25px",
      6: "35px",
    },
    sizes: {
      1: "5px",
      2: "10px",
      3: "15px",
      4: "20px",
      5: "25px",
      6: "35px",
    },
    fontSizes: {
      1: "12px",
      2: "13px",
      3: "15px",
      4: "17px",
      5: "19px",
      6: "21px",
    },
    fonts: {
      system: "system-ui",
    },
  },
  utils: {
    marginX: (config) => (value) => ({
      marginLeft: value,
      marginRight: value,
    }),
    marginY: (config) => (value) => ({
      marginTop: value,
      marginBottom: value,
    }),
    paddingX: (config) => (value) => ({
      paddingLeft: value,
      paddingRight: value,
    }),
    paddingY: (config) => (value) => ({
      paddingTop: value,
      paddingBottom: value,
    }),
  },
  media: {
    bp1: "@media (min-width: 520px)",
    bp2: "@media (min-width: 900px)",
  },
});

export const darkTheme = theme("dark-theme", {
  colors: {
    hiContrast: "hsl(206,2%,93%)",
    loContrast: "hsl(206,8%,8%)",

    gray100: "hsl(206,8%,12%)",
    gray200: "hsl(206,7%,14%)",
    gray300: "hsl(206,7%,15%)",
    gray400: "hsl(206,7%,24%)",
    gray500: "hsl(206,7%,30%)",
    gray600: "hsl(206,5%,53%)",
  },
  space: {},
  fonts: {},
});
