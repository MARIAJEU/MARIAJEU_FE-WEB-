import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const Container = styled.div`
  position: relative;
  right: 10rem;
  z-index: 1;
  display: block;
  max-width: 400px;
  padding-top: 12rem;
  height: 100vh;
  width: 60%;
  background-color: transparent;
`;

const Heading = styled.h1`
  color: #ffffff;
  font-size: 36px;
  font-weight: 100;
  letter-spacing: -3px;
  text-align: left;
  margin: 0 0 0 20px;
  transition: 0.2s linear;
`;

const SignUpStyledLink = styled(Link)`
  text-decoration: none;
  font-size: 0.6rem;
  color: #ffffff;
  border-bottom: solid white 1px;
  cursor: pointer;
`;

const Form = styled.form`
  width: 100%;
  max-width: 680px;
  margin: 10px auto 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .input__block {
    display: flex;
    align-items: center;
    margin: 5px;
    position: relative;
    max-width: 680px;
    height: 50px;
    border-radius: 30px;
    width: 90%;
    background: rgba(255, 255, 255);

    input {
      display: inline-block;
      width: 80%;
      border: none;
      color: rgba(0, 0, 0);
      padding: 0 0 0 15px;
      font-size: 14px;
      font-family: "Montserrat", sans-serif;

      &:focus,
      &:active {
        outline: none;
        border: none;
      }
    }
  }

  .signin__btn {
    background: #3d1959;
    color: white;
    display: block;
    width: 92.5%;
    max-width: 680px;
    height: 50px;
    border-radius: 30px;
    margin: 0 auto;
    border: none;
    cursor: pointer;
    font-size: 14px;
    font-family: "Montserrat", sans-serif;
    transition: 0.2s linear;

    &:hover {
      box-shadow: 0 0 0 rgba(233, 30, 99, 0);
    }
  }
`;

const Separator = styled.div`
  display: block;
  margin: 10px auto 10px;
  text-align: center;
  height: 10px;
  position: relative;
  background: transparent;
  color: rgba(255, 255, 255);
  width: 90%;
  max-width: 680px;

  &::before {
    content: "";
    position: absolute;
    top: 8px;
    left: 0;
    background: rgba(255, 255, 255, 0.5);
    height: 1px;
    width: 50%;
  }

  &::after {
    content: "";
    position: absolute;
    top: 8px;
    right: 0;
    background: rgba(255, 255, 255, 0.5);
    height: 1px;
    width: 50%;
  }
`;

const KakaoButton = styled.button`
  display: block;
  width: 90%;
  max-width: 680px;
  margin: 10px auto 0 auto;
  height: 50px;
  cursor: pointer;
  font-size: 14px;
  font-family: "Montserrat", sans-serif;
  border-radius: 30px;
  border: none;
  line-height: 40px;
  background: rgb(247, 228, 0);
  color: #000000;

  .fa {
    font-size: 20px;
    padding: 0 5px 0 0;
  }

  &:hover {
    box-shadow: 0 0 0 rgba(37, 40, 45, 0);
  }
`;
const CheckBoxContainer = styled.div`
  display: flex;
  margin-top: 10px;
  font-size: 0.8rem;
  user-select: none;
`;

const StyledCheckBox = styled.input`
  width: 0.8rem;
  height: 0.8rem;
  border-radius: 50%;
  border: 2px solid #999;
  appearance: none;
  cursor: pointer;
  &:checked {
    background: #3d1959;
  }
`;

