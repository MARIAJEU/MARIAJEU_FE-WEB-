import React, { useState } from "react";
import axios from "axios";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ConsentPersonalInfo from "./ConsentPersonalInfo";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
  z-index: 1;
  display: block;
  max-width: 400px;
  padding-top: 100px;
  height: 150vh;
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

const Form = styled.form`
  width: 100%;
  max-width: 680px;
  margin: 10px auto 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  p {
    font-size: 14px;
    margin: 0.8rem 0 0.2rem 1rem;
  }
  .input__block {
    display: flex;
    flex-direction: column;
    align-items: start;
    margin: 5px;
    position: relative;
    max-width: 680px;
    height: 4rem;
    border-radius: 20px;
    padding: 0 1rem 0 1rem;
    width: 90%;
    background: rgba(255, 255, 255);
    input {
      display: inline-block;
      width: 90%;
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

  .pw-input__block {
    display: flex;
    width: 100%;
  }
  .hf-input__block {
    width: 100%;
    display: flex;
    flex-direction: row;
  }

  .signin__btn {
    background: #3d1959;
    color: white;
    display: block;
    width: 92.5%;
    max-width: 680px;
    height: 50px;
    border-radius: 35px;
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
  width: 95%;
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
  border-radius: 20px;
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

const AuthButton = styled.button`
  display: block;
  width: 20%;
  max-width: 680px;
  margin: 5px auto 5px auto;
  height: inherit;
  cursor: pointer;
  font-size: 12px;
  font-family: "Montserrat", sans-serif;
  border-radius: 20px;
  border: none;
  line-height: auto;
  background: #3d1959;
  color: #ffffff;
  white-space: normal;

  .fa {
    font-size: 20px;
    padding: 0 5px 0 0;
  }

  &:hover {
    box-shadow: 0 0 0 rgba(37, 40, 45, 0);
  }
`;

const SignUp = () => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [email, setEmail] = useState("");
  const [responseAuthNum, setResponseAuthNum] = useState("");
  const navigate = useNavigate();
  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handleAuthNumChange = (e) => {
    setResponseAuthNum(e.target.value);
  };

  const handleSignUp = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const userData = {
      role: "USER",
      agreedToTerms1: false,
      agreedToTerms2: false,
      agreedToOptionalTerms: false,
    };

    formData.forEach((value, key) => {
      if (key !== "all") {
        userData[key] = value === "on" ? true : value;
      }
    });

    console.log(userData);
    try {
      const response = await axios.post(
        "http://43.202.194.137:8080/users/join",
        userData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      // 응답 로그
      console.log("응답:", response.data);
      alert("회원가입이 완료되었습니다!");
      navigate("/signin");
    } catch (error) {
      // 에러를 처리
      if (error.response) {
        console.error("응답 에러:", error.response.data);
      } else if (error.request) {
        console.error("응답 없음:", error.request);
      } else {
        console.error("요청 설정 에러:", error.message);
      }
    }
  };

  const handleMailSend = async (e) => {
    try {
      const response = await axios.post(
        "http://43.202.194.137:8080/mail/Send",
        {
          email: email,
        }
      );
      console.log("Response:", response.data);
    } catch (error) {
      // Handle errors
      if (error.response) {
        console.error("응답 에러:", error.response.data);
      } else if (error.request) {
        console.error("응답 없음:", error.request);
      } else {
        console.error("요청 설정 에러:", error.message);
      }
    }
  };

  const handleAuthCheck = async (e) => {
    try {
      const response = await axios.post(
        "http://43.202.194.137:8080/mail/Send",
        {
          email: email,
          authNum: responseAuthNum,
        }
      );

      console.log("Response:", response.data);
    } catch (error) {
      // Handle errors
      if (error.response) {
        console.error("응답 에러:", error.response.data);
      } else if (error.request) {
        console.error("응답 없음:", error.request);
      } else {
        console.error("요청 설정 에러:", error.message);
      }
    }
  };

  return (
    <>
      <Container>
        <Heading>가입하기</Heading>
        <KakaoButton>
          <FontAwesomeIcon
            icon={["fas", "comment"]} // 아이콘의 속성을 배열로 전달합니다.
            style={{ marginRight: "5px" }} // 스타일 객체를 올바르게 생성합니다.
          />
          카카오계정 LOGIN
        </KakaoButton>
        <Separator></Separator>
        <Form onSubmit={handleSignUp}>
          <div className="input__block">
            <p>사용자 ID</p>
            <input
              type="text"
              placeholder="5 ~ 12자"
              className="input"
              id="userName"
              name="userName"
            />
          </div>
          <div className="input__block">
            <p>비밀번호</p>
            <div className="pw-input__block">
              <input
                type={isPasswordVisible ? "text" : "password"}
                name="password"
                placeholder="8 ~ 16자리 / 영문, 숫자, 특수문자 조합"
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
          </div>
          <div className="input__block">
            <p>이름</p>
            <input
              type="text"
              placeholder="이름을 입력해 주세요."
              className="input"
              id="name"
              name="name"
            />
          </div>
          <div className="input__block">
            <p>닉네임</p>
            <input
              type="text"
              placeholder="닉네임"
              className="input"
              id="nickName"
              name="nickName"
            />
          </div>
          <div className="input__block">
            <p>전화번호</p>
            <input
              type="text"
              placeholder="01012345678"
              className="input"
              id="phoneNumber"
              name="phoneNumber"
            />
          </div>
          <div className="hf-input__block">
            <div className="input__block ">
              <p>이메일</p>
              <input
                type="email"
                placeholder="이메일을 입력해 주세요."
                className="input"
                id="email"
                name="email"
                onChange={handleEmailChange}
              />
            </div>

            <AuthButton onClick={handleMailSend}>
              인증<br></br>요청
            </AuthButton>
          </div>
          <div className="hf-input__block">
            <div className="input__block ">
              <p>인증 번호 입력</p>
              <input
                type="text"
                className="input"
                placeholder="O O O O O O"
                id="authNum"
                name="authNum"
                onChange={handleAuthNumChange}
              />
            </div>

            <AuthButton onClick={handleAuthCheck}>확인</AuthButton>
          </div>
          <ConsentPersonalInfo></ConsentPersonalInfo>
          <Separator></Separator>
          <button type="submit" className="signin__btn">
            로그인하기
          </button>
        </Form>
      </Container>
    </>
  );
};

export default SignUp;
