import styled from "styled-components";

export const WineProfileContainer = styled.div`
  border: 0px solid #000;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const WineProfileTextArea = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0%;
`;

export const WineProfileTitle = styled.p`
  color: #000;
  font-family: Inter;
  font-size: 27.758px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin: 0;
`;

export const WineProfileSubtitle = styled.p`
  color: #000;
  font-family: Inter;
  font-size: 13.586px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin: 0;
`;

export const WineProfileBtnArea = styled.div``;

export const WineProfileBtn = styled.button`
  width: 96.094px;
  height: 27.156px;
  flex-shrink: 0;
  border-radius: 11.328px;
  border: 0.569px solid #4e286b;
  margin-right: 10.82px;
  margin-top: 38.086px;
  cursor: pointer;
  &:hover,
  &.active {
    background: #4e286b;
    color: #ffffff;
  }
`;
