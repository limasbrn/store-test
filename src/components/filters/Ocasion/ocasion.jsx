import React from "react";
import { styled } from "@stitches/react";
import RadioFilter from "../radioFilter";

const FilterContainer = styled("div", {
  width: "fit-content",
  height: "fit-content",
  padding: "5px",
  borderRadius: "7px",
  gap: "15px",
  fontSize: "18px",
  "@media (min-width: 500px)": {
    fontSize: "13px",
  },
});

const Ocasion = ({ setOcasion }) => {
  const ocasions = ["formal", "casual", "festa"];

  return (
    <FilterContainer>
      <h5>Ocasion</h5>
      <hr />
      <br />
      {ocasions.map((item, index) => (
        <RadioFilter
          setValue={setOcasion}
          key={index}
          name="ocasion"
          index={index}
          value={item}
        />
      ))}
    </FilterContainer>
  );
};

export default Ocasion;
