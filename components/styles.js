import { styled } from "../stitches.config";

export const Container = styled("div", {
  display: "grid",
  justifyContent: "space-evenly",
  alignItems: "start",
  gridTemplateAreas: "'list current' 'next next'",
  height: "100vh",
  width: "100vw",
});

export const Cities = styled("div", {
  gridArea: "list",
  padding: "1rem",
  backgroundColor: "$dark",
  alignSelf: "center",
  justifyContent: "center",
  minWidth: "400px",
  maxHeight: "600px",
  overflow: "auto",
  borderRadius: "5px",
});

export const Current = styled("div", {
  gridArea: "current",
  display: "flex",
  backgroundColor: "$dark",
  padding: "1rem",
  flexDirection: "column",
  alignSelf: "center",
  justifyContent: "center",
  minWidth: "400px",
  height: "600px",
  borderRadius: "5px",
});

export const NextDays = styled("div", {
  gridArea: "next",
  display: "fixed",
  bottom: "0",
  padding: "1rem",
  flexDirection: "row",
  "& h1": {},
  alignSelf: "center",
  justifyContent: "center",
  backgroundColor: "$dark",
  minWidth: "100%",
  borderRadius: "5px",
});

export const InputContainer = styled("div", {
  display: "flex",
  padding: "0.1rem",
});

export const Input = styled("input", {
  padding: "1rem",
  fontWeight: "bold",
  width: "100%",
  backgroundColor: "$grey800",
  color: "$green500",
  border: "none",
  outline: "none",
  borderWidth: "0px",
  borderRadius: "5px",
});

export const Button = styled("button", {
  padding: "1rem",
  position: "relative",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: "$grey800",
  color: "$green500",
  border: "none",
  height: "3rem",
  width: "5rem",
  left: "-0.5rem",
  borderRadius: "5px",
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
