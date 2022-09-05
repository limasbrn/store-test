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

const Categories = ({ setCategory }) => {
  const categories = ["vestido", "saia", "calca", "short", "top"];

  return (
    <FilterContainer>
      <h5>Category</h5>
      <hr />
      <br />
      {categories.map((item, index) => (
        <RadioFilter
          setValue={setCategory}
          key={index}
          name="category"
          index={index}
          value={item}
        />
      ))}
    </FilterContainer>
  );
};

export default Categories;
