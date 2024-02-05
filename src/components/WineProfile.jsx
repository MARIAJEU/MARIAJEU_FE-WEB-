import React, { useState, useEffect } from "react";
import Slider from "./Slider";
import {
  WineProfileContainer,
  WineProfileTextArea,
  WineProfileTitle,
  WineProfileSubtitle,
  WineProfileBtnArea,
  WineProfileBtn,
} from "./WineProfile.style";
import { Link, useLocation } from "react-router-dom";

const WineProfile = () => {
  const { pathname } = useLocation();
  const [wineProperties, setWineProperties] = useState([]);
  const [degreeTexts, setDegreeTexts] = useState({});

  useEffect(() => {
    // 경로에 따라 다른 와인 특성 및 텍스트 설정
    if (pathname === "/") {
      // RED 페이지
      setWineProperties(["BOLD", "TANNIC", "SWEET", "ACIDIC"]);
      setDegreeTexts({
        BOLD: ["light", "bold"],
        TANNIC: ["smooth", "tannic"],
        SWEET: ["dry", "sweet"],
        ACIDIC: ["soft", "acidic"],
      });
    } else if (pathname.includes("white")) {
      // WHITE 페이지
      setWineProperties(["BOLD", "SWEET", "ACIDIC"]);
      setDegreeTexts({
        BOLD: ["light", "bold"],
        SWEET: ["dry", "sweet"],
        ACIDIC: ["soft", "acidic"],
      });
    } else if (pathname.includes("sparkling")) {
      // SPARKLING 페이지
      setWineProperties(["BOLD", "ACIDIC", "FIZZY"]);
      setDegreeTexts({
        BOLD: ["light", "bold"],
        ACIDIC: ["soft", "acidic"],
        FIZZY: ["gentle", "fizzy"],
      });
    }
  }, [pathname]);

  return (
    <WineProfileContainer>
      <WineProfileTextArea>
        <WineProfileTitle>와인의 특성을 골라주세요.</WineProfileTitle>
        <WineProfileSubtitle>
          MARIAJEU에서 음식을 추천해 드립니다.
        </WineProfileSubtitle>
      </WineProfileTextArea>
      <WineProfileBtnArea>
        <Link to="/">
          <WineProfileBtn className={pathname === "/" ? "active" : ""}>
            RED
          </WineProfileBtn>
        </Link>
        <Link to="/white">
          <WineProfileBtn className={pathname === "/white" ? "active" : ""}>
            WHITE
          </WineProfileBtn>
        </Link>
        <Link to="/sparkling">
          <WineProfileBtn className={pathname === "/sparkling" ? "active" : ""}>
            SPARKLING
          </WineProfileBtn>
        </Link>
      </WineProfileBtnArea>
      {wineProperties.map((property) => (
        <Slider
          key={property}
          propertyText={property}
          degreeText={degreeTexts[property]}
        />
      ))}
    </WineProfileContainer>
  );
};

export default WineProfile;
