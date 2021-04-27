import React, { useState } from "react";
import { InputContainer, Input, AddCity } from "./styles";

const Search = ({ setArrCities, setSearchQuery }) => {
  const [cityFromInput, setCityFromInput] = useState();

  const handleInput = (e) => {
    setCityFromInput(e.target.value);
  };

  const addCity = () => {
    setArrCities((oldArr) => [...oldArr, cityFromInput]);
    setSearchQuery(cityFromInput);
  };

  return (
    <InputContainer>
      <Input placeholder="Add Cities" onChange={handleInput} />
      <AddCity onClick={() => addCity()}>
        <a>+</a>
      </AddCity>
    </InputContainer>
  );
};

export default Search;
