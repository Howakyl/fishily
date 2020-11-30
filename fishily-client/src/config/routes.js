import React from 'react';
import { Switch , Route } from 'react-router-dom';

import Home from '../pages/Home';
import UserList from '../pages/UserList';

export default (
    <Switch>
        <Route exact path='/' component={ Home }/>
        <Route path='/users' component={ UserList }/>
    </Switch>
)