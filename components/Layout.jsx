import React, { useState, useEffect } from "react";
import { styled } from "../stitches.config";
import Weather from "./Weather.jsx";

import { global } from "../stitches.config.js";

const globalStyles = global({
  body: { margin: 0, backgroundColor: "$grey800", color: "$grey100" },
});

const Container = styled("div", {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

const Layout = ({ location }) => {
  globalStyles();

  return (
    <Container>
      <Weather location={location} />
    </Container>
  );
};

export default Layout;
