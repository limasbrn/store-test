import { styled } from "@stitches/react";

const FooterLayout = styled("footer", {
  display: "flex",
  width: "100%",
  flexDirection: "column",
  height: "fit-content",
  backgroundColor: "#D9D9D9",
  outline: "#D9D9D9",
});
const AddInfo = styled("p", {
  fontSize: "11px",
  color: "#5F5F5F",
});
const InfoContainer = styled("div", {
  display: "flex",
  flexDirection: "column",
  padding: "15px",
  gap: "40px",
  "@media (min-width: 500px)": {
    flexDirection: "row",
  },
  "@media (min-width: 600px)": {
    padding: "15px 100px",
  },
});
const InfoContainer2 = styled("div", {
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "15px",
  gap: "10px",
  "@media (min-width: 500px)": {
    flexDirection: "row",
    padding: "10px 100px",
    gap: "0px",
  },
});

export const Footer = () => {
  return (
    <FooterLayout>
      <InfoContainer>
        <div>
          <h6>HELP & INFORMATION</h6>
          <AddInfo>Track Order</AddInfo>
          <AddInfo>Delivery & return</AddInfo>
          <AddInfo>FAQ</AddInfo>
        </div>
        <div>
          <h6>ABOUT ELIPSE</h6>
          <AddInfo>About us</AddInfo>
          <AddInfo>Contact us</AddInfo>
          <AddInfo>contact@contact.com</AddInfo>
        </div>
        <div>
          <h6>ABOUT THIS PROJECT</h6>
          <AddInfo>
            Created by <strong>Sabrina Silva</strong>
          </AddInfo>
          <AddInfo>linkedin.com/in/sabrinalsilva/</AddInfo>
          <AddInfo>lima.sbrn@gmail.com</AddInfo>
        </div>
      </InfoContainer>
      <hr />
      <InfoContainer2>
        <AddInfo>
          2022 <strong>Elipse.</strong> All rights reserved{" "}
        </AddInfo>
        <AddInfo>Privacy policy | Terms of use</AddInfo>
      </InfoContainer2>
    </FooterLayout>
  );
};
