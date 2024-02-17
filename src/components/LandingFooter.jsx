import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const FooterContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  width: 100vw;
  height: 3rem;
  padding: 1rem;
  background-color: #e6e5e8;
`;

const styledFooterLink = styled(Link)``;

const styledFooterTextBox = styled.div``;

export default function LandingFooter() {
  return (
    <FooterContainer>
      <div>
        <styledFooterLink>이용약관</styledFooterLink>
        <styledFooterLink>개인정보처리방침</styledFooterLink>
        <styledFooterLink>소개</styledFooterLink>
      </div>
      <div>
        <styledFooterLink>앱으로 시작하기</styledFooterLink>
        <styledFooterLink>로그인</styledFooterLink>
      </div>
      <styledFooterTextBox>
        MARIAJEU는 고객들을 위한 술안주 추천 서비스이며, 매장과의 연결을 통해
        편의를 제공하고 있습니다.
      </styledFooterTextBox>
      <styledFooterTextBox>MARIAJEU 사업자 정보</styledFooterTextBox>
      <div>
        <div>
          <span>대표</span>이명건
        </div>
        <div>
          <span>Tel.</span>010-4070-2430
        </div>
      </div>
      <div>
        <styledFooterTextBox>MARIAJEU</styledFooterTextBox>
        <div>Copyright @MARIAJEU</div>
      </div>
    </FooterContainer>
  );
}
