import React from 'react';
import { Link } from 'react-router-dom';

const LeftMenu = () => {
    return (
        <div className="left-side-menu" style={{zIndex: 100}}>
            <div className="slimscroll-menu">
                <div id="sidebar-menu">
                    <ul className="metismenu" id="side-menu">
                        <li className="menu-title">Левое меню</li>
                        <li>
                            <Link to="/user-page" className="dropdown-item notify-item active">
                                <i className="fe-user"></i>
                                <span>Моя страница</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/" className="dropdown-item notify-item active">
                                <i className="fas fa-door-open"></i>
                                <span> Главная</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/card-page" className="dropdown-item notify-item active">
                                <i className="fe-shopping-cart"></i>
                                <span> Корзина</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/rating" className="dropdown-item notify-item active">
                                <i className="fe-bar-chart"></i>
                                <span> Рейтинг продаж</span>
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="clearfix"></div>
            </div>
        </div>
    );
};


export default LeftMenu;