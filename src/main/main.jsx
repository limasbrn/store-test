import { useEffect, useState } from "react";
import Filter from "../components/filters/filter";
import { TitlePage } from "../components/titlePage";
import ModalCard from "../components/modal";
import {
  ProductList,
  Product,
  Image,
  ImgContainer,
  FilterSection,
  Base,
  ButtonCard,
} from "./main.style";

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
                  material={item.material}
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
