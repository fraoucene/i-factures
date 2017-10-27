import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {Route} from 'react-router';
import {Provider} from 'react-redux';
import {applyMiddleware, createStore, ThunkAction} from 'redux';
import {reducer, State} from './reducers/index';
import thunkMiddleware from 'redux-thunk';
import {BrowserRouter} from 'react-router-dom';
import {App} from './components/app';
import createBrowserHistory from 'history/createBrowserHistory';

export type ThunkActionCreator<R> = (...args: any[]) => ThunkAction<R, State, void>;

const store = createStore(
    reducer,
    applyMiddleware(
        thunkMiddleware
    )
);

const history = createBrowserHistory();

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
        <Route path="/ifact/">
            <App myHistory={history}/>
        </Route>
        </BrowserRouter>
    </Provider>,
    document.getElementById('app')
);
