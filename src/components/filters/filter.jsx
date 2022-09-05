import { styled } from "@stitches/react";
import Category from "./Categories/categories";
import Ocasion from "./Ocasion/ocasion";

const LayoutFilters = styled("div", {
  display: "flex",
  flexDirection: "column",
  fontSize: "22px",
  gap: "10px",

  "@media (min-width: 770px)": {
    fontSize: "16px",
  },
});
const BigFilterCont = styled("div", {
  display: "flex",
  flexDirection: "row",
  marginTop: "15px",
  gap: "30px",
  "@media (min-width: 500px)": {
    flexDirection: "column",
    gap: "15px",
  },
});
const Span = styled("span", {
  cursor: "pointer",
  fontWeight: "bolder",
  fontSize: "14px",
  "@media (min-width: 500px)": {
    fontSize: "12px",
  },
});

export const Filter = ({ setCategory, setOcasion }) => {
  let clear = () => {
    setCategory("");
    setOcasion("");
    window.location.reload(false);
  };
  return (
    <LayoutFilters>
      <BigFilterCont>
        <Category setCategory={setCategory} />
        <Ocasion setOcasion={setOcasion} />
      </BigFilterCont>
      <Span onClick={clear}>Clear filters</Span>
    </LayoutFilters>
  );
};

export default Filter;
