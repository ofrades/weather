import { useState } from "react";
import { useQuery } from "react-query";
import { getWeather } from "../services/weather";
import { styled } from "../stitches.config";

import { global } from "../stitches.config.js";

const globalStyles = global({
  body: { margin: 0, backgroundColor: "$grey800", color: "$grey100" },
});

const Input = styled("input", {
  padding: "1rem",
  backgroundColor: "$dark",
  color: "$green500",
  border: "none",
});

const Weather = ({ weather }) => {
  const [lat, setLat] = useState("39.74362");
  const [lon, setLon] = useState("-8.80705");
  const [city, setCity] = useState();
  const { isLoading, isError, data, error } = useQuery(
    "first",
    () => getWeather(lat, lon),
    { initialData: weather, refetchInterval: 60000 }
  );

  if (isLoading) {
    return <span>Loading...</span>;
  }

  const handleChange = (city) => {
    setCity(city);
    console.log(city);
  };

  if (isError) {
    return <span>Error: {error.message}</span>;
  }
  globalStyles();
  return (
    <div>
      <Input
        placeholder="City Name..."
        onChange={(e) => handleChange(e.target.value)}
      />
      <pre>Data: {JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};

export default Weather;
