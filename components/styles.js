import { styled } from "../stitches.config";

export const Container = styled("div", {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "start",
  flexWrap: "wrap",
});

export const Cities = styled("div", {
  padding: "1rem",
  backgroundColor: "$dark",
  minWidth: "400px",
  alignSelf: "center",
  justifyContent: "center",
});

export const Current = styled("div", {
  display: "flex",
  padding: "1rem",
  flexDirection: "column",
  alignSelf: "center",
  justifyContent: "center",
  minWidth: "400px",
  backgroundColor: "$dark",
});

export const NextDays = styled("div", {
  display: "flex",
  padding: "1rem",
  flexDirection: "row",
  "& h1": {},
  alignSelf: "center",
  justifyContent: "center",
  backgroundColor: "$dark",
  minWidth: "100%",
});

export const InputContainer = styled("div", {
  display: "flex",
  padding: "0.1rem",
});

export const Input = styled("input", {
  padding: "1rem",
  width: "100%",
  backgroundColor: "$grey800",
  color: "$green500",
  border: "none",
});

export const Button = styled("button", {
  padding: "1rem",
  backgroundColor: "$dark",
  color: "$green500",
  border: "none",
  "&:hover": {
    backgroundColor: "$green500",
    color: "$dark",
  },
});

export const List = styled("div", {
  backgroundColor: "$dark",
  margin: "0",
  "& li": {
    listStyle: "none",
    color: "$grey100",
    padding: "0.4rem",
    margin: "0.1rem",
    backgroundColor: "$grey800",
    "& button": {
      backgroundColor: "$green700",
      padding: "0.3rem",
      margin: "0.3rem",
      border: "none",
      "&:hover": {
        backgroundColor: "$dark",
        color: "$green700",
      },
    },
  },
});
