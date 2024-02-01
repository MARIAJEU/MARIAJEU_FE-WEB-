import React, { useState } from "react";
import {
  WineProfileContainer,
  WineProfileTextArea,
  WineProfileTitle,
  WineProfileSubtitle,
  WineProfileBtnArea,
  WineProfileBtn,
} from "./WineProfile.style";

import Slider from "./Slider";

const wineTypes = ["RED", "WHITE", "SPARKLING"];

const WineProfile = () => {
  return (
    <WineProfileContainer>
      <WineProfileTextArea>
        <WineProfileTitle>와인의 특성을 골라주세요.</WineProfileTitle>
        <WineProfileSubtitle>
          MARIAJEU에서 음식을 추천해 드립니다.
        </WineProfileSubtitle>
      </WineProfileTextArea>
      <WineProfileBtnArea>
        {wineTypes.map((type) => (
          <WineProfileBtn>{type}</WineProfileBtn>
        ))}
      </WineProfileBtnArea>
      <Slider />
    </WineProfileContainer>
  );
};

export default WineProfile;
