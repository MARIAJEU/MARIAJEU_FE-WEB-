import React, { useState } from 'react';
import '../styles.css';
import {
    DivContainer,
    PrevButton,
    CarouselContainer,
    ItemContainer,
    ListButtonContainer,
    ListButton,
    NextButton,
} from './carousel.style.jsx';

const Carousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const [items, setItems] = useState([
        { id: 1, backgroundColor: '', imgUrl: '', btnColor: '#33134B' },
        { id: 2, backgroundColor: 'grey', imgUrl: '2', btnColor: '#FEFEFE' },
        { id: 3, backgroundColor: 'blue', imgUrl: '3', btnColor: '#FEFEFE' },
    ]);

    const totalItems = items.length;
    const handleClick = (index) => {
        const updatedItems = [...items];

        // 기존 버튼들의 배경색을 초기화
        updatedItems.forEach(item => {
            item.btnColor = '#FEFEFE';
        });

        // 클릭한 버튼의 배경색을 변경
        updatedItems[index].btnColor = '#33134B';

        // 상태를 업데이트
        setItems(updatedItems);

        setCurrentIndex(index);
    };

    const nextSlide = () => {
        handleClick((currentIndex + 1) % totalItems);
        setCurrentIndex((currentIndex + 1) % totalItems);
    };

    const prevSlide = () => {
        handleClick((currentIndex + 1) % totalItems);
        setCurrentIndex((currentIndex - 1 + totalItems) % totalItems);
    };

    return (
        <DivContainer>
            <PrevButton
                onClick={prevSlide}
            >
                ❮
            </PrevButton>
            <CarouselContainer>
                {items.map((item, index) => (
                    <ItemContainer
                    key={item.id}
                    $backgroundColor={item.backgroundColor}
                    $currentIndex={currentIndex}
                    >
                        {item.content}
                    </ItemContainer>
                ))}
                <div style={{ position: "absolute" }}>
                    <ListButtonContainer>
                        {items.map((item, index) => (
                            <ListButton
                                $btnColor={item.btnColor}
                                key={item.id}
                                onClick={() => handleClick(index)} />
                        ))}
                    </ListButtonContainer>
                </div>
            </CarouselContainer>

            <NextButton onClick={nextSlide}>
                ❯
            </NextButton>
        </DivContainer>
    );
};

export default Carousel;