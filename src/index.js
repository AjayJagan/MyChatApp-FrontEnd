import React from 'react';
import ReactDom from 'react-dom';
import Login from './containers/Login/LoginContainer';
import Home from './layout/Home/Home'
import { Provider } from 'react-redux';
import store from './store'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ChatPage from './containers/chat/chatContainer';

ReactDom.render(
    <Provider store={store}>
        <Login>
            <BrowserRouter>
                <Switch>
                    <Route path='/chat/:email' component={ChatPage} />
                    <Route path='/' component={Home} />
                </Switch>
            </BrowserRouter>
        </Login>
    </Provider>,
    document.getElementById('app'));