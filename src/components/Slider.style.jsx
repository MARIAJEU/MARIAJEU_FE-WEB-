import styled from "styled-components";

// Container
export const WineProfileSlideContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0;
  margin-top: 35.922px; /* 46.16px를 1280px 기준으로 조정 */
`;

export const ItemContainer = styled.div`
  display: flex;
`;

// Property Section
export const PropertyContainer = styled.div`
  display: flex;
  align-items: center;
  position: relative;
`;

export const InfoBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  border: 0.867px solid #4e286b; /* 1px를 1280px 기준으로 조정 */
  width: 15px;
  height: 15px;
  cursor: pointer;
  margin-right: 3.906px; /* 5px를 1280px 기준으로 조정 */
`;

export const MoreInfoModal = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 301.375px; /* 386px를 1280px 기준으로 조정 */
  height: 49.57px; /* 63.53px를 1280px 기준으로 조정 */
  top: 87.109px; /* 110px를 1280px 기준으로 조정 */
  left: 156.25px; /* 200px를 1280px 기준으로 조정 */
  border-radius: 6.914px; /* 8.85px를 1280px 기준으로 조정 */
  border: 0.625px solid #33134b; /* 0.8px를 1280px 기준으로 조정 */
  position: absolute;
  transform: translate(-50%, -50%);
  background-color: white;
  padding: 5px;
  z-index: 1000;
  opacity: 0.9;
  font-size: 12px;
`;

export const PropertyText = styled.span`
  color: #4e286b;
  font-size: 14.023px; /* 17.827px를 1280px 기준으로 조정 */
  font-weight: 600;
`;

export const SliderContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 5.469px; /* 7px를 1280px 기준으로 조정 */
`;

export const DegreeTextContainer = styled.div`
  display: flex;
  width: 46.875px;
  align-items: center;
  justify-content: center;
`;

export const DegreeText = styled.span`
  color: #4e286b;
  font-size: 11.102px; /* 14.146px를 1280px 기준으로 조정 */
`;

export const WineProfileSlideItem = styled.div`
  width: 35.938px;
  height: 8.789px;
  background-color: ${(props) => (props.selected ? "#EED9FF;" : "#FFF")};
  cursor: pointer;
  border: 0.867px solid #4e286b;

  &:first-child {
    border-radius: 4.492px 0 0 4.492px;
  }

  &:last-child {
    border-radius: 0 4.492px 4.492px 0;
    border-right: 0.867px solid #4e286b;
  }
`;
