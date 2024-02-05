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
  DegreeTextContainer,
} from "./Slider.style";

const Slider = ({ propertyText, degreeText }) => {
  const [selectedIdx, setSelectedIdx] = useState(null);

  const handleSliderItemClick = (index) => {
    setSelectedIdx(index);
    console.log(index + 1);
  };

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
        <PropertyText>{propertyText}</PropertyText>
      </PropertyContainer>
      <SliderContainer>
        <DegreeTextContainer>
          <DegreeText>{degreeText[0]}</DegreeText>
        </DegreeTextContainer>
        <ItemContainer>{renderSliderItems()}</ItemContainer>
        <DegreeTextContainer>
          <DegreeText>{degreeText[1]}</DegreeText>
        </DegreeTextContainer>
      </SliderContainer>
    </WineProfileSlideContainer>
  );
};

export default Slider;
