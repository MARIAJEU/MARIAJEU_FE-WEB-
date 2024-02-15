// Food.js
import React, { useState } from "react";
import whiteHeart from "../img/whiteHeart.png";
import redHeart from "../img/redHeart.png";
import restaurantIcon from "../img/restaurantIcon.png";
import locationIcon from "../img/locationIcon.png";

import {
  Container,
  LeftSection,
  HeartImageSection,
  FoodImage,
  FoodProperties,
  FoodProperty,
  RightSection,
  H1,
  RestaurantInfoSection,
  RestaurantNameComp,
  RestaurantLocationComp,
  Icon,
  T1,
  LikesSection,
  HeartImage,
  FoodIntroSection,
  LikeHeart,
  T2,
  T3,
  ReviewsSection,
  ReviewComp,
} from "./Food.style";

const Food = ({ foodDummy }) => {
  // State Variables
  const [isLiked, setIsLiked] = useState(false);

  // Handlers
  const handleLikeClick = () => {
    setIsLiked(!isLiked);
  };

  // Destructuring the foodDummy object to get current food data
  const {
    foodPicUrl,
    feature,
    foodName,
    restaurantName,
    location,
    likesCount,
    foodDescription,
    reviews,
  } = foodDummy;

  return (
    <Container>
      {/* Left Section */}
      <LeftSection>
        <HeartImageSection>
          <HeartImage
            src={isLiked ? whiteHeart : redHeart}
            onClick={handleLikeClick}
          />
          <FoodImage src={foodPicUrl} />
        </HeartImageSection>
        <FoodProperties>
          {feature.map((featureItem, index) => (
            <FoodProperty key={index}>{featureItem}</FoodProperty>
          ))}
        </FoodProperties>
      </LeftSection>

      {/* Right Section */}
      <RightSection>
        <H1>{foodName}</H1>
        <RestaurantInfoSection>
          <RestaurantNameComp>
            <Icon src={restaurantIcon} />
            <T1>{restaurantName}</T1>
          </RestaurantNameComp>
          <RestaurantLocationComp>
            <Icon src={locationIcon} />
            <T1>{location}</T1>
          </RestaurantLocationComp>
        </RestaurantInfoSection>
        <LikesSection>
          <LikeHeart src={redHeart} />
          <T1>{likesCount}</T1>
          <T1>명이 좋아합니다.</T1>
        </LikesSection>
        <T2>음식 소개</T2>
        <FoodIntroSection>
          <T3>{foodDescription}</T3>
        </FoodIntroSection>
        <T2>대표리뷰</T2>
        <ReviewsSection>
          {/* Map through reviews and display them */}
          {reviews.map((review, index) => (
            <ReviewComp key={index}>
              <T3>{review}</T3>
            </ReviewComp>
          ))}
        </ReviewsSection>
      </RightSection>
    </Container>
  );
};

export default Food;
