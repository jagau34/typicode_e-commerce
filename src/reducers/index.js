import rc from '../constants/redux-constant';

const initialState = {
    products: []
}


const productsReducer = (state = {...initialState}, action) => {
    switch (action.type) {
        case rc.PRODUCTS_SUCCESS:
            return {
                ...state,
                products: action.results.products,
                totalElements: action.results.totalElements,
                currentPage: action.results.currentPage,

            }
        default: return { ...state }
    }
};

export default productsReducer;