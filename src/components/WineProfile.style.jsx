import styled from "styled-components";

export const WineProfileContainer = styled.div`
  width: 480px;
  height: 598px;
  border: 0px solid #000;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const WineProfileTextArea = styled.div`
  display: flex;
  flex-direction: column;
`;

export const WineProfileTitle = styled.p`
  color: #000;
  font-family: Inter;
  font-size: 35.429px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin: 0;
`;

export const WineProfileSubtitle = styled.p`
  color: #000;
  font-family: Inter;
  font-size: 17.35px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin: 0;
`;

export const WineProfileBtnArea = styled.div``;

export const WineProfileBtn = styled.button`
  width: 120.128px;
  height: 33.829px;
  flex-shrink: 0;
  border-radius: 13.808px;
  border: 0.69px solid #4e286b;
  margin-right: 13.81px;
  margin-top: 46.1px;
  cursor: pointer;
  &:hover,
  &.active {
    background: #4e286b;
    color: #ffffff;
  }
`;
