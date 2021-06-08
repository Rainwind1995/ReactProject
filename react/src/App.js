import React, { Component } from 'react';
import { admainRoute } from './routes';
import {Route,Redirect,Switch} from 'react-router-dom';

export default class App extends Component {
    render() {
        return (
            <Switch>
                {
                    admainRoute.map((route, key)=>{
                        return <Route path={route.pathname} component={route.component} exact={route.exact} key={key}/>
                    })
                }
                <Redirect to={admainRoute[0].pathname} from='/admin' exact/>
            </Switch>
        )
    }
};

