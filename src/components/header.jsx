import { styled } from "@stitches/react";

const HeaderLayout = styled("header", {
  display: "flex",
  width: "100%",
  flexDirection:"column",
  height: "fit-content",
  backgroundColor:"white",
  border: "2px solid #F8F4F3",
  marginBottom: "30px",
  justifyContent: "center",
  alignItems:"center",
  padding:"10px 0px"
});
const Container = styled("div", {
  display: "flex",
  width: "90%",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "10px 0px",
  "@media (min-width: 1000px)": {
    width: "80%",
  },
});
const UlLink = styled("ul", {
  display: "flex",
  flexDirection: "row",
  gap: "30px",
});
const ListLink = styled("li", {
  display: "flex",
  fontSize: "14px",
  fontWeight: "600",
  textDecoration: "none",
});
const CategoryLink = styled("li", {
  display: "flex",
  fontSize: "12px",
  textDecoration: "none",
});

export const Header = () => {
  return (
    <HeaderLayout>
      <Container>
        <h3>Elipse.</h3>
        <UlLink>
          <ListLink>Home</ListLink>
          <ListLink>collection</ListLink>
          <ListLink>Blog</ListLink>
        </UlLink>
      </Container>
      <Container>
      <UlLink>
          <CategoryLink>Roupas</CategoryLink>
          <CategoryLink>Calçados</CategoryLink>
          <CategoryLink>Acessórios</CategoryLink>
        </UlLink>
      </Container>
    </HeaderLayout>
  );
};
