import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const FooterContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 18rem;
  padding: 1rem;
  background-color: #e6e5e8;
`;

const FooterInnerContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;
`;

const FooterColumnContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;
`;

const StyledFooterLink = styled(Link)`
  border-right: solid black 1px;
  text-decoration: none;
  padding: 0 1rem 0 1rem;
  color: black;
`;

export default function LandingFooter() {
  return (
    <FooterContainer>
      <FooterInnerContainer>
        <StyledFooterLink to="#">이용약관</StyledFooterLink>
        <StyledFooterLink to="#">개인정보처리방침</StyledFooterLink>
        <StyledFooterLink to="#">소개</StyledFooterLink>
      </FooterInnerContainer>
      <FooterInnerContainer>
        <StyledFooterLink to="#">앱으로 시작하기</StyledFooterLink>
        <StyledFooterLink to="/signin">로그인</StyledFooterLink>
      </FooterInnerContainer>

      <FooterInnerContainer>
        <div>
          MARIAJEU는 고객들을 위한 술안주 추천 서비스이며, 매장과의 연결을 통해
          편의를 제공하고 있습니다.
        </div>
      </FooterInnerContainer>

      <FooterColumnContainer>
        <div>MARIAJEU 사업자 정보</div>
        <div>
          <StyledFooterLink to="#">
            <span>대표</span>이명건
          </StyledFooterLink>
          <StyledFooterLink to="#">
            <span>Tel.</span>010-4070-2430
          </StyledFooterLink>
        </div>
      </FooterColumnContainer>

      <FooterColumnContainer>
        <div>MARIAJEU</div>
        <div>Copyright @MARIAJEU</div>
      </FooterColumnContainer>
    </FooterContainer>
  );
}
