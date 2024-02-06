import styled from "styled-components";

// Container
export const WineProfileSlideContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0;
  margin-top: 46.16px;
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
  border: 1px solid #4e286b;
  width: 14.607px;
  height: 14.607px;
  cursor: pointer;
  margin-right: 5px;
`;

export const MoreInfoModal = styled.div`
  width: 386px;
  height: 63.53px;
  top: 110px;
  left: 200px;
  border-radius: 8.85px;
  border: 0.8px solid #33134b;
  position: absolute;
  transform: translate(-50%, -50%);
  background-color: white;
  padding: 10px;
  z-index: 1000;
  opacity: 0.9;
`;

export const PropertyText = styled.span`
  color: #4e286b;
  font-size: 17.827px;
  font-weight: 600;
`;

export const SliderContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 7px;
`;

export const DegreeTextContainer = styled.div`
  display: flex;
  width: 60px;
  align-items: center;
  justify-content: center;
`;

export const DegreeText = styled.span`
  color: #4e286b;
  font-size: 14.146px;
`;

export const WineProfileSlideItem = styled.div`
  width: 46px;
  height: 11px;
  background-color: ${(props) => (props.selected ? "#EED9FF;" : "#FFF")};
  cursor: pointer;
  border: 1px solid #4e286b;

  &:first-child {
    border-radius: 5px 0 0 5px;
  }

  &:last-child {
    border-radius: 0 5px 5px 0;
    border-right: 1px solid #4e286b;
  }
`;
