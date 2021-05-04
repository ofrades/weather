import { styled, keyframes } from "../stitches.config";
import { motion } from "framer-motion";

export const Container = styled("div", {
  display: "flex",
  flexDirection: "column",
  "@sm": {
    justifyContent: "start",
  },
  "@md": {
    justifyContent: "center",
    backgroundColor: "$light",
    padding: "4rem",
  },
  alignItems: "center",
  height: "100%",
  minHeight: "100%",
});

export const Card = styled(motion.div, {
  display: "flex",
  flexDirection: "column",
  "@sm": {
    maxWidth: "100vw",
  },
  "@md": {
    maxWidth: "50vw",
  },
  backgroundColor: "$grey800",
  width: "100%",
  padding: 0,
  height: "50%",
  boxShadow:
    "0 1rem 1rem 0 rgba(0, 0, 0, 0.1), 0 1rem 1rem 0 rgba(0, 0, 0, 0.1)",
});

export const Status = styled("div", {
  display: "flex",
  backgroundColor: "$grey800",
  justifyContent: "center",
  alignItemss: "center",
  variants: {
    status: {
      error: { backgroundColor: "$red600", color: "$grey100" },
      loading: { backgroundColor: "$blue600", color: "$grey100" },
      success: { backgroundColor: "$gree600", color: "$grey100" },
    },
  },
});

export const InputContainer = styled("div", {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "0.5rem",
});

export const Input = styled("input", {
  width: "100%",
  padding: "$2",
  height: "2rem",
  minHeight: "2rem",
  fontWeight: "bold",
  backgroundColor: "$dark",
  color: "$green500",
  marginLeft: "1px",
  border: "none",
  outline: "none",
  fontFamily: "$system",
  "&:hover": {
    backgroundColor: "$dark",
  },
});

export const AddCity = styled("div", {
  position: "relative",
  backgroundColor: "$green700",
  color: "$dark",
  outline: "none",
  "& a": {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "$2",
    minHeight: "2rem",
    height: "2rem",
    minWidth: "2rem",
    width: "2rem",
    border: "none",
    cursor: "pointer",
  },
  "&:hover": {
    backgroundColor: "$green500",
    color: "$dark",
  },
});

export const List = styled("div", {
  padding: "$2",
  "& div": {
    display: "flex",
    justifyContent: "space-between",
    margin: "0.5rem",
  },
});

export const AddButton = styled("button", {
  fontFamily: "$system",
  backgroundColor: "$green700",
  color: "$dark",
  padding: "$1",
  margin: "$1",
  border: "none",
  width: "100%",
  borderRadius: "$2",
  "&:hover": {
    backgroundColor: "$dark",
    color: "$green700",
  },
});

export const RemoveButton = styled("button", {
  backgroundColor: "$red600",
  color: "$dark",
  padding: "$1",
  margin: "$1",
  border: "none",
  borderRadius: "$2",
  "&:hover": {
    backgroundColor: "$dark",
    color: "$red500",
  },
});

export const CurrentContainer = styled("div", {
  display: "flex",
  padding: "$2",
  backgroundColor: "$grey800",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  borderRadius: "$2",
});

export const CurrentWeather = styled("div", {
  textAlign: "center",
  color: "$grey500",
  width: "90%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  fontFamily: "$system",
  "& img": {
    width: "25%",
  },
  "& canvas": {},
});

export const CityTitle = styled("h1", {
  textAlign: "center",
  fontFamily: "$serif",
  color: "$yellow500",
  fontSize: "2.5rem",
});

export const NextDays = styled("div", {
  padding: "$2",
  display: "flex",
  flexDirection: "row",
  overflowX: "auto",
  fontSize: "0.75rem",
  backgroundColor: "$grey800",
  "& div": {
    borderRadius: "$2",
    backgroundColor: "$dark",
    width: "50px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    border: "3px solid $grey800",
    minWidth: "10rem",
  },
});

export const ConvertTemp = styled("div", {
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
  overflowX: "auto",
  padding: "0 0.5rem",
});

export const Celsius = styled("span", {
  variants: {
    metrics: {
      c: { backgroundColor: "$grey700", color: "$green500" },
      f: { backgroundColor: "$dark", color: "$grey500" },
    },
  },
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  border: "3px solid $grey800",
  width: "100%",
  color: "$yellow400",
  cursor: "pointer",
  "&:hover": {
    backgroundColor: "$green500",
    color: "$dark",
  },
});
export const Fahrenheit = styled("span", {
  variants: {
    metrics: {
      c: { backgroundColor: "$dark", color: "$grey500" },
      f: { backgroundColor: "$grey700", color: "$green500" },
    },
  },
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  border: "3px solid $grey800",
  width: "100%",
  cursor: "pointer",
  "&:hover": {
    backgroundColor: "$green500",
    color: "$dark",
  },
});

const rotate = keyframes({
  from: { transform: "rotate(0deg)" },
  to: { transform: "rotate(360deg)" },
});

export const LoadingIcon = styled("i", {
  position: "absolute",
  fontStyle: "normal",
  animation: `${rotate} 2s linear infinite`,
});
