import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withStoreService } from '../hoc';
import Spinner from "../spinner";
import ErrorIndicator from "../eror-indicator";
import { loadingFunc, newAdd_action, addNew, changeMyInfo } from "../../actions";
import News from '../news';

class UserPage extends Component {

    state = {
        newValue: '',
        firstNameValue: '',
        lasNameValue: '',
        about_me_value: '',
        email_value: '',
        number_value: ''
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
    };

    formChange = (e) => {
        const el = e.target;
        if(el.id === 'firstname') {
            this.setState({firstNameValue: el.value});
        } else if(el.id === 'lastname') {
            this.setState({lastNameValue: el.value});
        } else if(el.id === 'userbio') {
            this.setState({about_me_value: el.value});
        } else if(el.id === 'useremail') {
            this.setState({email_value: el.value});
        } else if(el.id === 'usernumber') {
            this.setState({number_value: el.value});
        }
    };

    changeMyInfo = (e) => {
        e.preventDefault();
        const { firstNameValue, lastNameValue, about_me_value, email_value, number_value } = this.state;
        if(firstNameValue !== '' && lastNameValue !== ''
        && about_me_value !== '' && email_value !== ''
        && number_value !== '') {
            this.props.changeMyInfo({
                firstNameValue,
                lastNameValue,
                about_me_value,
                email_value,
                number_value
            });
            this.setState({firstNameValue: ''});
            this.setState({lastNameValue: ''});
            this.setState({about_me_value: ''});
            this.setState({email_value: ''});
            this.setState({number_value: ''});
        }
    };

    new_change = (e) => {
        const value = e.target.value;
        this.props.newAdd_action(value);
        this.setState({newValue: value});
    };

    add_new = (e) => {
        e.preventDefault();
        if(this.props.newAdd !== '') {
            this.props.addNew(this.props.newAdd);
            this.setState({newValue: ''});
        }
    };

