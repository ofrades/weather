import React, { useState, useEffect } from "react";
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
  };

  useEffect(() => {
    if (cityFromInput?.length > 2) {
      const delayDebounceFn = setTimeout(() => {
        setSearchQuery(cityFromInput);
      }, 1000);
      return () => clearTimeout(delayDebounceFn);
    }
  }, [cityFromInput]);

  return (
    <InputContainer>
      <Input
        placeholder="Add Cities"
        value={cityFromInput}
        type="text"
        onChange={handleInput}
        aria-label="Search"
        aria-required="true"
        autoFocus
      />

      <AddCity onClick={() => addCity()}>
        {isFetching !== 0 ? (
          <a>
            <LoadingIcon>⏳</LoadingIcon>
          </a>
        ) : (
          <a title="Add to list">📋</a>
        )}
      </AddCity>
    </InputContainer>
  );
};

export default Search;
