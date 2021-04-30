import { styled } from "../stitches.config";
import React from "react";
import ContentLoader, { Instagram, BulletList } from "react-content-loader";

const Container = styled("div", {
  display: "flex",
  backgroundColor: "$light",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  "& svg": {
    padding: "2rem",
  },
  "& span": { display: "flex", width: "100%" },
  "& canvas": {},
});

const Loader = (props) => (
  <Container>
    <ContentLoader
      speed={2}
      height={350}
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
      {...props}
    >
      <rect x="50" y="0" rx="5" ry="5" width="200" height="20" />
      <circle cx="150" cy="100" r="50" />
      <rect x="100" y="175" rx="5" ry="5" width="100" height="9" />
      <rect x="50" y="200" rx="5" ry="5" width="200" height="9" />
      <rect x="0" y="250" rx="5" ry="5" width="300" height="100" />
    </ContentLoader>
    <span>
      <Instagram />
      <Instagram />
    </span>
    <BulletList />
  </Container>
);

export default Loader;
