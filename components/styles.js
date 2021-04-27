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
  backgroundColor: "$dark",
  padding: "1rem",
  flexDirection: "column",
  maxWidth: "94%",
  height: "50%",
  boxShadow:
    "0 1rem 1rem 0 rgba(0, 0, 0, 0.1), 0 1rem 1rem 0 rgba(0, 0, 0, 0.1)",
});

export const Loading = styled("div", {
  display: "flex",
  backgroundColor: "$dark",
  padding: "1rem",
  flexDirection: "column",
  width: "400px",
  maxWidth: "94%",
  height: "200px",
  boxShadow:
    "0 1rem 1rem 0 rgba(0, 0, 0, 0.1), 0 1rem 1rem 0 rgba(0, 0, 0, 0.1)",
});

export const InputContainer = styled("div", {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  width: "100%",
});

export const Input = styled("input", {
  width: "100%",
  padding: "$2",
  height: "2rem",
  fontWeight: "bold",
  backgroundColor: "$grey900",
  color: "$green500",
  border: "none",
  outline: "none",
  borderWidth: "0px",
  "&:hover": {
    backgroundColor: "$grey800",
  },
});

export const AddCity = styled("div", {
  position: "relative",
  backgroundColor: "$grey800",
  color: "$green500",
  border: "1px solid $dark",
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
  backgroundColor: "$grey800",
  padding: "$3",
  flexDirection: "column",
  justifyContent: "center",
  borderRadius: "$2",
  "& img": {
    alignSelf: "center",
    width: "50%",
  },
});

export const NextDays = styled("div", {
  display: "flex",
  flexDirection: "row",
  backgroundColor: "$dark",
  overflowX: "auto",
  padding: "$3",
  fontSize: "0.75rem",
  "& div": {
    borderRadius: "$2",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
});
