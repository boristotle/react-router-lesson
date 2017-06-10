import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
import App from './App.js';

export default class NavComponent extends Component {
    render(){
        return (
            <div>
                <App />
                <NavLink activeStyle={{fontWeight: 'bold', color: 'blue'}} exact to="/">Home</NavLink>
                <NavLink activeStyle={{fontWeight: 'bold', color: 'blue'}} exact to="/puppies">Puppies</NavLink>
            </div>
            )
    }
}