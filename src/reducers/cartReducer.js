import rc from '../constants/redux-constant';

const initialState = {
    products: [],
    productDatas: []
}


const cartReducer = (state = {...initialState}, action) => {
    switch (action.type) {
        case rc.PRODUCT_ADDED:
            return {
                ...state,
                products: [...action.results]
            }
        case rc.PRODUCT_REMOVED: {
            const { products, productDatas } = action.results;
            return {
                ...state,
                products,
                productDatas
            }
        }
            case rc.PRODUCT_LIST_SUCCESS:
            return {
                ...state,
                productDatas: [...action.results]
            }
        default: return { ...state }
    }
};

export default cartReducer;