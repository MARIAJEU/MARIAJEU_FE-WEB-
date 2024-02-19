import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from "react";
import HomeRed from "./pages/HomeRed"; // 예시: 홈 페이지 컴포넌트
import HomeWhite from "./pages/HomeWhite";
import HomeSparkling from "./pages/HomeSparkling";
import Restaurant from "./pages/Restaurant"; // 예시: 식당 페이지 컴포넌트
import Community from "./pages/Community"; // 예시: 커뮤니티 페이지 컴포넌트
import CustomerCenter from "./pages/CustomerCenter"; // 예시: 고객센터 페이지 컴포넌트
import MyPage from "./pages/MyPage"; // 예시: 마이페이지 컴포넌트
import LandingPage from "./pages/LandingPage";
import SignInPage from "./pages/SignInPage";
import SignUpPage from "./pages/SignUpPage";
import PwRecoveryPage from "./pages/PwRecoveryPage";
import Food from "./components/Food";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomeRed />} />
        <Route path="/white" element={<HomeWhite />} />
        <Route path="/sparkling" element={<HomeSparkling />} />
        <Route path="/restaurant" element={<Restaurant />} />
        <Route path="/community" element={<Community />} />
        <Route path="/customer-center" element={<CustomerCenter />} />
        <Route path="/my-page" element={<MyPage />} />
        <Route path="/food" element={<Food />} />
        <Route path="/landing-page" element={<LandingPage></LandingPage>} />
        <Route path="/signin" element={<SignInPage></SignInPage>} />
        <Route path="/signup" element={<SignUpPage></SignUpPage>} />
        <Route path="/pwhelp" element={<PwRecoveryPage></PwRecoveryPage>} />
      </Routes>
    </div>
  );
}

export default App;
