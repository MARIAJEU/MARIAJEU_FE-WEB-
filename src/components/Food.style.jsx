import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 15.872px;
  background: #fff;
  box-shadow: 0px 0px 2.5px -0.424px #e6c6ff;
  margin-top: 23.125px;
`;

export const LeftSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 12px;
`;

export const HeartImageSection = styled.div`
  position: relative;
`;

export const HeartImage = styled.img`
  cursor: pointer;
  position: absolute;
  left: 146.788px;
  top: 9.672px;
`;

export const FoodImage = styled.img`
  width: 187.085px;
  height: 164.531px;
  border-radius: 9.8312px;
  border: 0.4752px solid #000;
  background: #fff;
`;

export const FoodProperties = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 2.6472px;
  margin-top: 5.625px;
`;

export const FoodProperty = styled.span`
  width: 54.218px;
  height: 14.2312px;
  border-radius: 5.976px;
  background-color: #e6c6ff;
  color: #000000;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 8.4688px;
  margin: 1.875px;
`;

export const RightSection = styled.div`
  display: flex;
  flex-direction: column;
  height: 246.25px;
`;

export const RestaurantInfoSection = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  margin-bottom: 10px;
`;

export const RestaurantNameComp = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
`;

export const RestaurantLocationComp = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  left: 186.875px;
`;

export const Icon = styled.img`
  width: 10.072px;
  margin-right: 2.4376px;
`;

export const LikesSection = styled.div`
  display: flex;
  align-items: center;
  margin: 8px 0;
`;

export const LikeHeart = styled.img`
  width: 21.1752px;
  margin-right: 4.3752px;
`;

export const FoodIntroSection = styled.div``;

export const H1 = styled.p`
  color: #000;
  font-size: 18.3504px;
  font-weight: 600;
`;

export const T1 = styled.p`
  color: #000;
  font-size: 13.5128px;
  font-style: normal;
  font-weight: 500;
  margin: 0;
`;

export const T2 = styled.p`
  font-size: 10.0312px;
  font-weight: 800;
  margin-bottom: 3.672px;
`;

export const T3 = styled.p`
  font-size: 10.0312px;
  font-weight: 500;
  margin: 0;
`;

export const ReviewsSection = styled.div`
  display: flex;
`;

export const ReviewComp = styled.div`
  display: flex;
  align-items: center;
  padding-left: 5.156px;
  width: 266.684px;
  height: 17.1872px;
  border-radius: 3.7504px;
  border: 0.4696px solid #7b5399;
  background: #fff;
  margin-right: 5.665px;
`;
