import React, { useState } from "react";
import {
  WineProfileSlideContainer,
  WineProfileSlideItem,
  ItemContainer,
  PropertyContainer,
  InfoBtn,
  PropertyText,
  DegreeText,
  SliderContainer,
} from "./Slider.style";

const Slider = () => {
  // State Variables
  const [selectedIdx, setSelectedIdx] = useState(null);

  // Slider Handler
  const handleSliderItemClick = (index) => {
    setSelectedIdx(index);
    console.log(index + 1);
  };

  // Slider Items
  const renderSliderItems = () => {
    const sliderItems = [];
    for (let i = 0; i < 6; i++) {
      sliderItems.push(
        <WineProfileSlideItem
          key={i}
          selected={selectedIdx !== null && i <= selectedIdx}
          onClick={() => handleSliderItemClick(i)}
        />
      );
    }
    return sliderItems;
  };

  return (
    <WineProfileSlideContainer>
      <PropertyContainer>
        <InfoBtn>i</InfoBtn>
        <PropertyText>BOLD</PropertyText>
      </PropertyContainer>
      <SliderContainer>
        <DegreeText>light</DegreeText>
        <ItemContainer>{renderSliderItems()}</ItemContainer>
        <DegreeText>bold</DegreeText>
      </SliderContainer>
    </WineProfileSlideContainer>
  );
};

export default Slider;
