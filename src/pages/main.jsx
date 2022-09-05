import { useEffect, useState } from "react";
import { styled } from "@stitches/react";
import Filter from "../components/filters/filter";
import { TitlePage } from "../components/titlePage";
import ModalCard from "../components/modal";

const ProductList = styled("ul", {
  display: "grid",
  gridTemplateColumns: "repeat(2, 1fr)",
  padding: "15px",
  gap: "7px",
  "@media (min-width: 700px)": {
    gridTemplateColumns: "repeat(3, 1fr)",
  },
  "@media (min-width: 1000px)": {
    gridTemplateColumns: "repeat(4, 1fr)",
    gap: "15px",
  },
});
const Product = styled("li", {
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
const Base = styled("section", {
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
const ButtonCard = styled("button", {
  width:"fit-content",
  height:"fit-content",
  padding:"5px 7px",
  borderRadius:"5px",
  border:"1px solid #D9D9D9",
  backgroundColor:"white",
  "&:hover":{
  backgroundColor:"#D9D9D9",
  },
});

export const Main = () => {
  const [clothing, setClothing] = useState({ products: [] });
  const [category, setCategory] = useState(null);
  const [ocasion, setOcasion] = useState("");
  const [modal, setModal] = useState();

  let api = "/productsCategory.json";

  
    async function fetchData() {
      const response = await fetch(api);
      const data = await response.json();
      localStorage.setItem("data", JSON.stringify(data));
      setClothing(data);
      console.log(data);
    }

    useEffect(() => {
      if (window.localStorage !== undefined) {
        const data = window.localStorage.getItem("data");
  
        if (data !== null) {
          setClothing(JSON.parse(data));
        }
      }
    }, []);
    
    useEffect(() => {
      fetchData();
    }, [category, ocasion]);
  

  return (
    <Base>
      <FilterSection>
        <h4>Filters</h4>
          <Filter setCategory={setCategory} setOcasion={setOcasion} />
      </FilterSection>

      <div>
        <TitlePage
          title="Elipse In."
          description="Encontre as tendências do momento do dia a dia da moda feminina."
        />
        <ProductList>
          {clothing.products.map((item) => (
            <Product key={item.id}>
              <ImgContainer>
                <Image alt={item.name} src={item.image} />
              </ImgContainer>
              <h4>{item.name}</h4>
              <p>{item.description}</p>
              <h5>{item.price}</h5>
              <ButtonCard
                onClick={() => {
                  console.log(item.id);
                  setModal(item.id);
                }}
              >
                ver mais
              </ButtonCard>

              {modal === item.id && (
                <ModalCard
                  onClose={() => setModal(" ")}
                  image={item.image}
                  name={item.name}
                  description={item.description}
                  price={item.price}
                />
              )}
            </Product>
          ))}
        </ProductList>
      </div>
    </Base>
  );
};

export default Main;
