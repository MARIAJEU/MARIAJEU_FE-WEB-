import styled from 'styled-components';

export const DivContainer = styled.div`
  width: 58%;
  margin: 0 auto;
`;

export const DivButton = styled.div`
    margin-top: 1rem;
    margin-bottom: 2rem;
    display: flex;
    flex-direction: row;
`;

export const Button = styled.button`
    flex-grow: 1;
    margin: 0.75rem; /* 3px의 m-3 값을 rem으로 변환 */
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    height: 4.625rem;
    border-radius: 3.125rem;
    background-color: white;
    border: 1px solid #C5BDD6;
    box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.25);
`;

export const ImgInButton = styled.img`
    width: 1.625rem;
    height: 1.625rem;
    margin-right: 0.75rem;
`;

export const PInButton = styled.p`
    font-family: 'Inter', sans-serif;
    color: #4E286B;
    font-size: 0.875rem; 
    font-style: normal;
    font-weight: 500;
    display: flex;
    align-items: center;
    margin: 0;
`;

export const RegisterCardContainer = styled.div`
    z-index: 0;
    height: 9.3125rem;
    flex-shrink: 0;
    border-radius: 2.625rem;
    background-color: #F0EAFC;
    backdrop-filter: blur(2.5px);
    margin-top: 1rem;
    margin-bottom: 3.75rem;
    padding: 5% 10%;
    display: flex;
    flex-direction: row;
    align-items: center;
`;

export const RegisterCardImg = styled.img`
    width: 3.6875rem;
    height: 4.75rem;
    flex-shrink: 0;
    flex-grow: none;
    margin-right: 1rem;
`;

export const RegisterCardP = styled.p`
    color: #000;
    font-family: 'Inter', sans-serif;
    font-size: 0.9rem;
    font-weight: normal;
    line-height: normal;
    text-align: left;
    flex: 1;
    margin-right: 1%;
`;

export const RegisterCardButton = styled.button`
    height: 2.875rem;
    flex-shrink: 0;
    border-radius: 1.5625rem;
    background-color: #4E286B;
    width: 12.4375rem;
    flex-grow: none;
`;

export const RegisterCardButtonP = styled.p`
    font-family: 'Inter', sans-serif;
    color: #FFF;
    font-style: normal;
    font-size: 0.9rem;
    font-weight: normal;
    line-height: normal;
    margin: 0;
`;

export const FAQQuestion = styled.p`
    color: #000;
    font-family: 'Inter', sans-serif;
    font-size: 1.5rem;
    font-style: normal;
    font-weight: bold;
    line-height: normal;
    text-align: left;
    margin: 0;
`;

export const QuestionDiv = styled.div`
    border-bottom: 1px solid #A49FAF;
`;

export const QuestionImgDiv = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    height: 4rem;
`;

export const QuestionImg = styled.img`
    flex: none;
    width: 1.5rem;
    height: 1.5rem;
    margin-left: 1rem;
    margin-right: 1.5rem;
`;

export const QuestionP = styled.p`
    flex: auto;
    text-align: left;
    margin: 0;
`;

export const QuestionButton = styled.img`
    flex: none;
    margin-right: 1.5rem;
    cursor: pointer;
`;

export const AnswerButton = styled.img`
    flex: none;
    margin-right: 1.5rem;
    cursor: pointer;
    width: 1rem;
`;

export const AnswerDiv = styled.div`
    padding-left: 16px;
    text-align: left;
    display: flex;
    flex-direction: row;
`;

export const AnswerCard = styled.div`
    background-color: #ECEAEF;
    border-radius: 1.2rem;
    min-height: 8rem;
    width: 100%;
    margin: 0 5% 1.5rem 0;
`;

export const AnswerP = styled.p`
    padding: 2% 3%;
`;

export const AppContainer = styled.div`
    height: 9rem;
    border-radius: 2rem;
    margin-top: 3rem;
    margin-bottom: 16px;
    padding: 3rem 3rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    background: radial-gradient(108.9% 108.9% at 50% 50.26%, #996DBB 0%, #4E286B 100%);
`;

export const AppIcon = styled.div`
    display: flex;
    flex-shrink: none;
    width: 4.5rem;
    height: 4.5rem;
    border-radius: 1rem;
    background-color: white;
    justify-content: center;
    align-items: center;
`;

export const AppDivContainer = styled.div`
    flex: auto;
    display: flex;
    flex-direction: column;
    margin-left: 6px;
    justify-content: space-between;
    height: 4.5rem;
    margin-left: 1.5rem;
`;

export const AppDivHeader = styled.div`
    color: white;
    font-family: 'Inter', sans-serif;
    font-size: 1rem;
    font-weight: bold;
    font-style: normal;
    line-height: normal;
    text-align: left;
    margin-bottom: 0.5rem;
`;

export const AppDivP = styled.div`
    color: white;
    font-family: 'Inter', sans-serif;
    font-size: 0.8rem;
    font-weight: normal;
    font-style: normal;
    line-height: normal;
    text-align: left;
    margin-bottom: 1rem;
`;

export const AppQRContainer = styled.div`
    flex: none;
    display: flex;
    flex-direction: column;
`;

export const AppQRDiv = styled.div`
    width: 4rem;
    height: 4rem;
    flex-shrink: 0;
    background-color: white;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const AppQRP = styled.p`
    color: white;
    font-family: 'Inter', sans-serif;
    font-size: 0.7rem;
    font-weight: normal;
    font-style: normal;
    line-height: normal;
    margin: 0;
`;