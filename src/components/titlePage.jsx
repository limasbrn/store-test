import { styled } from "@stitches/react";

const TitleLayout = styled("div", {
  display: "flex",
  flexDirection: "column",
  height: "fit-content",
  padding: "10px 0px",
  
});
const Container = styled("div", {
  display: "flex",
  width:"100%",
  flexDirection: "column",
  justifyContent: "space-between",
  padding: "0px 30px",
});
const DescriptionP = styled("p", {
  fontSize: "14px",
  textAlign:"justify"
});

export const TitlePage = (props) => {
  return (
    <TitleLayout>
      <Container>
        <h3>{props.title}</h3>
        <DescriptionP>
          {props.description}
        </DescriptionP>
      </Container>
    </TitleLayout>
  );
};
