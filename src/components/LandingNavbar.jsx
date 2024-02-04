import React from "react";
import styled from "styled-components";

const NavbarContainer = styled.div`
  z-index: 5;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  width: 100vw;
  height: 3rem;
  padding: 1rem;
  background-color: black;
`;

const LogoContainer = styled.div`
  display: flex;
  justify-content: left;
  align-items: center;
  width: 50%;
  height: 100%;
  height: inherit;
  background-color: inherit;
`;

const BtnContainer = styled.div`
  display: flex;
  justify-content: right;
  align-items: center;
  width: 50%;
  height: 100%;
  height: inherit;
  background-color: inherit;
`;

const LogoImg = styled.img`
  margin-left: 3rem;
  width: 2rem;
  height: 3rem;
`;

const LogoText = styled.span`
  align-items: center;
  width: 12rem;
  height: 1.438rem;
  font-weight: 400;
  font-size: 1.25rem;
  line-height: 1.5rem;
  color: white;
`;

const AlarmImg = styled.img`
  width: 1.6rem;
  height: 1.6rem;
`;

const StyledBtn = styled.button`
  background-color: ${(props) => props.bgColor};
  padding: 0.6rem 1.8rem 0.6rem 1.8rem;
  border-radius: 0.5rem;
  border: 0;
  width: 10rem;
  height: 2.2rem;
  color: ${(props) => props.color};
`;
export default function LandingNavbar() {
  return (
    <NavbarContainer>
      <LogoContainer>
        <LogoImg
          alt="로고"
          src={`${process.env.PUBLIC_URL}/img/로고.svg`}
        ></LogoImg>
        <LogoText>MARIAJEU</LogoText>
      </LogoContainer>
      <BtnContainer>
        <AlarmImg
          alt="알람"
          src={`${process.env.PUBLIC_URL}/img/mdi_bell.svg`}
        ></AlarmImg>
        <StyledBtn bgColor={"transparent"} color={"white"}>
          로그인하기
        </StyledBtn>
        <StyledBtn
          bgColor={"white"}
          color={"black"}
          style={{ marginRight: "4rem" }}
        >
          앱으로 시작하기
        </StyledBtn>
      </BtnContainer>
    </NavbarContainer>
  );
}
