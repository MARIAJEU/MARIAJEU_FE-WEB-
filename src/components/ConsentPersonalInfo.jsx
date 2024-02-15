import React, { useState } from "react";
import styled from "styled-components";

const dataList = [
  {
    id: 1,
    name: "agreedToTerms1",
    text: "[필수] 마리아주 이용약관",
    isChk: false,
  },
  {
    id: 2,
    name: "agreedToTerms2",
    text: "[필수] 개인정보 수집에 동의",
    isChk: false,
  },
  {
    id: 3,
    name: "agreedToOptionalTerms",
    text: "[선택] 이벤트 혜택 정보 수신",
    isChk: false,
  },
];

const InfoContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 20px;
  background-color: white;
  overflow: hidden;
`;

const InfoCheckBoxWrapper = styled.div`
  padding: 0.4rem;
  display: flex;
  width: 90%;
  align-items: center;
  justify-content: start;
`;

const ConsentPersonalInfo = () => {
  const [data, setData] = useState(dataList);
  const changeInput = (e) => {
    const { name, checked } = e.target;
    if (name === "all") {
      setData(
        data.map((item) => {
          return {
            ...item,
            isChk: checked,
          };
        })
      );
    } else {
      setData(
        data.map((item) =>
          item.name === name ? { ...item, isChk: checked } : item
        )
      );
    }
  };

  return (
    <InfoContainer>
      <InfoCheckBoxWrapper>
        <input
          type="checkbox"
          name="all"
          onChange={changeInput}
          checked={data.filter((item) => item.isChk !== true).length < 1}
        />
        <label>전체 동의하기</label>
      </InfoCheckBoxWrapper>

      {data.map((item) => (
        <InfoCheckBoxWrapper key={item.id}>
          <input
            type="checkbox"
            name={item.name}
            checked={item.isChk}
            onChange={changeInput}
          />
          <label>{item.text}</label>
        </InfoCheckBoxWrapper>
      ))}
    </InfoContainer>
  );
};

export default ConsentPersonalInfo;
