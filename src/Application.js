import React, { Component } from 'react';
import {
    View
} from 'react-native';


import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import Routes from './Routes';
import reducers from './reducers';
import ReduxThunk from 'redux-thunk';

const store = createStore (
    reducers,
    {},
    applyMiddleware(ReduxThunk)
);


class Application extends Component {

    render(){
        return(
            <Provider store={store}>
                <Routes />
            </Provider>
        )
    }
}


export default Application;