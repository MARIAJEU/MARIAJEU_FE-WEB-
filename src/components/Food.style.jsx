import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 974px;
  height: 325.88px;
  border-radius: 25.488px;
  background: #fff;
  box-shadow: 0px 0px 5.371px -0.91px #e6c6ff;
  margin-top: 37px;
  padding: 10px;
`;

export const LeftSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-right: 19px;
`;

export const HeartImageSection = styled.div`
  position: relative;
  width: 266.062px;
  height: 233.534px;
`;

export const HeartImage = styled.img`
  cursor: pointer;
  position: absolute;
  left: 220px;
  top: 15px;
`;

export const FoodImage = styled.img`
  width: 266.062px;
  height: 233.534px;
  border-radius: 20.851px;
  border: 0.834px solid #000;
  background: #fff;
`;

export const FoodProperties = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 5px;
  margin-top: 10px;
`;

export const FoodProperty = styled.span`
  width: 82.57px;
  height: 21.69px;
  border-radius: 10.84px;
  background-color: #e6c6ff;
  color: #000000;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12.53px;
  margin: 3px;
`;

export const RightSection = styled.div`
  display: flex;
  flex-direction: column;
`;

export const RestaurantInfoSection = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  width: 650px;
  margin-top: 25px;
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
  left: 300px;
  margin: 0;
`;

export const Icon = styled.img`
  width: 16.749px;
  height: 20.936px;
  margin-right: 5px;
`;

export const LikesSection = styled.div`
  display: flex;
  align-items: center;
  margin-top: 25px;
`;

export const LikeHeart = styled.img`
  width: 33.68px;
  height: 29.129px;
  margin-right: 9px;
`;

export const FoodIntroSection = styled.div`
  width: 653.581px;
  height: 54px;
`;

export const H1 = styled.p`
  color: #000;
  font-size: 26.367px;
  font-weight: 600;
  margin: 0;
`;

export const T1 = styled.p`
  color: #000;
  font-size: 19.48px;
  font-style: normal;
  font-weight: 500;
  margin: 0;
`;

export const T2 = styled.p`
  font-size: 14.564px;
  font-weight: 800;
  margin-bottom: 6.37px;
`;

export const T3 = styled.p`
  font-size: 14.564px;
  font-weight: 500;
  margin: 0;
`;

export const ReviewsSection = styled.div`
  display: flex;
`;

export const ReviewComp = styled.div`
  display: flex;
  align-items: center;
  padding-left: 10px;
  width: 323.15px;
  height: 28.219px;
  border-radius: 7.282px;
  border: 0.91px solid #7b5399;
  background: #fff;
  margin-right: 7.28px;
`;
