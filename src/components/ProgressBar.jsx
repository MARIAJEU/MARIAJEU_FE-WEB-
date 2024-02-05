import React, { useEffect, useState } from "react";
import styled from "styled-components";

const SideProgressBarContainer = styled.div`
  position: fixed;
  top: 195px;
  left: 1883px;
  height: 865px;
  width: 15px;
  border-radius: 7.5px;
  background-color: #ddd;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

const Progress = styled.div`
  width: 15px;
  background-color: #4e286b;
  transition: height 0.3s ease;
  height: ${(props) => props.scrollPercentage}%;
  border-radius: 7.5px;
`;

const SideProgressBar = () => {
  const [scrollPercentage, setScrollPercentage] = useState(0);

  useEffect(() => {
    const updateScrollPercentage = () => {
      const scrollTop =
        document.documentElement.scrollTop || document.body.scrollTop;
      const scrollHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const percentage = (scrollTop / scrollHeight) * 100;
      setScrollPercentage(percentage);
    };

    document.addEventListener("scroll", updateScrollPercentage);

    return () => {
      document.removeEventListener("scroll", updateScrollPercentage);
    };
  }, []);

  return (
    <SideProgressBarContainer>
      <Progress scrollPercentage={scrollPercentage}></Progress>
    </SideProgressBarContainer>
  );
};

export default SideProgressBar;
