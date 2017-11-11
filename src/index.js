import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Components/App';
import Login from './Components/Login';
import Registration from './Components/Registration';
import registerServiceWorker from './registerServiceWorker';
import {Switch, HashRouter, Route} from 'react-router-dom'
import home from './Components/home'

class WebApp extends Component {
    render() {
        return (
            <Switch>
                <Route exact path="/" component={home}/>                
                <Route path="/register" component={Registration}/>
                <Route path="/login" component={Login}/>
                <Route path="/reactCourse" component={App}/>
            </Switch>
    )
    }
}


ReactDOM.render(
    <div>
        <HashRouter>
            <WebApp/>
        </HashRouter>
    </div>

    , document.getElementById('root'));
registerServiceWorker();
