import React from 'react';
import Orders from '../content-shop';
import { connect } from 'react-redux';
import { withStoreService } from '../hoc';
import Spinner from "../spinner";
import ErrorIndicator from "../eror-indicator";
import { loadingFunc, deleteProduct } from "../../actions";

class HomePage extends React.Component {

    componentDidMount() {
        const { loadingFunc, storeService } = this.props;
        storeService.getProducts()
            .then((data) => {
                loadingFunc(data);
            })
            .catch((err) => {
                console.log(err);
            });

    }


    render() {
        if(this.props.loading) {
            return <Spinner />
        }
        if(this.props.error) {
            return <ErrorIndicator />
        }
        const { products } = this.props;
        return (
            <div>
                <section className="content-page">
                    <div className="content">
                        <div className="container-fluid">
                            <div className="col-12">
                                <div className="page-title-box">
                                    <div className="page-title-right">
                                        Только лучшие товары!
                                    </div>
                                    <h4 className="page-title">Список товаров</h4>
                                </div>
                            </div>
                            <Orders deleteProduct={this.props.deleteProduct} products={products} />
                        </div>
                    </div>
                </section>
            </div>
        );
    };
};

const mapStateToProps = (state) => {
    return {
        error: state.error,
        loading: state.loading,
        products: state.products
    }
};

const mapDispatchToProps = {
    loadingFunc,
    deleteProduct
};

export default withStoreService()(connect(mapStateToProps, mapDispatchToProps)(HomePage));
