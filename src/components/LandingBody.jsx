import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const LandingContainer = styled.div``;

const FirstPageWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100vw;
  height: 860px;
  position: relative;
`;

const FirstTextContaioner = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 3;
  color: white;
  position: absolute;
  top: 19rem;
  height: auto;
`;

const SecondPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 1080px;
  position: relative;
  background-color: white;
`;
const ThirdPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 1080px;
  position: relative;
  background: rgb(255, 255, 255);
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 1) 0%,
    rgba(195, 163, 220, 1) 100%
  );
`;
const SecondTextContaioner = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: black;
`;

const FirstPageStartBtn = styled.button`
  background-color: rgba(255, 255, 255, 0.5);
  padding: 0.6rem 1.8rem 0.6rem 1.8rem;
  border-radius: 0.5rem;
  border: 0;
  width: 20rem;
  height: 4rem;
  color: rgba(255, 255, 255);
`;

const LastPageStartBtn = styled.button`
  background-color: #33134b;
  opacity: 0.5;
  padding: 0.6rem 1.8rem 0.6rem 1.8rem;
  border-radius: 4rem;
  border: 0;
  width: 20rem;
  height: 4rem;
  font-size: 1.2rem;
  color: rgba(255, 255, 255);
  margin-top: 2.2rem;
`;

const BackGroundImg = styled.img`
  position: absolute;
  z-index: 1;
  width: 100%; /* Make the image width 100% of the screen */
  height: auto; /* Maintain aspect ratio */
  object-fit: cover; /* Ensure the image covers the entire container */
`;

const AppImg = styled.img`
  margin-top: 30rem;
  width: 50%;
  height: 50%;
`;

export default function LandingBody() {
  return (
    <LandingContainer>
      <FirstPageWrapper>
        <BackGroundImg
          src={`${process.env.PUBLIC_URL}/img/backGroundWine.svg`}
        ></BackGroundImg>
        <FirstTextContaioner>
          <h1 style={{ fontSize: "3rem" }}>
            가장 잘 어울리는<br></br>음식을 찾아보세요.
          </h1>
          <p style={{ fontSize: "1.2rem", marginBottom: "3rem" }}>
            MARIAJEU와 함께 체계적으로, 맛있는 술자리를 만들어 보세요.
            <br></br>여러분의 추억을 담당할 추천 서비스입니다.
          </p>
          <Link to="/signin">
            <FirstPageStartBtn>MARIAJEU 시작하기</FirstPageStartBtn>
          </Link>
        </FirstTextContaioner>
      </FirstPageWrapper>
      <SecondPageWrapper>
        <AppImg src={`${process.env.PUBLIC_URL}/img/Picture01.svg`}></AppImg>
        <SecondTextContaioner>
          <h1 style={{ fontSize: "2rem", color: "#B83333" }}>
            와인의 특성을 선택해 보세요.
          </h1>
          <p style={{ fontSize: "1.2rem", marginBottom: "8rem" }}>
            각 와인의 종류마다 설정해둔 특성을 선택하면<br></br>
            MARIAJEU만의 특별한 음식을 추천해 드립니다.
          </p>
        </SecondTextContaioner>
      </SecondPageWrapper>
      <SecondPageWrapper>
        <AppImg src={`${process.env.PUBLIC_URL}/img/Picture02.svg`}></AppImg>
        <SecondTextContaioner>
          <h1 style={{ fontSize: "2rem", color: "#B83333" }}>
            원하는 매장을 찾아보세요.
          </h1>
          <p style={{ fontSize: "1.2rem", marginBottom: "8rem" }}>
            선택한 특성에 따른 여러분에게 어울리는<br></br>
            콜키지 매장을 MARIAJEU에서 제공해 드립니다.
          </p>
        </SecondTextContaioner>
      </SecondPageWrapper>
      <SecondPageWrapper>
        <AppImg src={`${process.env.PUBLIC_URL}/img/Picture03.svg`}></AppImg>
        <SecondTextContaioner>
          <h1 style={{ fontSize: "2rem", color: "#B83333" }}>
            여러분의 추억을 기록해 보세요.
          </h1>
          <p style={{ fontSize: "1.2rem", marginBottom: "8rem" }}>
            음식/와인에 대한 TASTING NOTE를 기록하고<br></br>
            MARIAJEU에서 다양한 추억을 공유해 보세요.
          </p>
        </SecondTextContaioner>
      </SecondPageWrapper>
      <ThirdPageWrapper>
        <h1 style={{ fontSize: "3rem", color: "#000000" }}>
          국내 와인 술안주 추천 서비스로<br></br> 당신에게 추억을 선물하세요
        </h1>
        <Link to="/signin">
          <LastPageStartBtn>MARIAJEU 시작하기</LastPageStartBtn>
        </Link>
      </ThirdPageWrapper>
    </LandingContainer>
  );
}
