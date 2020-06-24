import React, { PureComponent } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ReactPaginate from 'react-paginate';
import Product from './Product/Product';
import * as productsActions from '../../../actions/productsAction';
import './ProductList.css';

class ProductList extends PureComponent {
    componentDidMount = async () => {
        await this.props.productsActions.getList(0, 15);
    }

    onPageChange = async(page) => {
        await this.props.productsActions.getList(page.selected + 1, 15)
     }

    addProductToCart = async(productId) => {
        await this.props.productsActions.add(productId);
    }

    render() {
        const { products, totalElements } = this.props.productsReducer
        if (!products.length) return <div />;
        const productList = products.map((product) => {
            return <Product data={product} addProductToCart={this.addProductToCart} key={product.id} />
        })
        const totalPage = Math.ceil(totalElements / 15);
        const reactPaginate = (
            <ReactPaginate
                pageCount={totalPage}
                pageRangeDisplayed={5}
                marginPagesDisplayed={3}
                nextLabel=''
                previousLabel=''
                onPageChange={this.onPageChange}
                initialPage={0}
                containerClassName='pagination-container'
                pageClassName='pagination-content'
                activeClassName='selected-pagination'
                activeLinkClassName='active-link-pagination'
                pageLinkClassName='link-pagination'
                breakClassName='selected-pagination'
            />
        );

        const productsJsx = <div className='product-list-container'>
            {productList}
        </div>
        return <div>
            {productsJsx}
            {reactPaginate}
        </div>
    }
}


const mapDispatchToProps = (dispatch) => ({
    productsActions: bindActionCreators(productsActions, dispatch)
})

const mapStateToProps = (state) => ({
    productsReducer: state.productsReducer
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ProductList));