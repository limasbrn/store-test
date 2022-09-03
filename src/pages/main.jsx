import { useEffect, useState } from "react";
import { styled } from "@stitches/react";

const ProductList = styled("ul", {
  display: "flex",
  flex: "row",
  flexWrap: "wrap",
});
const Product = styled("li", {
  display: "flex",
  flexDirection: "column",
  width: "200px",
  height: "300px",
  padding: "15px",
  border: "1px solid black",
});
const Image = styled("img", {
  width: "100px",
  height: "auto",
});

export const Main = () => {
  const [clothing, setClothing] = useState({ products: [] });

  let api = "/productsCategory.json";

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(api);
      const data = await response.json();
      localStorage.setItem("data", JSON.stringify(data));
      setClothing(data);
    }
    fetchData();
  }, []);

  return (
    <ProductList>
      {clothing.products.map((item) => (
        <Product key={item.id}>
          <Image alt={item.name} src={item.image} />
          <h3>{item.name}</h3>
          <p>{item.description}</p>
          <h4>{item.price}</h4>
        </Product>
      ))}
    </ProductList>
  );
};
