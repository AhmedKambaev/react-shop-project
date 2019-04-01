import React from 'react';
import { connect } from 'react-redux';
import { withStoreService } from '../hoc';
import Spinner from "../spinner";
import ErrorIndicator from "../eror-indicator";
import { loadingFunc, deleteCardBlock, deleteFullCards } from "../../actions";
import { Link } from "react-router-dom";
import CardBlock from '../card-block';

class CardPage extends React.Component {

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
        return (
            <div>
                <section className="content-page">
                    <div className="content">
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-12">
                                    <div className="page-title-box">
                                        <div className="page-title-right">
                                            Товары в корзине
                                        </div>
                                        <h4 className="page-title">Товары</h4>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12">
                                    <div className="card">
                                        <div className="card-body">
                                            <div className="row mb-2">
                                                <div className="col-lg-8">
                                                    <form className="form-inline">
                                                        <div className="form-group mb-2">
                                                            <label htmlFor="inputPassword2"
                                                                   className="sr-only">Search</label>
                                                            <input type="search" className="form-control"
                                                                   id="inputPassword2" placeholder="Найти..." />
                                                        </div>
                                                    </form>
                                                </div>
                                                <div className="col-lg-4 block">
                                                    <div className="text-lg-right">
                                                        <Link to="/" type="button"
                                                                className="btn btn-danger waves-effect waves-light mb-2 mr-2">
                                                            <i className="mdi mdi-basket mr-1"></i> Купить ещё товар
                                                        </Link>
                                                        <button onClick={this.props.deleteFullCards} type="button"
                                                                className="btn btn-secondary waves-effect waves-light mb-2">Удалить всё
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="table-responsive">
                                                <table className="table table-centered mb-0">
                                                    <thead className="thead-light">
                                                    <tr style={{width: 100 + '%'}}>
                                                        <th>Продукт</th>
                                                        <th>Название</th>
                                                        <th>Дата</th>
                                                        <th>Цена</th>
                                                        <th>Статус товара</th>
                                                        <th style={{width: 125 + 'px'}}>Действия</th>
                                                    </tr>
                                                    </thead>
                                                    <CardBlock data={this.props.card_blocks}
                                                               deleteCardBlock={this.props.deleteCardBlock} />
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
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
        card_blocks: state.card_blocks,
        products: state.products
    }
};

const mapDispatchToProps = {
    loadingFunc,
    deleteFullCards,
    deleteCardBlock
};

export default withStoreService()(connect(mapStateToProps, mapDispatchToProps)(CardPage));
