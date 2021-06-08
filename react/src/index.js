import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { HashRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import { mainRoute } from './routes';
import Attacks from './views/attack';
import Defense from './views/defense';
import Detect from './views/detect';
import DataPrivacy from './views/dataPrivacy';

ReactDOM.render(
    <Router>
        <Switch>
            <Route path="/admin" component={App}/>
            <Route path="/attack" component={Attacks}/>
            <Route path="/defense" component={Defense}/>
            <Route path="/detect" component={Detect}/>
            <Route path="/dataPrivacy" component={DataPrivacy}/>
            {
                mainRoute.map( (route, key)=>{
                    return <Route path={route.pathname} component={route.component} key={key}/>
                })
            }

            <Redirect to='/home' from='/' exact/>
        </Switch>
    </Router>,
    document.getElementById('root')
);

reportWebVitals();



