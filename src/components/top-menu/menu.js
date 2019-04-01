import React from 'react';
import { Link } from 'react-router-dom';

const TopMenu = () => {
    return (
        <div className="navbar-custom" style={{zIndex: 200}}>
            <ul className="list-unstyled topnav-menu float-right mb-0">
                <li className="d-none d-sm-block">
                    <div className="app-search">
                        <div className="app-search-box">
                            <div className="input-group">
                                <input type="text" className="form-control" placeholder="Найти..." />
                                    <div className="input-group-append">
                                        <button className="btn" type="submit">
                                            <i className="fe-search"></i>
                                        </button>
                                    </div>
                            </div>
                        </div>
                    </div>
                </li>

                <li className="dropdown notification-list">
                    <span className="nav-link dropdown-toggle  waves-effect waves-light" data-toggle="dropdown"
                       role="button" aria-haspopup="false" aria-expanded="false">
                        <i className="fe-bell noti-icon"></i>
                        <span className="badge badge-danger rounded-circle noti-icon-badge">3</span>
                    </span>
                    <div className="dropdown-menu dropdown-menu-right dropdown-lg">

                        <div className="dropdown-item noti-title">
                            <h5 className="m-0">
                                Уведомления
                            </h5>
                        </div>

                        <div className="slimscroll noti-scroll">
                            <span className="dropdown-item notify-item">
                                <div className="notify-icon">
                                    <img src="assets/images/users/user-1.jpg" className="img-fluid rounded-circle"
                                         alt=""/></div>
                                <p className="notify-details">Кристина Фрид</p>
                                <p className="text-muted mb-0 user-msg">
                                    <small>Привет! Добро пожаловать! Как тебе это приложение?</small>
                                </p>
                            </span>
                            <span className="dropdown-item notify-item">
                                <div className="notify-icon bg-primary">
                                    <i className="mdi mdi-comment-account-outline"></i>
                                </div>
                                <p className="notify-details">Caleb Flakelar commented on Admin
                                    <small className="text-muted">1 час назад</small>
                                </p>
                            </span>
                            <span className="dropdown-item notify-item">
                                <div className="notify-icon bg-secondary">
                                    <i className="mdi mdi-heart"></i>
                                </div>
                                <p className="notify-details">Carlos Crouch liked
                                    <b>Admin</b>
                                    <small className="text-muted">13 дней назад</small>
                                </p>
                            </span>
                        </div>

                        <span
                           className="white dropdown-item text-center text-primary notify-item notify-all">
                            Посмотреть всё
                            <i className="fi-arrow-right"></i>
                        </span>

                    </div>
                </li>

                <li className="dropdown notification-list">
                    <span className="nav-link dropdown-toggle nav-user mr-0 waves-effect waves-light"
                       data-toggle="dropdown" role="button" aria-haspopup="false" aria-expanded="false">
                        <img src="assets/images/users/user-5.jpg" alt="user-img" className="rounded-circle" />
                <span className="pro-user-name ml-1">
                     <i className="mdi mdi-chevron-down"></i>
                </span>
                    </span>
                    <div className="dropdown-menu dropdown-menu-right profile-dropdown ">

                        <div className="dropdown-header noti-title">
                            <h6 className="text-overflow m-0">Добро пожаловать!</h6>
                        </div>

                        <Link to="/user-page" className="dropdown-item notify-item">
                            <i className="fe-user"></i>
                            <span>Моя страница</span>
                        </Link>

                        <button className="dropdown-item notify-item">
                            <i className="mdi mdi-cart-plus"></i>
                            <span>Добавить товар</span>
                        </button>

                        <button className="dropdown-item notify-item" >
                            <i className="fe-settings"></i>
                            <span>Настройки</span>
                        </button>

                        <div className="dropdown-divider"></div>
                        <button className="dropdown-item notify-item">
                            <i className="fe-log-out"></i>
                            <span>Выйти</span>
                        </button>

                    </div>
                </li>
            </ul>

            <div className="logo-box">
                <a href="/" className="logo text-center">
            <span className="logo-lg logotype" style={{fontSize: 25 + 'px', color: 'black'}}>
                Logotype
            </span>
                    <span className="logo-sm" style={{fontSize: 16 + 'px', color: 'black'}}>
                Logo
            </span>
                </a>
            </div>

            <ul className="list-unstyled topnav-menu topnav-menu-left m-0">
                <li>
                    <button className="button-menu-mobile waves-effect waves-light">
                        <i className="fe-menu"></i>
                    </button>
                </li>
            </ul>
        </div>
    );
};


export default TopMenu;