import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import ErrorBoundry from './components/error-boundry';
import StoreService from './services/store-service';
import { StoreServiceProvider } from "./components/store-service-context";
import store from './store';
import App from './components/app';

const storeService = new StoreService();

ReactDOM.render(
    <Provider store={store}>
        <ErrorBoundry>
            <StoreServiceProvider value={storeService}>
                <Router>
                    <App />
                </Router>
            </StoreServiceProvider>
        </ErrorBoundry>
    </Provider>,
    document.getElementById('root')
);

