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

const Food = () => {
    const food = {
        name: "연어 스테이크",
        englishName: "SALMON STEAK",
        nameDetail: "RED WINE과 잘 어울리는",
        imgUrl: '',
        characters: [
            "맛있는", "고소한"
        ],
        wineType: "RED WINE",
        wineCharacters: [90, 20, 80, 10],
        essentialIngredients: [
            ["연어", "400g"],
            ["토마토", "2개"],
            ["아보카도", "1개"],
            ["소금", "약간"],
            ["후추", "약간"]
        ],
        sauceIngredients: [
            ["간장", "2숟가락"],
            ["맛술", "2숟가락"],
            ["올리고당", "1숟가락"]
        ],
        steps: [
            "1. 생연어는 소금, 후추로 밑간하고 레몬을 올려 잠시 재운다.",
            "2. 예열된 팬에 올리브유를 살짝 두르고 껍질 쪽 먼저 익힌다.",
            "3. 한쪽이 익으면 버터를 넣고 마늘, 아스파라거스를 넣어 뒷면도 익혀낸다.",
            "4. 연어가 80%정도 익으면 소스 재료를 넣어 조려 완성한다."
        ]
    }
    return (
        <Container>

            <CardContainer>
                <CardImg src={food.imgUrl} />
                <TitleContatiner>
                    <NameDetail>{food.nameDetail}</NameDetail>
                    <Title>{food.name}</Title>
                    <EnglishName>{food.englishName}</EnglishName>
                    <CharacterContainer>
                        {food.characters.map((character, index) => {
                            console.log("character", character);
                            return (
                                <CharacterCard key={index}>{character}</CharacterCard>
                            )
                        })}
                    </CharacterContainer>
                    <WineDetailCard>
                        <WindDetailTitle>와인의 특성</WindDetailTitle>
                    </WineDetailCard>
                </TitleContatiner>
            </CardContainer>
            <TagContainer>
                <TagFood>{food.name}</TagFood>
                <EclipseImg src="./icons/eclipse.png" />
                <TagWine>{food.wineType}</TagWine>
                <EclipseImg src="./icons/eclipse.png" />
                <HeartImg src="./icons/heart.png" />
                <TagFood>123</TagFood>
            </TagContainer>
            <div style={{ marginBottom: '6rem' }}>
                <IngredientTitle>재료</IngredientTitle>
                <div style={{ display: 'flex', flexDirection: 'row' }}>
                    <IngredientCard>
                        <IngredientCardTitle>[필수 재료]</IngredientCardTitle>
                        {food.essentialIngredients.map((ingredient, index) => {
                            return (
                                <Ingredient>
                                    <IngredientFood>{ingredient[0]}</IngredientFood>
                                    <IngredientIngre>{ingredient[1]}</IngredientIngre>
                                </Ingredient>
                            )
                        })}

                    </IngredientCard>
                    <IngredientCard>
                        <IngredientCardTitle>[소스 재료]</IngredientCardTitle>
                        {food.sauceIngredients.map((ingredient, index) => {
                            return (
                                <Ingredient key={index}>
                                    <IngredientFood>{ingredient[0]}</IngredientFood>
                                    <IngredientIngre>{ingredient[1]}</IngredientIngre>
                                </Ingredient>
                            )
                        })}
                    </IngredientCard>
                </div>
            </div>
            <div style={{ marginBottom: '6rem' }}>
                <IngredientTitle>조리 순서</IngredientTitle>
                {food.steps.map((step, index) => {
                    return (
                        <Step key={index}>{step}</Step>
                    )
                })}
            </div>
            <div style={{ marginBottom: '6rem' }}>
                <IngredientTitle>레시피 영상</IngredientTitle>
            </div>
            <div style={{ marginBottom: '10rem' }}>
                <CommentTitle>우리들의 MARIAJEU</CommentTitle>
            </div>
        </Container >
    );

}

export default Food;