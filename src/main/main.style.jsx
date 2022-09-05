import { styled } from "@stitches/react";

export const ProductList = styled("ul", {
  display: "grid",
  gridTemplateColumns: "repeat(2, 1fr)",
  padding: "15px 15px 30px 15px",
  gap: "7px",
  "@media (min-width: 700px)": {
    gridTemplateColumns: "repeat(3, 1fr)",
  },
  "@media (min-width: 1000px)": {
    gridTemplateColumns: "repeat(4, 1fr)",
    gap: "15px",
  },
});
export const Product = styled("li", {
  display: "flex",
  flexDirection: "column",
  width: "150px",
  height: "240px",
  padding: "15px",
  border: "1px solid #F8F4F3",
  borderRadius: "5px",
  boxShadow: "0px 0px 3px rgb(0, 0, 0, 0.10)",
  gap: "5px",
  fontSize: "15px",

  "&:hover": {
    outline: "1px solid #D9D9D9",
  },

  "@media (min-width: 500px)": {
    width: "130px",
    fontSize: "13px",
  },
  "@media (min-width: 700px)": {
    width: "150px",
  },
});
export const Image = styled("img", {
  width: "100px",
  height: "auto",
});
export const ImgContainer = styled("div", {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});
export const FilterSection = styled("nav", {
  display: "flex",
  flexDirection: "column",
  minWidth: "300px",
  height: "fit-content",
  padding: "10px",
  border: "1px solid #F8F4F3",
  borderRadius: "5px",
  boxShadow: "0px 0px 3px rgb(0, 0, 0, 0.10)",
  margin: "15px",

  "@media (min-width: 500px)": {
    minWidth: "110px",
    margin: "15px 0px 15px 15px",
  },
  "@media (min-width: 800px)": {
    minWidth: "170px",
  },
  "@media (min-width: 900px)": {
    minWidth: "200px",
    padding: "15px",
  },
  "@media (min-width: 1000px)": {
    minWidth: "150px",
  },
});
export const Base = styled("section", {
  display: "flex",
  position: "relative",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",

  "@media (min-width: 500px)": {
    flexDirection: "row",
    alignItems: "unset",
  },
});
export const ButtonCard = styled("button", {
  width: "fit-content",
  height: "fit-content",
  padding: "5px 7px",
  borderRadius: "5px",
  border: "1px solid #D9D9D9",
  backgroundColor: "white",
  "&:hover": {
    backgroundColor: "#D9D9D9",
  },
});
