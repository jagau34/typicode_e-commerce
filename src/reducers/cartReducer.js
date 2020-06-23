import rc from '../constants/redux-constant';

const initialState = {
    products: []
}


const cartReducer = (state = {...initialState}, action) => {
    switch (action.type) {
        case rc.PRODUCT_ADDED:
            return {
                ...state,
                products: [...action.results]
            }
        default: return { ...state }
    }
};

export default cartReducer;