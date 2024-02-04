import React from "react";
import SignIn from "../components/SignIn";
import LandingNavbar from "../components/LandingNavbar";
import styled from "styled-components";

const AppContaioner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: black;
`;

export default function SignInPage() {
  return (
    <AppContaioner>
      <LandingNavbar></LandingNavbar>
      <SignIn></SignIn>
    </AppContaioner>
  );
}
