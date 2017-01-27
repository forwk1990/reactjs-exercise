import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import {Router, Route, hashHistory} from 'react-router'
import store from './utils/store'
import App from './App.js'
import {Canvas} from 'canvas'


ReactDOM.render(
    <Provider store={store}>
        <Router history={hashHistory}>
            <Route path="/" component={App}>
                <Route path="/canvas" component={Canvas}/>
            </Route>
        </Router>
    </Provider>
    , document.getElementById("root")
)