    render() {
        if (this.props.loading) {
            return <Spinner/>
        }
        if (this.props.error) {
            return <ErrorIndicator/>
        }
        const {user_data: {firstName, lastName, fullName, email, about_me, number, location, news}} = this.props;
        return (
            <div className="content-page">
                <div className="content">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-12">
                                <div className="page-title-box">
                                    <div className="page-title-right">
                                        Личные данные
                                    </div>
                                    <h4 className="page-title">Моя страница</h4>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-4 col-xl-4">
                                <div className="card-box text-center">
                                    <img src="assets/images/users/user-5.jpg"
                                         className="rounded-circle avatar-lg img-thumbnail"
                                         alt="profile-image"/>

                                    <h4 className="mb-0">{firstName + ' ' + lastName}</h4>
                                    <p className="text-muted">{email}</p>

                                    <button type="button"
                                            className="btn btn-success btn-xs waves-effect mb-2 waves-light">Звонки
                                    </button>
                                    <button type="button"
                                            className="btn btn-danger btn-xs waves-effect mb-2 waves-light">Сообщение
                                    </button>

                                    <div className="text-left mt-3">
                                        <h4 className="font-13 text-uppercase">Обо мне:</h4>
                                        <p className="text-muted font-13 mb-3">
                                            {about_me}
                                        </p>
                                        <p className="text-muted mb-2 font-13"><strong>Полное имя:</strong> <span
                                            className="ml-2">{fullName}</span></p>

                                        <p className="text-muted mb-2 font-13"><strong>Номер:</strong><span
                                            className="ml-2">{number}</span></p>

                                        <p className="text-muted mb-2 font-13"><strong>Email:</strong> <span
                                            className="ml-2 ">{email}</span></p>

                                        <p className="text-muted mb-1 font-13"><strong>Страна:</strong> <span
                                            className="ml-2">{location}</span></p>
                                    </div>

                                    <ul className="social-list list-inline mt-3 mb-0">
                                        <li className="list-inline-item">
                                            <a href="javascript: void(0);"
                                               className="social-list-item border-primary text-primary"><i
                                                className="mdi mdi-facebook"></i></a>
                                        </li>
                                        <li className="list-inline-item">
                                            <a href="javascript: void(0);"
                                               className="social-list-item border-danger text-danger"><i
                                                className="mdi mdi-google"></i></a>
                                        </li>
                                        <li className="list-inline-item">
                                            <a href="javascript: void(0);"
                                               className="social-list-item border-info text-info"><i
                                                className="mdi mdi-twitter"></i></a>
                                        </li>
                                        <li className="list-inline-item">
                                            <a href="javascript: void(0);"
                                               className="social-list-item border-muted text-muted"><i
                                                className="mdi mdi-github-circle"></i></a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-8 col-xl-8">
                                <div className="card-box">
                                    <ul className="nav nav-pills navtab-bg nav-justified">
                                        <li className="nav-item">
                                            <a href="#aboutme" data-toggle="tab" aria-expanded="false"
                                               className="nav-link">
                                                Обо мне
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a href="#timeline" data-toggle="tab" aria-expanded="true"
                                               className="nav-link active">
                                                Новости
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a href="#settings" data-toggle="tab" aria-expanded="false"
                                               className="nav-link">
                                                Настройки
                                            </a>
                                        </li>
                                    </ul>
                                    <div className="tab-content">
                                        <div className="tab-pane" id="aboutme">
                                            <h5 className="mb-4 text-uppercase"><i
                                                className="mdi mdi-briefcase mr-1"></i>
                                                Мои навыки</h5>
                                            <ul className="list-unstyled timeline-sm">
                                                <li className="timeline-sm-item">
                                                    <span className="timeline-sm-date">Хорошие</span>
                                                    <h5 className="mt-0 mb-1">JavaScript</h5>
                                                    <p>javascript.learn.ru</p>
                                                </li>
                                                <li className="timeline-sm-item">
                                                    <span className="timeline-sm-date">Хорошие</span>
                                                    <h5 className="mt-0 mb-1">HTML / CSS</h5>
                                                </li>
                                                <li className="timeline-sm-item">
                                                    <span className="timeline-sm-date">Не плохие</span>
                                                    <h5 className="mt-0 mb-1">PHP</h5>
                                                </li>
                                                <li className="timeline-sm-item">
                                                    <span className="timeline-sm-date">Хорошие</span>
                                                    <h5 className="mt-0 mb-1">React & Redux</h5>
                                                    <p>
                                                        Знания можете оценить по этому приложению, или же зайти на мой GitHub
                                                    </p>
                                                </li>
                                                <li className="timeline-sm-item">
                                                    <span className="timeline-sm-date">Не плохие</span>
                                                    <h5 className="mt-0 mb-1">GIT</h5>
                                                </li>
                                                <li className="timeline-sm-item">
                                                    <span className="timeline-sm-date">не плохие</span>
                                                    <h5 className="mt-0 mb-1">nmp пакет</h5>
                                                </li>
                                                <li className="timeline-sm-item">
                                                    <span className="timeline-sm-date">Начальные</span>
                                                    <h5 className="mt-0 mb-1">Python</h5>
                                                </li>
                                            </ul>

                                            <h5 className="mb-3 mt-4 text-uppercase"><i
                                                className="mdi mdi-cards-variant mr-1"></i>
                                                GitHub</h5>
                                            <div>
                                                <a target="_blank" href="https://github.com/AhmedKambaev" style={{fontSize: 16 + 'px', color: '#1abc9c'}}>
                                                    https://github.com/AhmedKambaev
                                                </a>
                                            </div>
                                        </div>
                                        <div className="tab-pane show active" id="timeline">
                                            <form action="#" className="comment-area-box mt-2 mb-3">
                                                    <span className="input-icon">
                                                        <textarea value={this.state.newValue} onChange={this.new_change} rows="3" className="form-control"
                                                                  placeholder="Напиши что нибудь..."></textarea>
                                                    </span>
                                                <div className="comment-area-btn">
                                                    <div>
                                                        <button onClick={this.add_new} type="submit"
                                                                className="btn btn-sm btn-light waves-effect waves-light">Добавить
                                                        </button>
                                                    </div>
                                                </div>
                                            </form>
                                            <News news={news} />
                                            <div className="text-center">
                                                <a href="javascript:void(0);" className="text-danger"><i
                                                    className="mdi mdi-spin mdi-loading mr-1"></i> Грузится </a>
                                            </div>
                                        </div>
                                        <div className="tab-pane" id="settings">
                                            <div>
                                                <h5 className="mb-4 text-uppercase"><i
                                                    className="mdi mdi-account-circle mr-1"></i>Персональные данные</h5>
                                                <div className="row">
                                                    <div className="col-md-6">
                                                        <div className="form-group">
                                                            <label htmlFor="firstname">Имя</label>
                                                            <input value={this.state.firstNameValue} onChange={this.formChange} type="text" className="form-control" id="firstname"
                                                                   placeholder="Введите имя"/>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <div className="form-group">
                                                            <label htmlFor="lastname">Фамилия</label>
                                                            <input value={this.state.lastNameValue} onChange={this.formChange} type="text" className="form-control" id="lastname"
                                                                   placeholder="Введите фамилию"/>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-12">
                                                        <div className="form-group">
                                                            <label htmlFor="userbio">Информация</label>
                                                            <textarea value={this.state.about_me_value} onChange={this.formChange} className="form-control" id="userbio" rows="4"
                                                                      placeholder="Напиши что нибудь..."></textarea>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-md-6">
                                                        <div className="form-group">
                                                            <label htmlFor="useremail">Email</label>
                                                            <input value={this.state.email_value} onChange={this.formChange} type="email" className="form-control" id="useremail"
                                                                   placeholder="Введи email"/>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <div className="form-group">
                                                            <label htmlFor="userpassword">Номер телефона</label>
                                                            <input value={this.state.number_value} onChange={this.formChange} type="text" className="form-control"
                                                                   id="usernumber" placeholder="Введите номер"/>
                                                        </div>
                                                    </div>
                                                </div>
                                                <button onClick={this.changeMyInfo} className="btn btn-success">Сохранить</button>
                                            </div>
                                        </div>
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
        user_data: state.user_data,
        newAdd: state.newAdd,
        products: state.products
    }
};

const mapDispatchToProps = {
    loadingFunc,
    addNew,
    changeMyInfo,
    newAdd_action
};

export default withStoreService()(connect(mapStateToProps, mapDispatchToProps)(UserPage));