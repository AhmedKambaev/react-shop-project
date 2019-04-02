import React from 'react';


class Orders extends React.Component {
    render() {
        const { products, deleteProduct, stateDisplay } = this.props;
        return (
            <div className="row">
                {
                    products.map((product) => {
                        return (
                            <div className="col-md-4 col-xl-3" key={product.id} style={{maxWidth: 260 + 'px'}}>
                                <div className="card-box product-box">
                                    <div className="product-action">
                                        <button onClick={() => deleteProduct(product.id)}
                                           className="btn btn-danger btn-xs waves-effect waves-light">
                                            <i className="mdi mdi-close"></i>
                                        </button>
                                    </div>
                                    <div>
                                        <img src={product.image} alt="product-pic"
                                             className="img-fluid"/>
                                    </div>
                                    <div className="product-info">
                                        <div className="row align-items-center">
                                            <div className="col">
                                                <h5 className="font-16 mt-0 sp-line-1"><a
                                                    href="ecommerce-prduct-detail.html"
                                                    className="text-light">{product.title}</a></h5>
                                                <div className="text-warning mb-2 font-13">
                                                    <i className="fa fa-star"></i>
                                                    <i className="fa fa-star"></i>
                                                    <i className="fa fa-star"></i>
                                                    <i className="fa fa-star"></i>
                                                    <i className="fa fa-star"></i>
                                                </div>
                                                <button onClick={() => {
                                                    this.props.buyProduct(product)
                                                    stateDisplay();
                                                }} className="btn btn-primary">Купить</button>
                                            </div>
                                            <div className="col-auto">
                                                <div className="product-price-tag price-block">
                                                    ${product.price}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })
                }
            </div>
        );
    }
};

export default Orders;