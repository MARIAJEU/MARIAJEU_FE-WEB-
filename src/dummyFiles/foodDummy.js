const foodDummy = [
  {
    id: 1,
    foodPicUrl:
      "https://cdn.sommeliertimes.com/news/photo/202011/17668_38687_3425.jpg",
    feature: ["단맛", "신맛", "타닌산", "알코올", "바디"],
    foodName: "연어",
    restaurantName: "오이시",
    location: "안산시 선부동",
    likesCount: 123,
    foodDescription:
      "연어는 풍부하고 기름진 식감으로 알려져 있기 때문에 와인의 이상적인 동반자가 됩니다.\n\n연어에 들어있는 천연 오일은 와인의 맛과 향을 높여주며 둘 사이에 조화로운 균형을 만들어줍니다.\n\n진한 샤르도네를 선택하든, 바삭한 소비뇽 블랑을 선택하든, 와인의 산미와 과즙이 연어의 식감을 완벽하게 보완해줍니다.",
    reviews: [
      "맛있고 와인과 궁합이 좋아요",
      "조용한 분위기가 마음에 드는 곳입니다. 데이트하기 좋아요",
    ],
  },
  {
    id: 2,
    foodPicUrl:
      "https://mblogthumb-phinf.pstatic.net/20160125_202/jinsancorp3383_1453727350704ERTn8_PNG/2016-01-25_22%3B08%3B50.png?type=w420",
    feature: ["단맛", "쓴맛", "과일향", "알코올", "미디엄바디"],
    foodName: "소고기 스테이크",
    restaurantName: "프라임 그릴",
    location: "서울시 강남구",
    likesCount: 98,
    foodDescription:
      "부드럽고 살코기가 풍부한 소고기 스테이크는 레드와인과 잘 어울립니다.\n\n탄닌이 풍부한 레드와인은 소고기의 기름기를 잘 균형있게 잡아주며, 풍부한 고소한 맛을 증폭시켜줍니다.\n\n특히 쁘띠 시라나 메를로가 훌륭한 선택일 것입니다.",
    reviews: [
      "최고의 스테이크! 와인과 찰떡궁합",
      "분위기가 좋고 음식 맛도 훌륭합니다.",
    ],
  },
  {
    id: 3,
    foodPicUrl:
      "https://recipe1.ezmember.co.kr/cache/recipe/2015/09/30/23f8658a8eca5e2ac613a1d8988f9f1e.jpg",
    feature: ["달콤한", "신맛", "가벼운", "알코올", "라이트바디"],
    foodName: "딸기 샐러드",
    restaurantName: "푸드헤븐",
    location: "인천시 부평구",
    likesCount: 45,
    foodDescription:
      "신선하고 달콤한 딸기로 만든 샐러드는 가볍고 상큼한 맛이 돋보입니다.\n\n라이트한 화이트 와인이 이 상큼한 딸기 샐러드와 잘 어울리며, 산뜻한 느낌을 더해줍니다.\n\n여름에 먹기 딱 좋은 건강한 메뉴입니다.",
    reviews: [
      "상큼하고 맛있는 샐러드! 와인과 함께 강추",
      "가볍게 먹기 좋은 메뉴. 분위기도 좋아요.",
    ],
  },
  {
    id: 4,
    foodPicUrl: "https://image.url",
    feature: ["매운맛", "달콤한", "가벼운", "알코올", "미디엄바디"],
    foodName: "마라탕",
    restaurantName: "마라탕마라탕",
    location: "서울시 마포구",
    likesCount: 76,
    foodDescription:
      "매운 맛과 달콤한 맛이 어우러진 마라탕은 가볍고 시원한 느낌이 납니다.\n\n미디엄 바디의 레드 와인이 이 음식과 조화를 이루어 훌륭한 식사를 즐길 수 있습니다.",
    reviews: [
      "매운 음식을 좋아해서 여기 자주 갑니다. 와인과 함께 먹으면 최고에요!",
      "분위기도 좋고 서비스도 훌륭해요.",
    ],
  },
  {
    id: 5,
    foodPicUrl: "https://image.url",
    feature: ["짠맛", "고소한", "크리미", "알코올", "풀바디"],
    foodName: "카본라 파스타",
    restaurantName: "이탈리안 다이닝",
    location: "부산시 해운대구",
    likesCount: 112,
    foodDescription:
      "짠맛과 고소한 크리미한 소스가 특징인 카본라 파스타는 풀바디의 화이트 와인과 잘 어울립니다.\n\n풍부한 향과 고소한 맛이 입안 가득 퍼져나갑니다.",
    reviews: [
      "이 집의 카본라 파스타는 정말 맛있어요. 와인과 함께 먹으면 최고!",
      "분위기도 로맨틱하고 음식 맛도 일품이에요.",
    ],
  },
  {
    id: 6,
    foodPicUrl: "https://image.url",
    feature: ["달콤한", "새콤한", "고소한", "알코올", "라이트바디"],
    foodName: "망고 새우 샐러드",
    restaurantName: "트로피컬 레스토랑",
    location: "제주도 서귀포시",
    likesCount: 88,
    foodDescription:
      "신선한 망고와 새우로 만든 샐러드는 달콤한 맛과 고소한 맛이 어우러져 상큼한 느낌을 줍니다.\n\n라이트한 화이트 와인이 이 망고 새우 샐러드와 잘 어울려 맛있게 즐길 수 있습니다.",
    reviews: [
      "여름에 먹기 딱 좋은 상큼한 샐러드에 와인이 잘 어울려요!",
      "제주도 풍경을 보면서 먹는 것은 최고의 힐링이에요.",
    ],
  },
  {
    id: 7,
    foodPicUrl: "https://image.url",
    feature: ["달콤한", "고소한", "신맛", "알코올", "미디엄바디"],
    foodName: "치즈플레이트",
    restaurantName: "와인앤치즈",
    location: "대구시 수성구",
    likesCount: 65,
    foodDescription:
      "다양한 종류의 치즈와 풍부한 향의 와인이 어우러져 완벽한 맛을 선사합니다.\n\n미디엄 바디의 레드 와인이 풍부한 치즈 맛과 어우러져 더욱 깊은 맛을 느낄 수 있습니다.",
    reviews: [
      "치즈와 와인의 조합은 언제나 최고에요! 이 곳은 특히 괜찮아요.",
      "와인과 치즈의 맛있는 조화, 꼭 경험해보세요!",
    ],
  },
  {
    id: 8,
    foodPicUrl: "https://image.url",
    feature: ["담백한", "고소한", "촉촉한", "알코올", "라이트바디"],
    foodName: "크림파스타",
    restaurantName: "파스타마스터",
    location: "인천시 중구",
    likesCount: 80,
    foodDescription:
      "담백하고 고소한 크림 소스가 특징인 크림파스타는 라이트한 화이트 와인과 잘 어울립니다.\n\n부드럽게 즐길 수 있는 맛으로 많은 이들에게 사랑받고 있습니다.",
    reviews: [
      "파스타가 정말 부드럽고 맛있어요. 와인과 함께 먹으면 최고!",
      "분위기도 좋고 서비스도 훌륭해요.",
    ],
  },
  {
    id: 9,
    foodPicUrl: "https://image.url",
    feature: ["새콤한", "매운맛", "신맛", "알코올", "미디엄바디"],
    foodName: "타코스",
    restaurantName: "멕시칸타코",
    location: "광주시 서구",
    likesCount: 92,
    foodDescription:
      "새콤한 소스와 매운맛이 어우러진 타코스는 미디엄 바디의 와인과 잘 어울립니다.\n\n맥시칸 음식을 즐기고 싶을 때 좋은 선택이 될 것입니다.",
    reviews: [
      "매운 음식을 좋아해서 여기 자주 갑니다. 와인과 함께 먹으면 최고에요!",
      "분위기도 멕시코 같아서 좋아요.",
    ],
  },
  {
    id: 10,
    foodPicUrl: "https://image.url",
    feature: ["짠맛", "쓴맛", "고소한", "알코올", "풀바디"],
    foodName: "오리 스프",
    restaurantName: "프렌치 레스토랑",
    location: "대전시 유성구",
    likesCount: 75,
    foodDescription:
      "풍부한 오리 육수와 쓴맛이 어우러진 오리 스프는 풀바디의 레드 와인과 잘 어울립니다.\n\n고소하고 특별한 맛을 느끼고 싶을 때 추천합니다.",
    reviews: [
      "오리 스프가 정말 맛있어요. 와인과 함께 먹으면 더 좋아집니다!",
      "프렌치 레스토랑 특유의 정갈한 맛이 좋아요.",
    ],
  },
];

export default foodDummy;
