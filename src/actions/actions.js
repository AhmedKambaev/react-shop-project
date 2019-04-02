const loadingFunc = (data) => {
    return {
        type: 'LOADING',
        payload: data
    }
};

const about_me_change_action = (value) => {
    return {
        type: 'ABOUT_ME_CHANGE',
        payload: value
    }
};

const newAdd_action = (value) => {
    return {
        type: 'NEW_CHANGE',
        payload: value
    }
};

const addNew = (data) => {
    return {
        type: 'ADD_NEW',
        payload: data
    }
};

const changeMyInfo = (obj) => {
    return {
        type: 'CHANGE_INFO',
        payload: obj
    }
};

const deleteProduct = (id) => {
    return {
        type: 'DELETE_PRODUCT',
        payload: id
    }
};

const deleteCardBlock = (id) => {
    return {
        type: 'DELETE_CARD',
        payload: id
    }
};

const deleteFullCards = () => {
    return {
        type: 'DELETE_FULL_CARDS'
    }
};

const buyProduct = (obj) => {
    return {
        type: 'BUY_PROJECT',
        payload: obj
    }
};

const addProduct = (obj) => {
    return {
        type: 'ADD_PRODUCT',
        payload: obj
    }
};

export {
    loadingFunc,
    addNew,
    addProduct,
    deleteProduct,
    newAdd_action,
    changeMyInfo,
    deleteCardBlock,
    deleteFullCards,
    buyProduct,
    about_me_change_action
}