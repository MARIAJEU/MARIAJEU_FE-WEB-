import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home"; // 예시: 홈 페이지 컴포넌트
import Restaurant from "./pages/Restaurant"; // 예시: 식당 페이지 컴포넌트
import Community from "./pages/Community"; // 예시: 커뮤니티 페이지 컴포넌트
import CustomerCenter from "./pages/CustomerCenter"; // 예시: 고객센터 페이지 컴포넌트
import MyPage from "./pages/MyPage"; // 예시: 마이페이지 컴포넌트

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="" element={<Home />} />
          <Route path="/restaurant" element={<Restaurant />} />
          <Route path="/community" element={<Community />} />
          <Route path="/customer-center" element={<CustomerCenter />} />
          <Route path="/my-page" element={<MyPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
