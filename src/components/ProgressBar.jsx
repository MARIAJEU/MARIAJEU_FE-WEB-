import React, { useEffect, useState } from "react";
import styled from "styled-components";

const SideProgressBarContainer = styled.div`
  position: fixed;
  right: 30px;
  height: 70vh;
  width: 11.719px;
  border-radius: 5.859px;
  background-color: #ddd;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin: 30px 0;
`;

const Progress = styled.div`
  width: 11.719px;
  background-color: #4e286b;
  transition: height 0.3s ease;
  height: ${(props) => props.scrollPercentage}%;
  border-radius: 5.859px;
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
