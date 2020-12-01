import React from 'react';
import { Switch , Route } from 'react-router-dom';
import Home from '../pages/Home';
import UserList from '../pages/UserList';
import UserShow from '../pages/UserShow';

export default (
    <Switch>
        <Route exact path='/' component={ Home }/>
        <Route exact path='/users' component={ UserList }/>
        <Route exact path='/users/:id' component={ UserShow }/>
    </Switch>
)