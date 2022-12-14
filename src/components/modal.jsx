import React from "react";
import { styled } from "@stitches/react";

export const LayoutModal = styled("div", {
  display: "flex",
  position: "fixed",
  top: "0",
  left: "0",
  width: "100vW",
  height: "100vh",
  backgroundColor: "rgb(0,0,0,0.75)",
  justifyContent: "center",
  alignItems: "center",
});
export const BaseModal = styled("div", {
  display: "flex",
  flexDirection: "column",
  width: "fit-content",
  minHeight: "222px",
  height: "fit-content",
  overflow: "hidden",
  backgroundColor: "white",
  borderRadius: "5px",
  color: "Black",
  outline: "1px solid #D9D9D9",
  padding: "50px 20px 30px 20px",

  "@media (min-width: 500px)": {
    flexDirection: "row",
    padding: "50px 0px 50px 30px",
  },
});
export const TextContainer = styled("div", {
  display: "flex",
  width: "200px",
  flexDirection: "column",
  gap: "10px",
  marginTop: "20px",
  padding: "30px",

  "@media (min-width: 500px)": {
    marginTop: "0px",
  },
});
export const TextP = styled("p", {
  fontSize: "16px",
  fontWeight: "lighter",
  color: "grey",
  "@media (min-width: 500px)": {
    fontSize: "13px",
  },
});
export const DivStatus = styled("div", {
  display: "flex",
});
export const ButtonContainer = styled("div", {
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-end",
  padding: "15px",
});
const Image = styled("img", {
  width: "200px",
  height: "auto",
});
const ButtonModal = styled("button", {
  width: "60px",
  height: "fit-content",
  borderRadius: "5px ",
  padding:"5px 7px",
  border: "none",
  backgroundColor: "white",
  outline: "1px solid #D9D9D9",
  fontSize:"12px",
  "&:hover": {
    backgroundColor: "#D9D9D9",
  },
});

export const ModalCard = (props) => {
  return (
    <LayoutModal>
      <BaseModal>
        <Image src={props.image} alt={props.name} />
        <TextContainer>
        <ButtonContainer>
            <ButtonModal onClick={props.onClose}>close</ButtonModal>
          </ButtonContainer>
          <div>
            <h3>{props.name}</h3>
            <TextP>{props.description}</TextP>
            <br/>
            <TextP>Material: {props.material}</TextP>
          </div>
          <div>
            <h4>{props.price}</h4>
          </div>
        
        </TextContainer>
      </BaseModal>
    </LayoutModal>
  );
};

export default ModalCard;