const BackGroundImg = styled.img`
  position: fixed;
  width: 40%;
  height: 90%;
  left: 40%;
  top: 5%;
`;
const SignIn = () => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };
  const handleKakaoButtonClicked = () => {
    alert("기능개발중입니다.");
  };
  const handleSignIn = async (e) => {
    e.preventDefault();

    const userName = document.getElementById("userName").value;
    const password = document.getElementById("password").value;

    const userData = {
      userName: userName,
      password: password,
    };

    try {
      const response = await axios.post(
        "http://43.202.194.137:8080/users/login",
        userData
      );

      localStorage.setItem("accessToken", response.data.accessToken);
      if (document.getElementById("maintainSignIn").checked) {
        document.cookie = `longLivedToken=${
          response.data.accessToken
        }; max-age=${365 * 24 * 60 * 60}; path=/;`;
      }

      // 응답 로그
      console.log("응답:", response.data);
      alert("로그인이 완료되었습니다!");
    } catch (error) {
      // 에러를 처리
      if (error.response) {
        console.error("응답 에러:", error.response.data);
      } else if (error.request) {
        console.error("응답 없음:", error.request);
      } else {
        console.error("요청 설정 에러:", error.message);
        alert(error.message);
      }
    }
  };

  document.addEventListener("DOMContentLoaded", () => {
    const savedId = getCookie("savedId");
    if (savedId) {
      document.getElementById("userName").value = savedId;
    }
  });

  // 쿠키에서 특정 이름의 쿠키 값을 가져오는 함수
  function getCookie(cookieName) {
    const cookies = document.cookie.split(";");
    for (const cookie of cookies) {
      const [name, value] = cookie.trim().split("=");
      if (name === cookieName) {
        return decodeURIComponent(value);
      }
    }
    return null;
  }

  return (
    <>
      <Container>
        <Heading>로그인하기</Heading>
        <KakaoButton onClick={handleKakaoButtonClicked}>
          <FontAwesomeIcon
            icon={["fas", "comment"]} // 아이콘의 속성을 배열로 전달합니다.
            style={{ marginRight: "5px" }} // 스타일 객체를 올바르게 생성합니다.
          />
          카카오계정 LOGIN
        </KakaoButton>
        <Separator></Separator>
        <Form onSubmit={handleSignIn}>
          <div className="input__block signup-input__block">
            <FontAwesomeIcon
              icon="fa-solid fa-user"
              style={{
                marginLeft: "20px",
                paddingRight: "20px",
                borderRight: "solid 1px black",
              }}
            />
            <input
              type="id"
              placeholder="사용자 ID를 입력해 주세요."
              className="input"
              id="userName"
              name="userName"
            />
          </div>
          <div className="input__block">
            <FontAwesomeIcon
              icon="fa-solid fa-lock"
              style={{
                marginLeft: "20px",
                paddingRight: "20px",
                borderRight: "solid 1px black",
              }}
            />

            <input
              type={isPasswordVisible ? "text" : "password"}
              name="password"
              placeholder="비밀번호를 입력해 주세요."
              id="password"
              autoComplete="off"
            />
            <span onClick={togglePasswordVisibility}>
              {isPasswordVisible ? (
                <FontAwesomeIcon
                  icon={["fas", "eye"]}
                  style={{
                    marginRight: "20px",
                    opacity: "0.5",
                  }}
                />
              ) : (
                <FontAwesomeIcon
                  icon={["fas", "eye-slash"]}
                  style={{
                    marginRight: "20px",
                    opacity: "0.5",
                  }}
                />
              )}
            </span>
          </div>
          <CheckBoxContainer>
            <StyledCheckBox
              type="checkbox"
              id="maintianSignIn"
            ></StyledCheckBox>
            <label
              htmlFor="maintianSignIn"
              style={{ color: "white", marginRight: "16px" }}
            >
              로그인 상태 유지
            </label>

            <StyledCheckBox type="checkbox" id="saveId"></StyledCheckBox>
            <label htmlFor="saveId" style={{ color: "white" }}>
              ID 기억하기
            </label>
          </CheckBoxContainer>

          <Separator></Separator>
          <button type="submit" className="signin__btn">
            로그인하기
          </button>
        </Form>
        <div style={{ display: "flex" }}>
          <SignUpStyledLink to="/pwhelp" style={{ marginLeft: "20px" }}>
            비밀번호를 잊어버리셨나요?
          </SignUpStyledLink>
        </div>
        <Separator></Separator>
        <p style={{ color: "white", fontSize: "0.6rem" }}>
          계정이 없나요? <SignUpStyledLink to="/signup">가입</SignUpStyledLink>
          하세요.
        </p>
      </Container>
      <BackGroundImg
        src={`${process.env.PUBLIC_URL}/img/backGroundLogo.svg`}
      ></BackGroundImg>
    </>
  );
};

export default SignIn;
