import styled from "styled-components";

// Header Section
export const HeaderMain = styled.div`
  display: flex;
  align-items: center;
  width: 1920px;
  height: 162px;
  background-color: #ffffff;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.3);
`;

// Left Section
export const HeaderLeft = styled.div`
  margin-left: 146px;
  width: 78px;
  height: 102px;
`;

export const Logo = styled.img`
  width: 78px;
  height: 102px;
`;

// Right Section
export const HeaderRight = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 102px;
  margin-left: 30px;
  position: relative;
`;

export const HeaderRightTop = styled.div`
  display: flex;
  align-items: center;
  height: 51px;
  width: 1658px;
`;

// Category Section
export const Category = styled.div`
  margin-top: 20px;
  height: 37px;
  width: 1000px;
`;

export const CategoryList = styled.ul`
  display: flex;
  justify-content: space-between;
  list-style: none;
  margin: 0;
  padding: 0;
`;

export const CategoryItem = styled.li`
  width: 142px;
  height: 37px;
  border-radius: 31px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  font-weight: 400;
  font-size: 22px;
  color: #311447;
  text-decoration: none;
  cursor: pointer;

  &:hover {
    background-color: #7b539940;
  }
`;

// LogoName Section
export const LogoName = styled.p`
  font-weight: 600;
  font-size: 29.61px;
  color: #4e286b;
  text-decoration: none;
`;

// Divider Section
export const Divider = styled.div`
  height: 42px;
  margin-left: 50px;
  border-left: 1px solid #311447;
`;

// Search Section
export const SearchBar = styled.input`
  width: 455.26px;
  height: 42.22px;
  margin-left: 50px;
  border-radius: 28.53px;
  border: 1.5px solid #4e286b;
  font-weight: 400;
  font-size: 13.24px;
  padding-left: 40px;
`;

export const SearchImg = styled.img`
  position: absolute;
  width: 15.4px;
  height: 15.4px;
  margin-left: 220px;
`;

// NotifyIcon Section
export const NotifyIconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 500px;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  overflow: hidden;
  padding: 10px;
  cursor: pointer;
  &:hover {
    background-color: #7b539940;
  }
`;

export const NotifyIconImg = styled.img`
  width: 28.5px;
  height: 33.25px;
`;

export const NotifyModal = styled.div`
  position: absolute;
  top: 140px;
  left: 70%;
  transform: translate(-50%, -50%);
  background-color: white;
  padding: 20px;
  z-index: 1000;
  background-color: #ffffff;
  border: 1px solid #4e286b;
`;

// LogStatus Section
export const LogStatus = styled.p`
  margin-left: 50px;
  font-weight: 400;
  font-size: 18px;
  color: #311447;
  cursor: pointer;
  border: none;
  padding: 10px 20px;

  &:hover {
    text-decoration: underline;
  }
`;
