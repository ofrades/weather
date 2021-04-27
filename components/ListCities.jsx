import React from "react";
import { List, AddButton, RemoveButton } from "./styles";

const ListCities = ({ arrCities, setArrCities, setSearchQuery }) => {
  const showCity = (item) => {
    setSearchQuery(item);
  };

  const removeCity = (item) => {
    setArrCities(arrCities.filter((city) => city !== item));
  };

  return (
    <List>
      {arrCities.map((item) => (
        <li key={item}>
          <AddButton onClick={() => showCity(item)}>{item}</AddButton>
          <RemoveButton onClick={() => removeCity(item)}>Remove</RemoveButton>
        </li>
      ))}
    </List>
  );
};

export default ListCities;
