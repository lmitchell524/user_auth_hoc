import React from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import Nav from './nav.js';
import { Route } from 'react-router-dom';
import Home from './home';
import About from './about';
import SecretList from './secret_list';
import ProtectedStuff from './protected';
import auth from '../hoc/auth';

const App = () => (
    <div>
        <div className="container">
        <Nav/>
            <Route exact path='/' component={Home}/>
            <Route path='/about' component={About}/>
            <Route path='/secret-list' component={SecretList}/>
            <Route path='/protected-stuff' component={auth(ProtectedStuff)}/>
        </div>
    </div>
);

export default App;
