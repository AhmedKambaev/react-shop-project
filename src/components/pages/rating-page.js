import React from 'react';
import { connect } from 'react-redux';
import { withStoreService } from '../hoc';
import Spinner from "../spinner";
import ErrorIndicator from "../eror-indicator";
import { loadingFunc, deleteProduct, buyProduct } from "../../actions";
import './page.css';


class RatigPage extends React.Component {
    componentDidMount() {
        const { loadingFunc, storeService } = this.props;
        storeService.getProducts()
            .then((data) => {
                loadingFunc(data);
            })
            .catch((err) => {
                console.log(err);
            });

    };

    render() {
        if(this.props.loading) {
            return <Spinner />
        }
        if(this.props.error) {
            return <ErrorIndicator />
        }
        return (
            <div className="content-page">
                <div className="content">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-12">
                                <div className="page-title-box">
                                    <div className="page-title-right">
                                        Данные
                                    </div>
                                    <h4 className="page-title">Данные</h4>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-4">
                                <div className="card-box ribbon-box">
                                    <div className="ribbon ribbon-blue float-left"><i
                                        className="mdi mdi-access-point mr-1"></i> Blue
                                    </div>
                                    <h5 className="text-blue float-right mt-0">Blue Header</h5>
                                    <div className="ribbon-content">
                                        <p className="mb-0">Quisque nec turpis at urna dictum luctus. Suspendisse
                                            convallis dignissim eros at volutpat. In egestas
                                            mattis dui. Aliquam mattis dictum aliquet. Nulla sapien mauris, eleifend et
                                            sem ac, commodo dapibus odio.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="card-box ribbon-box">
                                    <div className="ribbon ribbon-info float-left"><i
                                        className="mdi mdi-access-point mr-1"></i> Info
                                    </div>
                                    <h5 className="text-info float-right mt-0">Info Header</h5>
                                    <div className="ribbon-content">
                                        <p className="mb-0">Quisque nec turpis at urna dictum luctus. Suspendisse
                                            convallis dignissim eros at volutpat. In egestas
                                            mattis dui. Aliquam mattis dictum aliquet. Nulla sapien mauris, eleifend et
                                            sem ac, commodo dapibus odio.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="card-box ribbon-box">
                                    <div className="ribbon ribbon-pink float-left"><i
                                        className="mdi mdi-access-point mr-1"></i> Pink
                                    </div>
                                    <h5 className="text-pink float-right mt-0">Pink Header</h5>
                                    <div className="ribbon-content">
                                        <p className="mb-0">Quisque nec turpis at urna dictum luctus. Suspendisse
                                            convallis dignissim eros at volutpat. In egestas
                                            mattis dui. Aliquam mattis dictum aliquet. Nulla sapien mauris, eleifend et
                                            sem ac, commodo dapibus odio.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
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

export default withStoreService()(connect(mapStateToProps, mapDispatchToProps)(RatigPage));
