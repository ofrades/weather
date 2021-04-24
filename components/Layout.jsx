import { useState, useEffect } from "react";
import { useQuery } from "react-query";
import { styled } from "../stitches.config";
import Weather from "./Weather.jsx";

import { global } from "../stitches.config.js";

const globalStyles = global({
  body: { margin: 0, backgroundColor: "$grey800", color: "$grey100" },
});

const Container = styled("div", {});

const Layout = ({ location }) => {
  globalStyles();

  return (
    <Container>
      <Weather location={location} />
    </Container>
  );
};

export default Layout;
