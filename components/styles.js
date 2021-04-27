import { styled } from "../stitches.config";

export const Container = styled("div", {
  display: "flex",
  flexDirection: "column",
  "@sm": {
    justifyContent: "start",
  },
  "@md": {
    justifyContent: "center",
  },
  alignItems: "center",
  height: "100%",
  width: "100%",
  minWidth: "100vw",
  minHeight: "100vh",
});

export const Card = styled("div", {
  display: "flex",
  flexDirection: "column",
  maxWidth: "100%",
  padding: 0,
  height: "50%",
  boxShadow:
    "0 1rem 1rem 0 rgba(0, 0, 0, 0.1), 0 1rem 1rem 0 rgba(0, 0, 0, 0.1)",
});

export const Loading = styled("div", {
  display: "flex",
  backgroundColor: "$dark",
  flexDirection: "column",
  width: "400px",
  maxWidth: "100%",
  padding: 0,
  height: "200px",
  boxShadow:
    "0 1rem 1rem 0 rgba(0, 0, 0, 0.1), 0 1rem 1rem 0 rgba(0, 0, 0, 0.1)",
});

export const InputContainer = styled("div", {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
});

export const Input = styled("input", {
  width: "100%",
  padding: "$2",
  height: "2rem",
  fontWeight: "bold",
  backgroundColor: "$dark",
  color: "$green500",
  marginLeft: "1px",
  border: "none",
  outline: "none",
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
    height: "2rem",
    width: "2rem",
    border: "none",
  },
  "&:hover": {
    backgroundColor: "$green500",
    color: "$dark",
  },
});

export const CityTitle = styled("h1", {
  textAlign: "center",
  color: "$yellow500",
});

export const CurrentWeather = styled("h2", {
  textAlign: "center",
  color: "$grey500",
});

export const List = styled("div", {
  padding: "$2",
  "& li": {
    listStyle: "none",
    color: "$grey100",
    backgroundColor: "$grey800",
    display: "flex",
    justifyContent: "space-between",
    borderRadius: "$2",
    padding: "$2",
    margin: "$2 0",
  },
});

export const AddButton = styled("button", {
  backgroundColor: "$green700",
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
  backgroundColor: "$red500",
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
  "& img": {
    width: "50%",
  },
});

export const NextDays = styled("div", {
  display: "flex",
  flexDirection: "row",
  backgroundColor: "$grey500",
  overflowX: "auto",
  fontSize: "0.75rem",
  "& div": {
    borderRadius: "$2",
    width: "50px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    border: "3px solid $grey800",
    minWidth: "10rem",
  },
});
