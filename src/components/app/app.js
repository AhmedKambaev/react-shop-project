import React from 'react';
import {Route, Switch} from "react-router-dom";
import { HomePage, UserPage, CardPage } from '../pages';
import TopMenu from '../top-menu';
import LeftMenu from '../left-menu';

class App extends React.Component {
    render() {
        return (
            <div>
                <TopMenu/>
                <LeftMenu/>
                <Switch>
                    <Route path="/" exact component={HomePage} />
                    <Route path="/user-page" component={UserPage} />
                    <Route path="/card-page" component={CardPage} />
                </Switch>
            </div>
        );
    }
};

export default App;