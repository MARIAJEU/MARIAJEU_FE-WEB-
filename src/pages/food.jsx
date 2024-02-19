import {
    Container,
    CardImg,
    CardContainer,
    TitleContatiner,
    NameDetail,
    Title,
    EnglishName,
    CharacterContainer,
    CharacterCard,
    WineDetailCard,
    WindDetailTitle,
    TagContainer,
    EclipseImg,
    TagFood,
    TagWine,
    HeartImg,
    IngredientTitle,
    IngredientCard,
    IngredientCardTitle,
    Ingredient,
    IngredientFood,
    IngredientIngre,
    Step,
    CommentTitle,
} from './food.style';
import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../authProvider';
import axios from 'axios';
import { useLocation } from 'react-router-dom';

const Food = () => {
    const location = useLocation();
    const { id } = location.state;

    const [food, setFood] = useState({})

    const { url, accessToken } = useContext(AuthContext);

    useEffect(() => {
        if (accessToken) {
            axios.get(url + `/api/FoodArticle/${id}`, {
                headers: {
                    Authorization: `Bearer ${accessToken}`
                }
            }).then(response => {
                console.log('GET 요청이 성공했습니다.');
                console.log('응답 데이터:', response.data);
                setFood(response.data);
            })
                .catch(error => {
                    console.error('GET 요청이 실패했습니다:', error);
                });
        }
    }, [accessToken]);

    return (
        <Container>
            {Object.keys(food).length > 0 && (
                <div>
                    <CardContainer>
                        <CardImg src={food.imgUrl} />
                        <TitleContatiner>
                            <NameDetail>{food.foodName}</NameDetail>
                            <Title>{food.foodName}</Title>
                            <EnglishName>{food.foodEnglishName}</EnglishName>
                            {/* <CharacterContainer>
                                {food.characters.map((character, index) => {
                                    return (
                                        <CharacterCard key={index}>{character}</CharacterCard>
                                    )
                                })}
                            </CharacterContainer> */}
                            <WineDetailCard>
                                <WindDetailTitle>와인의 특성</WindDetailTitle>
                            </WineDetailCard>
                        </TitleContatiner>
                    </CardContainer>
                    <TagContainer>
                        <TagFood>{food.foodName}</TagFood>
                        <EclipseImg src="./icons/eclipse.png" />
                        <TagWine>{food.wineType}</TagWine>
                        <EclipseImg src="./icons/eclipse.png" />
                        <HeartImg src="./icons/heart.png" />
                        <TagFood>{food.likesCount}</TagFood>
                    </TagContainer>
                    <div style={{ marginBottom: '6rem' }}>
                        <IngredientTitle>재료</IngredientTitle>
                        <div style={{ display: 'flex', flexDirection: 'row' }}>
                            <IngredientCard>
                                <IngredientCardTitle>[필수 재료]</IngredientCardTitle>
                                {food.primaryIngredients.map((ingredient, index) => {
                                    return (
                                        <Ingredient key={index}>
                                            <IngredientFood>{ingredient.name}</IngredientFood>
                                            <IngredientIngre>{ingredient.quantity}</IngredientIngre>
                                        </Ingredient>
                                    )
                                })}

                            </IngredientCard>
                            <IngredientCard>
                                <IngredientCardTitle>[소스 재료]</IngredientCardTitle>
                                {food.sauceIngredients.map((ingredient, index) => {
                                    return (
                                        <Ingredient key={index}>
                                            <IngredientFood>{ingredient.name}</IngredientFood>
                                            <IngredientIngre>{ingredient.quantity}</IngredientIngre>
                                        </Ingredient>
                                    )
                                })}
                            </IngredientCard>
                        </div>
                    </div>
                    <div style={{ marginBottom: '6rem' }}>
                        <IngredientTitle>조리 순서</IngredientTitle>
                        {food.instructions.map((instruction, index) => {
                            return (
                                <Step key={index}>{index+1}. {instruction}</Step>
                            )
                        })}
                    </div>
                    <div style={{ marginBottom: '6rem' }}>
                        <IngredientTitle>레시피 영상</IngredientTitle>
                    </div>
                    <div style={{ marginBottom: '10rem' }}>
                        <CommentTitle>우리들의 MARIAJEU</CommentTitle>
                    </div>
                </div>
            )}
        </Container >
    );

}

export default Food;