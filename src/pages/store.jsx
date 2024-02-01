import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from '../components/carousel';
import React, { useState } from 'react';
import {
    DivContainer,
    DivButton,
    Button,
    ImgInButton,
    PInButton,
    RegisterCardContainer,
    RegisterCardImg,
    RegisterCardP,
    RegisterCardButton,
    RegisterCardButtonP,
    FAQQuestion,
    QuestionDiv,
    QuestionImgDiv,
    QuestionImg,
    QuestionP,
    QuestionButton,
    AnswerDiv,
    AnswerButton,
    AnswerCard,
    AnswerP,
    AppContainer,
    AppIcon,
    AppDivContainer,
    AppDivHeader,
    AppDivP,
    AppQRContainer,
    AppQRDiv,
    AppQRP
} from './store.style';

function Store() {
    const [questions, setQuestions] = useState([
        { id: 1, question: '업체 등록 과정에서 사업자 등록증이 필요한가요?', answer: '안녕하세요. 마리아주입니다. 업체 등록 과정에서는 사업자 등록증이...', showAnswer: false },
        { id: 2, question: '업체 정보 수정은 어떻게 이루어지나요?', answer: '답변 2', showAnswer: false },
        { id: 3, question: '업체 정보 삭제를 하고 싶어요.', answer: '답변 3', showAnswer: false },
        { id: 4, question: '예약 건을 취소하고 싶어요. 어떻게 하나요?', answer: '답변 4', showAnswer: false },
    ]);

    const toggleShowAnswer = (index) => {
        const updateQuestions = [...questions];

        updateQuestions[index] = {
            ...updateQuestions[index],
            showAnswer: !updateQuestions[index].showAnswer,
        }

        setQuestions(updateQuestions);
    }

    return (
        <div>
            <Carousel />
            <DivContainer>
                {/* 버튼 */}
                <DivButton >
                    <Button>
                        <ImgInButton src="./icons/store_icon.svg" />
                        <PInButton>
                            업체 등록하기
                        </PInButton>
                    </Button>
                    <Button>
                        <ImgInButton src="./icons/search_icon.svg" />
                        <PInButton>
                            업체 찾기
                        </PInButton>
                    </Button>
                    <Button>
                        <ImgInButton src="./icons/calendar_icon.svg" />
                        <PInButton>
                            식당 예약하기
                        </PInButton>
                    </Button>
                    <Button>
                        <ImgInButton src="./icons/question_icon.svg" />
                        <PInButton>
                            FAQ 도움말
                        </PInButton>
                    </Button>
                </DivButton>
                {/* 우리 가게 업체 등록하기 */}
                <RegisterCardContainer>
                    <RegisterCardImg src="./icons/logo.png" />
                    <RegisterCardP>가게의 장소, 영업시간, 사진 등을 등록하고,<br />다양한 편의 기능을 통해 고객들에게 가게를 알려보세요!</RegisterCardP>
                    <RegisterCardButton >
                        <RegisterCardButtonP>
                            우리가게 업체 등록하기 ▶
                        </RegisterCardButtonP>
                    </RegisterCardButton>
                </RegisterCardContainer>
                {/* 이용 안내 및 FAQ */}
                <div>
                    <FAQQuestion>이용 안내 및 FAQ</FAQQuestion>
                    {questions.map((question, index) => (
                        <QuestionDiv key={question.id}>
                            <QuestionImgDiv>
                                <QuestionImg src="./icons/question2_icon.png" />
                                <QuestionP className='flex-auto text-left'>{question.question}</QuestionP>
                                {question.showAnswer ?
                                    <AnswerButton src="./icons/up.png" onClick={() => toggleShowAnswer(index)} />
                                    :
                                    <QuestionButton src="./icons/down.svg" onClick={() => toggleShowAnswer(index)} />
                                }
                            </QuestionImgDiv>
                            {question.showAnswer &&
                                <AnswerDiv>
                                    <QuestionImg src="./icons/answer.png" />
                                    <AnswerCard>
                                        <AnswerP>
                                            {question.answer}
                                        </AnswerP>
                                    </AnswerCard>
                                </AnswerDiv>
                            }
                        </QuestionDiv>
                    ))}
                </div>
                {/* 앱 설치 안내 */}
                <AppContainer>
                    <AppIcon>앱<br />아이콘</AppIcon>
                    <AppDivContainer>
                        <AppDivHeader>MARIAJEU 앱<br />설치하시고, 편리하게 사용하세요.</AppDivHeader>
                        <AppDivP>와인 종류, 특성, 원하는 메뉴 제공을 모바일에서 편리하게!</AppDivP>
                    </AppDivContainer>
                    <AppQRContainer>
                        <AppQRDiv>QR 코드</AppQRDiv>
                        <AppQRP>Google Play</AppQRP>
                    </AppQRContainer>
                </AppContainer>
            </DivContainer>
        </div>
    )

}

export default Store;