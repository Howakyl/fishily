import React from 'react';
import { Switch , Route } from 'react-router-dom';
import Home from '../pages/Home';
import UserList from '../pages/UserList';
import UserShow from '../pages/UserShow';
import SignUp from '../pages/SignUp';
import LogIn from '../pages/LogIn';
import PostList from '../pages/PostList';

function Routes (props) {

    // const user = props.user;
    return (
        <Switch >
            <Route exact path='/' render={() => <Home user={props.user} />}  />
            <Route exact path='/users' component={ UserList }/>
            <Route exact path='/users/:id' component={ UserShow }/>
            <Route path='/login' render={() => <LogIn user={props.user} setUser={props.setUser}/>}/>
            <Route path='/signup' render={() => <SignUp user={props.user} setUser={props.setUser}/>}/>
            <Route path='/posts' component={ PostList }/>
        </Switch>
    )
}


export default Routes;