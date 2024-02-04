import styled from 'styled-components';

export const Container = styled.div`
margin: 5rem 20% 0 15%;
height: 100rem;
`;

export const CardContainer = styled.div`
    display: flex;
    flex-direction: row;
`;

export const CardImg = styled.img`
    width: 70%;
    min-height: 80%;
    background-color: pink;
    
`;

export const TitleContatiner = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 2%;
    width: 100%;
`;

export const NameDetail = styled.p`
    margin: 0;
    font-family: Inter;
    font-weight: normal;
    font-size: 1rem;
`;

export const Title = styled.p`
    margin: 1% 0;
    font-family: Inter;
    font-weight: 600;
    font-size: 3rem;
`;

export const EnglishName = styled.p`
    margin: 0;
    font-family: Inter;
    font-size: 1.2rem;
    font-weight: normal;
`;

export const CharacterContainer = styled.div`
    margin: 2% 0;
    display: flex;
    flex-direction: row;

`;

export const CharacterCard = styled.div`
    background-color: #E6C6FF;
    border-radius: 0.8rem;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 1%;
    min-width: 4rem;
    height: 0.8rem;
    padding: 1%;
    font-family: Inter;
    font-weight: normal;
    font-size: 1rem;
`;

export const WineDetailCard = styled.div`
    background-color: #FFF;
    border: 1px solid #000;
    border-radius: 1.5rem;
    width: 100%;    
    height: 10rem;
    padding: 0 5%;
    display: flex;
    justify-content: center;
`;

export const WindDetailTitle = styled.p`
    font-family: Inter;
    font-weight: 600;
    font-size; 1.8rem;
    
`;

export const TagContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 1% 0;
    margin-bottom: 5rem;
`;

export const EclipseImg = styled.img`
    width: 0.3rem;
    height: 0.3rem;
    margin: 0 1%;
`;

export const TagFood = styled.p`
    font-family: Inter;
    font-weight: normal;
    font-size: 1rem;
    margin: 0;
`;

export const TagWine = styled.p`
    font-family: Inter;
    font-weight: normal;
    font-size: 1rem;
    color: #8B1A10;
    text-decoration: underline;
    margin: 0;
`;

export const HeartImg = styled.img`
    height: 0.8rem;
    width: 0.8rem;
    margin-right: 0.5%;
`;

export const IngredientTitle = styled.p`
    font-family: Inter;
    font-weight: 600;
    font-size: 1.5rem;
`;

export const IngredientCard = styled.div`
    width: 35%;
    margin-right: 10%;
`;

export const IngredientCardTitle = styled.div`
    font-family; Inter;
    font-weight: 400;
    font-size: 1rem;
    margin-bottom: 0.6rem;
`;

export const Ingredient = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    padding: 2%;
    border-bottom: 1px solid rgba(0, 0, 0, 0.4);
`;

export const IngredientFood = styled.p`
    margin: 0 5% 0 0;
    font-family: Inter;
    font-weigth: 400;
    font-size: 1rem;
    width: 35%;
`;

export const IngredientIngre = styled.p`
    margin: 0;
`;

export const Step = styled.div`
    font-family: Inter;
    font-weight: 400;
    font-size: 1rem;
    line-height: 2rem;
`;

export const CommentTitle = styled.p`
    font-family: Inter;
    font-weight: 600;
    font-size: 1.5rem;
    border-bottom: 1px solid #000000;
    width: 100%;
`;