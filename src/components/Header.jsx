import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../img/logo.png";
import search from "../img/search.png";
import notifyIcon from "../img/notifyIcon.png";
import {
  HeaderMain,
  HeaderLeft,
  Logo,
  HeaderRight,
  HeaderRightTop,
  Category,
  LogoName,
  SearchBar,
  SearchImg,
  NotifyIconWrapper,
  NotifyIconImg,
  NotifyModal,
  Divider,
  LogStatus,
  CategoryList,
  CategoryItem,
} from "./Header.style";

// Category List
const categories = [
  { name: "홈", path: "/" },
  { name: "식당", path: "/restaurant" },
  { name: "커뮤니티", path: "/community" },
  { name: "고객센터", path: "/customer-center" },
  { name: "마이페이지", path: "/my-page" },
];

const Header = () => {
  // State Variables
  const [searchTerm, setSearchTerm] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isNotifyModalOpen, setIsNotifyModalOpen] = useState(false);

  // Search Handler
  const handleSearch = () => {
    console.log(searchTerm);
  };

  // Key Input Handler
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  // Login Toggle Handler
  const handleToggleLogin = () => {
    setIsLoggedIn((prev) => !prev);
  };

  return (
    <HeaderMain>
      {/* Left Section */}
      <HeaderLeft as={Link} to="/">
        <Logo src={logo} alt="Logo" />
      </HeaderLeft>
      {/* Right Section */}
      <HeaderRight>
        {/* Right Top Section */}
        <HeaderRightTop>
          <LogoName as={Link} to="/">
            MARIAJEU
          </LogoName>
          <SearchImg src={search} alt="Search" />
          <SearchBar
            placeholder="레시피, 와인 종류, 특성을 입력하세요.."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onKeyDown={handleKeyPress}
          />
          <NotifyIconWrapper
            onMouseEnter={() => setIsNotifyModalOpen(true)}
            onMouseLeave={() => setIsNotifyModalOpen(false)}
          >
            <NotifyIconImg src={notifyIcon} alt="Notify" />
          </NotifyIconWrapper>
          {isNotifyModalOpen && (
            <NotifyModal>
              <h2>Notification</h2>
              <p>You have a new notification!</p>
            </NotifyModal>
          )}
          <Divider />
          <LogStatus onClick={handleToggleLogin}>
            {isLoggedIn ? "로그아웃" : "로그인"}
          </LogStatus>
        </HeaderRightTop>
        {/* Right Bottom Section */}
        <Category>
          <CategoryList>
            {categories.map(({ name, path }) => (
              <CategoryItem key={path} as={Link} to={path}>
                {name}
              </CategoryItem>
            ))}
          </CategoryList>
        </Category>
      </HeaderRight>
    </HeaderMain>
  );
};

export default Header;
