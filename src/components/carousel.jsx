import React, { useState } from 'react';
import '../styles.css'; // Tailwind CSS를 import

const Carousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const [items, setItems] = useState([
        { id: 1, backgroundColor: '', content: '', btnColor: 'bg-[#33134B]' },
        { id: 2, backgroundColor: 'bg-green-500', content: '2', btnColor: 'bg-[#FEFEFE]' },
        { id: 3, backgroundColor: 'bg-blue-500', content: '3', btnColor: 'bg-[#FEFEFE]' },
    ]);

    const totalItems = items.length;
    const handleClick = (index) => {
        const updatedItems = [...items];

        // 기존 버튼들의 배경색을 초기화
        updatedItems.forEach(item => {
            item.btnColor = 'bg-[#FEFEFE]';
        });

        // 클릭한 버튼의 배경색을 변경
        updatedItems[index].btnColor = 'bg-[#33134B]';

        // 상태를 업데이트
        setItems(updatedItems);

        setCurrentIndex(index);
        
    };

    const nextSlide = () => {
        setCurrentIndex((currentIndex + 1) % totalItems);
    };

    const prevSlide = () => {
        setCurrentIndex((currentIndex - 1 + totalItems) % totalItems);
    };

    return (
        <div className="w-full bg-[#E6E5E8] h-[31rem] flex justify-center items-center">
            <button
                className="transform cursor-pointer text-black bg-white border-none size-9 left-24 rounded-full shadow-[0_2px_10px_0_rgba(0,0,0,0.25)]"
                onClick={prevSlide}
            >
                ❮
            </button>
            <div className="relative flex transition-transform duration-500 ease-in-out w-7/12 h-full ml-8 mr-8 items-end overflow-hidden">
                {items.map((item, index) => (
                    <div
                        key={item.id}
                        className={`min-w-full box-border ${item.backgroundColor} text-white h-5/6`}
                        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                    >
                        {item.content}
                    </div>
                ))}
                <div className="absolute">
                    <div className="flex space-x-4">
                        {items.map((item, index) => (
                            <button
                                key={item.id}
                                className={`cursor-pointer text-black ${item.btnColor} order-none size-3 mb-4 ml-2 rounded-full`}
                                onClick={() => handleClick(index)}
                            >
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            <button
                className="transform cursor-pointer text-black bg-white border-none size-9 right-24 rounded-full shadow-[0_2px_10px_0_rgba(0,0,0,0.25)]"
                onClick={nextSlide}
            >
                ❯
            </button>
        </div>
    );
};

export default Carousel;