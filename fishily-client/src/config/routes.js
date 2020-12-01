import React from 'react';
import { Switch , Route } from 'react-router-dom';
import Home from '../pages/Home';
import UserList from '../pages/UserList';
import UserShow from '../pages/UserShow';

export default (
    <Switch>
        <Route exact path='/' component={ Home }/>
        <Route path='/users' component={ UserList }/>
        <Route path='/users/:id' component={ UserShow }/>
    </Switch>
)