import styled from 'styled-components';

export const DivContainer = styled.div`
    width: 100%;
    background-color: #E6E5E8;
    height: 31rem;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const PrevButton = styled.button`
    cursor: pointer;
    color: black;
    background-color: white;
    border: none;
    width: 2.2rem;
    height: 2.2rem;
    left: 24px;
    border-radius: 50%;
    box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.25);
`;

export const CarouselContainer = styled.div`
    position: relative;
    display: flex;
    transition: transform 500ms ease-in-out;
    width: 58%;
    height: 100%;
    margin-left: 8px;
    margin-right: 8px;
    align-items: flex-end;
    overflow: hidden;
`;

export const ItemContainer = styled.div`
    min-width: 100%;
    box-sizing: border-box;
    background-color: ${ ({ backgroundColor }) => backgroundColor ? backgroundColor : '' };
    color: white;
    height: 83%;
    transform: ${({ currentIndex }) => `translateX(-${currentIndex * 100}%)`};
`;

export const ListButtonContainer = styled.div`
    display: flex;
    gap: 1rem;
    margin-left: 1rem;
`;

export const ListButton = styled.button`
    cursor: pointer;
    color: black;
    background-color: ${({ btnColor }) => btnColor};
    order: none;
    width: 0.8rem;
    height: 0.8rem;
    margin-bottom: 1rem;
    border-radius: 50%;
    border: none;
`;

export const NextButton = styled.button`
    cursor: pointer;
    color: black;
    background-color: white;
    border: none;
    width: 2.2rem;
    height: 2.2rem;
    right: 24px;
    border-radius: 50%;
    box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.25);
`;