import React from "react";
import styled from "styled-components";
import LandingBody from "../components/LandingBody";
import LandingNavbar from "../components/LandingNavbar";
import LandingFooter from "../components/LandingFooter";

const AppContaioner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: black;
`;

export default function LandingPage() {
  return (
    <AppContaioner>
      <LandingNavbar></LandingNavbar>
      <LandingBody></LandingBody>
      <LandingFooter></LandingFooter>
    </AppContaioner>
  );
}
