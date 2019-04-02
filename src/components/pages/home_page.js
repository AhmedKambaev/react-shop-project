import React from 'react';
import Orders from '../content-shop';
import { connect } from 'react-redux';
import { withStoreService } from '../hoc';
import Spinner from "../spinner";
import ErrorIndicator from "../eror-indicator";
import { loadingFunc, deleteProduct, buyProduct } from "../../actions";
import './page.css';


class HomePage extends React.Component {

    state = {
        displayMessageAdd: false
    };

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

    getMessage = () => {
        if(this.state.displayMessageAdd) {
            const style = {
                color: 'black',
                position: 'fixed',
                zIndex: 100,
                minHeight: 200 + 'px',
                right: 30 + 'px',
                top: 70 + 'px'
            };
            setTimeout(() => this.setState({displayMessageAdd: false}), 1000);
            return (
                <div style={style}>
                    <div className="toast top-animation"
                         style={{width: 172 + 'px', opacity: 1, position: 'absolute', top: 0, right: 0}}>
                        <div className="toast-header">
                            <strong className="mr-auto">Сообщение</strong>
                            <button onClick={() => this.setState({displayMessageAdd: false})} type="button"
                                    className="ml-2 mb-1 close" data-dismiss="toast" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="toast-body">
                            Добавлено в корзину
                        </div>
                    </div>
                </div>
            );
        }
    };

    stateDisplay = () => {
        if(!this.state.displayMessageAdd) {
            this.setState({displayMessageAdd: true});
        }
    };


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
                            <Orders stateDisplay={this.stateDisplay} buyProduct={this.props.buyProduct} deleteProduct={this.props.deleteProduct} products={products} />
                        </div>
                    </div>
                </section>
                {this.getMessage()}
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
    buyProduct,
    deleteProduct
};

export default withStoreService()(connect(mapStateToProps, mapDispatchToProps)(HomePage));
