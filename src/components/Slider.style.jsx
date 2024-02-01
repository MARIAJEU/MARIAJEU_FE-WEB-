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
`;

export const PropertyText = styled.span`
  color: #4e286b;
  font-family: Inter;
  font-size: 17.827px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  margin-left: 4.65px;
`;

export const SliderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 7px;
`;

export const DegreeText = styled.span`
  color: #4e286b;
  font-size: 14.146px;
  text-align: center;
`;

export const WineProfileSlideItem = styled.div`
  width: 46px;
  height: 11px;
  background-color: ${(props) => (props.selected ? "#EED9FF;" : "#FFF")};
  cursor: pointer;
  border: 1px solid #4e286b;

  &:first-child {
    border-radius: 5px 0 0 5px;
    margin-left: 16px;
  }

  &:last-child {
    border-radius: 0 5px 5px 0;
    border-right: 1px solid #4e286b;
    margin-right: 16px;
  }
`;
