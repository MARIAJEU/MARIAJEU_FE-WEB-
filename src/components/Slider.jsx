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

  // 모달 컨텐츠 처리
  let modalContent = "";
  switch (propertyText) {
    case "BOLD":
      modalContent =
        "향이 뚜렷하고 쉽게 와인의 맛을 감별할 수 있는 맛. 높을수록 Bold하며, 낮을수록 Light합니다.";
      break;
    case "SWEET":
      modalContent =
        "와인의 당도뿐 아니라 감미로운 맛을 표현합니다. 높을수록 SWEET하며, 낮을수록 DRY합니다.";
      break;
    case "ACIDIC":
      modalContent =
        "와인에서 느껴지는 신 맛의 정도를 가리킵니다. 높을수록 ACIDIC하며, 낮을수록 SOFT합니다.";
      break;
    case "FIZZY":
      modalContent =
        "거품을 부여하여 생동감 있고 상쾌한 맛. 높을수록 FIZZY하며, 낮을수록 GENTLE합니다.";
      break;
    case "TANNIC":
      modalContent =
        "와인의 쓴 맛과 떫은 맛의 복합성을 더합니다. 높을수록 TANNIC하며, 낮을수록 SMOOTH합니다.";
      break;

    default:
      modalContent = "기타 내용";
  }

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
            <p>{modalContent}</p>
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
