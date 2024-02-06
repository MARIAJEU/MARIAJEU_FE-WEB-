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
  MoreInfoModal,
} from "./Slider.style";

const Slider = ({ propertyText, degreeText }) => {
  const [selectedIdx, setSelectedIdx] = useState(null);
  const [isMoreInfoModalOpen, setisMoreInfoModalOpen] = useState(false);

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
        <InfoBtn
          onMouseEnter={() => setisMoreInfoModalOpen(true)}
          onMouseLeave={() => setisMoreInfoModalOpen(false)}
        >
          i
        </InfoBtn>
        <PropertyText>{propertyText}</PropertyText>
        {isMoreInfoModalOpen && (
          <MoreInfoModal>
            <p>
              향이 뚜렷하고 쉽게 와인의 맛을 감별할 수 있는 맛. 높을수록
              Bold하며, 낮을수록 Light합니다.
            </p>
          </MoreInfoModal>
        )}
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
