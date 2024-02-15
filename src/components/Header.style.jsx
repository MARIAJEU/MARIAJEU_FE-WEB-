import styled from "styled-components";

// Header Section
export const HeaderMain = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 108px; /* 162px를 1280px 기준으로 조정 */
  background-color: #ffffff;
  box-shadow: 3px 3px 6px rgba(0, 0, 0, 0.3); /* 그림자도 비율에 맞게 조정 */
`;

// Left Section
export const HeaderLeft = styled.div`
  margin-left: 97px; /* 146px를 1280px 기준으로 조정 */
  width: 52px; /* 78px를 1280px 기준으로 조정 */
  height: 68px; /* 102px를 1280px 기준으로 조정 */
`;

export const Logo = styled.img`
  width: 52px; /* 78px를 1280px 기준으로 조정 */
  height: 68px; /* 102px를 1280px 기준으로 조정 */
`;

// Right Section
export const HeaderRight = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 22px; /* 30px를 1280px 기준으로 조정 */
  position: relative;
`;

export const HeaderRightTop = styled.div`
  display: flex;
  align-items: center;
  height: 34px; /* 51px를 1280px 기준으로 조정 */
  width: 1038px; /* 1658px를 1280px 기준으로 조정 */
`;

// Category Section
export const Category = styled.div`
  margin-top: 14px; /* 20px를 1280px 기준으로 조정 */
  height: 26px; /* 37px를 1280px 기준으로 조정 */
  width: 800px; /* 1000px를 1280px 기준으로 조정 */
`;

export const CategoryList = styled.ul`
  display: flex;
  justify-content: space-between;
  list-style: none;
  margin: 0;
  padding: 0;
`;

export const CategoryItem = styled.li`
  width: 113px; /* 142px를 1280px 기준으로 조정 */
  height: 26px; /* 37px를 1280px 기준으로 조정 */
  border-radius: 21px; /* 31px를 1280px 기준으로 조정 */
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  font-weight: 400;
  font-size: 17px; /* 22px를 1280px 기준으로 조정 */
  color: #311447;
  text-decoration: none;
  cursor: pointer;

  &:hover {
    background-color: #7b539940;
  }
`;

// LogoName Section
export const LogoName = styled.p`
  font-weight: 500; /* 600을 1280px 기준으로 조정 */
  font-size: 23.71px; /* 29.61px를 1280px 기준으로 조정 */
  color: #4e286b;
  text-decoration: none;
`;

// Divider Section
export const Divider = styled.div`
  height: 31px; /* 42px를 1280px 기준으로 조정 */
  margin: 38px; /* 50px를 1280px 기준으로 조정 */
  border-left: 1px solid #311447;
`;

// Search Section
export const SearchBar = styled.input`
  width: 341.74px; /* 455.26px를 1280px 기준으로 조정 */
  height: 31.96px; /* 42.22px를 1280px 기준으로 조정 */
  margin-left: 30px; /* 50px를 1280px 기준으로 조정 */
  border-radius: 21.76px; /* 28.53px를 1280px 기준으로 조정 */
  border: 1.15px solid #4e286b; /* 1.5px를 1280px 기준으로 조정 */
  font-weight: 400;
  font-size: 11.34px; /* 13.24px를 1280px 기준으로 조정 */
  padding-left: 29px; /* 40px를 1280px 기준으로 조정 */
`;

export const SearchImg = styled.img`
  position: absolute;
  width: 12.84px; /* 15.4px를 1280px 기준으로 조정 */
  height: 12.84px; /* 15.4px를 1280px 기준으로 조정 */
  margin-left: 162px; /* 220px를 1280px 기준으로 조정 */
`;

// NotifyIcon Section
export const NotifyIconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 300px; /* 500px를 1280px 기준으로 조정 */
  width: 31.25px; /* 40px를 1280px 기준으로 조정 */
  height: 31.25px; /* 40px를 1280px 기준으로 조정 */
  border-radius: 50%;
  overflow: hidden;
  padding: 7.81px; /* 10px를 1280px 기준으로 조정 */
  cursor: pointer;
  &:hover {
    background-color: #7b539940;
  }
`;

export const NotifyIconImg = styled.img`
  width: 21.48px; /* 28.5px를 1280px 기준으로 조정 */
  height: 24.97px; /* 33.25px를 1280px 기준으로 조정 */
`;

export const NotifyModal = styled.div`
  position: absolute;
  top: 120px; /* 140px를 1280px 기준으로 조정 */
  left: 70%;
  transform: translate(-50%, -50%);
  background-color: white;
  padding: 15px; /* 20px를 1280px 기준으로 조정 */
  z-index: 1000;
  background-color: #ffffff;
  border: 1px solid #4e286b;
`;

// LogStatus Section
export const LogStatus = styled.p`
  width: 80px;
  display: flex;
  font-weight: 400;
  font-size: 16px; /* 18px를 1280px 기준으로 조정 */
  color: #311447;
  cursor: pointer;
  border: none;
  padding: 7.81px 15.63px; /* 10px를 1280px 기준으로 조정 */
  &:hover {
    text-decoration: underline;
  }
`;
