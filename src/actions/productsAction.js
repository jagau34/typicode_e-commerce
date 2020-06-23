import rc from '../constants/redux-constant';

export const getListAction = (results) => ({
    type: rc.PRODUCTS_SUCCESS,
    results
})


export const getList = (page = 0, size = 15) => (dispatch, getState) => {
    return fetch(`http://localhost:3000/products?_page=${page}&_limit=${size}`)
        .then(
            response => response.json()
        )
        .then(async (json) => {
            const res = {
                products: [...json],
                totalElements: await getTotalProducts(),
                currentPage: page,
                pageSize: size
            }
            dispatch(getListAction(res))
        }
        )
}

export const getTotalProducts = () => {
    return fetch(`http://localhost:3000/totalElements`)
        .then(
            response => response.json()
        )
        .then(json => {
            return json.totalElements;
        }
        )
}

export const add = (id) => (dispatch, getState) => {
    let products = [...getState().cartReducer.products];
    const index = products.indexOf(id);
    if (index !== -1)
        return;
    products = [...products, id];
    return dispatch({
        type: rc.PRODUCT_ADDED,
        results: products
    })
}