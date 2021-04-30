import React, { useEffect } from "react";
import { List, AddButton, RemoveButton } from "./styles";

const ListCities = ({ arrCities, setArrCities, setSearchQuery }) => {
  const showCity = (item) => {
    setSearchQuery(item);
  };

  const removeCity = (item) => {
    setArrCities(arrCities.filter((city) => city !== item));
  };

  useEffect(() => {
    localStorage.setItem("cities", JSON.stringify(arrCities));
  }, [arrCities]);

  return (
    <List>
      {arrCities.map((item, i) => (
        <div key={i}>
          <AddButton title="Show city" onClick={() => showCity(item)}>
            {item}
          </AddButton>
          <RemoveButton title="Remove city" onClick={() => removeCity(item)}>
            🗑️
          </RemoveButton>
        </div>
      ))}
    </List>
  );
};

export default ListCities;
