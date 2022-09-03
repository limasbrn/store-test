import { styled } from "@stitches/react";

const HeaderLayout = styled("div", {
  display: "flex",
  width: "100%",
  height: "fit-content",
  padding: "10px 0px",
  backgroundColor: "LightGreen",
});

export const Header = () => {
  return (
    <HeaderLayout>
      <h3>Header</h3>
    </HeaderLayout>
  );
};
