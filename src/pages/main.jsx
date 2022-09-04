import { useEffect, useState } from "react";
import { styled } from "@stitches/react";
import Filter from "../components/filters/filter";

const ProductList = styled("ul", {
  display: "grid",
  gridTemplateColumns: "repeat(4, 1fr)",
  padding: "15px",
  gap: "15px",
});
const Product = styled("li", {
  display: "flex",
  flexDirection: "column",
  width: "170px",
  height: "210px",
  padding: "15px",
  border: "1px solid #F8F4F3",
  borderRadius: "5px",
  boxShadow: "0px 0px 3px rgb(0, 0, 0, 0.10)",
  gap: "5px",
  fontSize: "13px",
});
const Image = styled("img", {
  width: "100px",
  height: "auto",
});
const ImgContainer = styled("div", {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});
const FilterSection = styled("nav", {
  display: "flex",
  flexDirection: "column",
  minWidth: "170px",
  height: "fit-content",
  padding:"10px",
  border: "1px solid #F8F4F3",
  borderRadius: "5px",
  boxShadow: "0px 0px 3px rgb(0, 0, 0, 0.10)",
  margin: "15px",
});
const Base = styled("section", {
  display: "flex",
  flexDirection: "row",
  justifyContent:"center",
});

export const Main = () => {
  const [clothing, setClothing] = useState({ products: [] });
  const [category, setCategory] = useState("");
  const [ocasion, setOcasion] = useState("");

  let api = "/productsCategory.json";

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(api);
      const data = await response.json();
      localStorage.setItem("data", JSON.stringify(data));
      setClothing(data);
      console.log(clothing);
    }
    fetchData();
  }, [category, ocasion]);

  return (
    <Base>
      <FilterSection>
        <h4>Filters</h4>
        <Filter setCategory={setCategory} setOcasion={setOcasion} />
      </FilterSection>

      <ProductList>
        {clothing.products.map((item) => (
          <Product key={item.id}>
            <ImgContainer>
              <Image alt={item.name} src={item.image} />
            </ImgContainer>
            <h4>{item.name}</h4>
            <p>{item.description}</p>
            <h5>{item.price}</h5>
          </Product>
        ))}
      </ProductList>
    </Base>
  );
};

export default Main;
