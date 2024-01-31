import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from '../components/carousel';
import React, { useState } from 'react';

function Store() {
    const [questions, setQuestions] = useState([
        { id: 1, question: '업체 등록 과정에서 사업자 등록증이 필요한가요?', answer: '답변 1', showAnswer: false },
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
        <div className="text-center">
            <Carousel className="w-full" />
            <div className="w-7/12 mx-auto">
                {/* 버튼 */}
                <div className="mt-4 mb-8 flex flex-row">
                    <button className="flex-grow m-3 flex flex-row justify-center items-center h-[4.625rem] rounded-[3.125rem] bg-white border border-solid border-[#C5BDD6] shadow-[0_0_8px_0_rgba(0,0,0,0.25)]">
                        <img src="./icons/store_icon.svg" className="w-[1.625rem] h-[1.625rem] mr-3" />
                        <p className="font-Inter text-[#4E286B] text-sm not-italic font-medium leading-normal">
                            업체 등록하기
                        </p>
                    </button>
                    <button className="flex-grow m-3 flex flex-row justify-center items-center h-[4.625rem] rounded-[3.125rem] bg-white border border-solid border-[#C5BDD6] shadow-[0_0_8px_0_rgba(0,0,0,0.25)] ">
                        <img src="./icons/search_icon.svg" className="w-[1.625rem] h-[1.625rem] mr-3" />
                        <p className="font-Inter text-[#4E286B] text-sm not-italic font-medium leading-normal">
                            업체 찾기
                        </p>
                    </button>
                    <button className="flex-grow m-3 flex flex-row justify-center items-center h-[4.625rem] rounded-[3.125rem] bg-white border border-solid border-[#C5BDD6] shadow-[0_0_8px_0_rgba(0,0,0,0.25)]">
                        <img src="./icons/calendar_icon.svg" className="w-[1.625rem] h-[1.625rem] mr-3" />
                        <p className="font-Inter text-[#4E286B] text-sm not-italic font-medium leading-normal">
                            식당 예약하기
                        </p>
                    </button>
                    <button className="flex-grow m-3 flex flex-row justify-center items-center h-[4.625rem] rounded-[3.125rem] bg-white border border-solid border-[#C5BDD6] shadow-[0_0_8px_0_rgba(0,0,0,0.25)]">
                        <img src="./icons/question_icon.svg" className="w-[1.625rem] h-[1.625rem] mr-3" />
                        <p className="font-Inter text-[#4E286B] text-sm not-italic font-medium leading-normal">
                            FAQ 도움말
                        </p>
                    </button>
                </div>
                {/* 우리 가게 업체 등록하기 */}
                <div className="z-0 h-[9.3125rem] shrink-0 rounded-[2.625rem] bg-[#F0EAFC] backdrop-filter backdrop-blur-[2.5px] mt-4 mb-24 py-8 px-20 flex flex-row items-center ">
                    <img src="./icons/logo.png" className="w-[3.6875rem] h-[4.75rem] shrink-0 flex-none mr-4" />
                    <p className="text-[#000] font-Inter text-[0.9rem] font-normal leading-normal text-left flex-auto">가게의 장소, 영업시간, 사진 등을 등록하고,<br />다양한 편의 기능을 통해 고객들에게 가게를 알려보세요!</p>
                    <button className="h-[2.875rem] shrink-0 rounded-[1.5625rem] bg-[#4E286B] w-[12.4375rem] flex-none">
                        <p className="font-Inter text-[#FFF] not-italic text-[0.9rem] font-normal leading-normal">
                            우리가게 업체 등록하기 ▶
                        </p>
                    </button>
                </div>
                {/* 이용 안내 및 FAQ */}
                <div>
                    <p className='text-[#000] font-Inter text-[1.5rem] not-italic font-bold leading-normal text-left'>이용 안내 및 FAQ</p>
                    {questions.map((question, index) => (
                        <div
                            key={question.id}
                            className="border-b border-[#A49FAF]"

                        >
                            <div className=' flex flex-row items-center h-[4rem]'>
                                <img src="./icons/question2_icon.png" className='flex-none w-[1.5rem] h-[1.5rem] ml-4 mr-6' />
                                <p className='flex-auto text-left'>{question.question}</p>
                                <img src="./icons/down.svg" className='flex-none mr-6' onClick={() => toggleShowAnswer(index)} />
                            </div>
                            {question.showAnswer &&
                                <div className='bg-[#A49FAF] pl-16 text-left'>
                                    {question.answer}
                                </div>
                            }
                        </div>
                    ))}
                </div>
                {/* 앱 설치 안내 */}
                <div 
                className='h-[9rem] rounded-[2rem] mt-20 mb-16 px-12 py-12 flex flex-row items-center' 
                style={{ background: 'radial-gradient(108.9% 108.9% at 50% 50.26%, #996DBB 0%, #4E286B 100%)' }}>
                    <div className='flex-none w-[4.5rem] h-[4.5rem] shrink-0 rounded-[1rem] bg-white flex justify-center items-center'>앱<br/>아이콘</div>
                    <div className='flex-auto flex flex-column ml-6 justify-between h-[4.5rem]'>
                        <div className='text-white font-Inter text-[1rem] not-italic font-bold leading-normal text-left'>MARIAJEU 앱<br/>설치하시고, 편리하게 사용하세요.</div>
                        <div className='text-white font-Inter text-[0.8rem] not-italic font-normal leading-normal text-left'>와인 종류, 특성, 원하는 메뉴 제공을 모바일에서 편리하게!</div>
                    </div>
                    <div className='flex-none flex flex-column'>
                        <div className='w-[4rem] h-[4rem] shrink-0 bg-white flex items-center justify-center'>QR 코드</div>
                        <p  className='text-white font-Inter text-[0.7rem] not-italic font-normal leading-normal'>Google Play</p>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default Store;