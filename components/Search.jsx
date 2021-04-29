import React, { useState } from "react";
import { InputContainer, Input, AddCity, LoadingIcon } from "./styles";

const Search = ({ setArrCities, setSearchQuery, isFetching }) => {
  const [cityFromInput, setCityFromInput] = useState();

  const handleInput = (e) => {
    setCityFromInput(e.target.value);
  };

  const addCity = () => {
    setArrCities((oldArr) =>
      oldArr.includes(cityFromInput) ? [...oldArr] : [...oldArr, cityFromInput]
    );
    setSearchQuery(cityFromInput);
    setCityFromInput("");
  };

  return (
    <InputContainer>
      <Input
        placeholder="Add Cities"
        value={cityFromInput}
        type="text"
        onChange={handleInput}
      />

      <AddCity onClick={() => addCity()}>
        {isFetching !== 0 ? (
          <a>
            <LoadingIcon>⏳</LoadingIcon>
          </a>
        ) : (
          <a>+</a>
        )}
      </AddCity>
    </InputContainer>
  );
};

export default Search;
