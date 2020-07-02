import rc from '../constants/redux-constant';

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
            dispatch({
                type: rc.PRODUCTS_SUCCESS,
                results: res
            })
        }
        )
}

export const getListByIds = (ids) => (dispatch, getState) => {
    let searchResquest = ''
    ids.map(id => {
        searchResquest = searchResquest.length ? `${searchResquest}&id=${id}` : `?id=${id}`;
        return id;
    })
    return fetch(`http://localhost:3000/products${searchResquest}`)
        .then(
            response => response.json()
        )
        .then(async (json) => {
            dispatch({
                type: rc.PRODUCT_LIST_SUCCESS,
                results: json
            })
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

export const remove = (id) => (dispatch, getState) => {
    let products = [...getState().cartReducer.products];
    let productDatas = [...getState().cartReducer.productDatas];
    const index = products.indexOf(id);
    if (index === -1)
        return;
    products = products.filter(productId => productId !== id);
    productDatas = productDatas.filter(product => product.id !== id);
    return dispatch({
        type: rc.PRODUCT_REMOVED,
        results: {
            products,
            productDatas
        }
    })
}