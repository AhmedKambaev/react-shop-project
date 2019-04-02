
const initialState = {
    loading: true,
    products: [],
    user_data: {
        firstName: 'Ахмед',
        lastName: 'Камбаев',
        fullName: 'Камбаев Ахмед Русланович',
        email: 'kambaevahmed@list.ru',
        about_me: 'Привет! Я Камбаев Ахмед, 19 лет, живу в городе Каспийск. ' +
            'Учусь в колледже, данное приложение разработанно мною. ' +
            'Для стилизации использовал шаблон Ubold.',
        number: '+7(892)-66-44',
        location: 'Россия',
        news: [
            {
                id: 1000,
                text: 'Мой первый пост',
                image: 'assets/images/macbook.png',
                time: 20 + ':' + 31
            }
        ]
    },
    card_blocks: [
        {
            id: 9000,
            image: 'assets/images/products/product-1.jpg',
            title: 'Первый продукт',
            time: 20 + ':' + 31,
            total: '$64'
        },
        {
            id: 9001,
            image: 'assets/images/products/product-2.jpg',
            title: 'Первый продукт',
            time: 20 + ':' + 36,
            total: '$68'
        }
    ],
    newAdd: '',
    error: null
};
let idNews = 2000;
let idProducts = 100;
let cardId = 10000;

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'LOADING':
            const data = action.payload;
            return {
                ...state,
                loading: false,
                products: data,
                error: null
            };
        case 'NEW_CHANGE':
            const value = action.payload;
            return {
                ...state,
                newAdd: value
            };
        case 'ADD_NEW':
            const objNew = {
                id: idNews,
                text: action.payload,
                image: 'assets/images/macbook.png',
                time: new Date().getHours() + ':' + new Date().getMinutes()
            };
            idNews++;
            return {
                ...state,
                user_data: {
                    ...state.user_data,
                    news: [
                        ...state.user_data.news,
                        objNew
                    ]
                },
                newAdd: ''
            };
        case 'CHANGE_INFO':
            const { firstNameValue,
                lastNameValue,
                about_me_value,
                email_value,
                number_value } = action.payload;

            return {
                ...state,
                user_data: {
                    ...state.user_data,
                    firstName: firstNameValue,
                    lastName: lastNameValue,
                    about_me: about_me_value,
                    email: email_value,
                    number: number_value,
                    fullName: `${firstNameValue} ${lastNameValue}`
                }
            };
        case 'DELETE_PRODUCT':
            const idxDelProduct = action.payload;
            const findIdxDel = state.products.findIndex((el) => el.id === idxDelProduct);
            const newArrayProduct = [
                ...state.products.slice(0, findIdxDel),
                ...state.products.slice(findIdxDel + 1)
            ];
            return {
                ...state,
                products: newArrayProduct
            };
        case 'DELETE_CARD':
            const idxDelCard = action.payload;
            const findIdxCard = state.card_blocks.findIndex((el) => el.id === idxDelCard);
            const newArrayCards = [
                ...state.card_blocks.slice(0, findIdxCard),
                ...state.card_blocks.slice(findIdxCard + 1)
            ];
            return {
                ...state,
                card_blocks: newArrayCards
            };
        case 'DELETE_FULL_CARDS':
            return {
                ...state,
                card_blocks: []
            };
        case 'BUY_PROJECT':
            const objProduct = action.payload;
            const findIdxObjCard = state.card_blocks.find((el) => el.id === objProduct.id);
            let newObjProductCard = {};
            if(!findIdxObjCard) {
                 newObjProductCard = {
                    id: objProduct.id,
                    image: objProduct.image,
                    title: objProduct.title,
                    time: new Date().getHours() + ':' + new Date().getMinutes(),
                    total: `$${objProduct.price}`
                };
                 return {
                    ...state,
                    card_blocks: [
                        ...state.card_blocks,
                        newObjProductCard
                    ]
                 };
            } else {
                return state;
            }
        case 'ADD_PRODUCT':
            const {title, image, price} = action.payload;
            const newObjProduct = {
                id: idProducts,
                title,
                image,
                price
            };
            idProducts++;
            return {
                ...state,
                products: [
                    ...state.products,
                    newObjProduct
                ]
            };

        default:
            return state;
    }
};

export default reducer;