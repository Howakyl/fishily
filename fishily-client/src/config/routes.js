import React from 'react';
import { Switch , Route } from 'react-router-dom';
import Home from '../pages/Home';
import UserList from '../pages/UserList';
import UserShow from '../pages/UserShow';
import SignUp from '../pages/SignUp';
import LogIn from '../pages/LogIn';
import PostList from '../pages/PostList';
import NewPost from '../pages/NewPost';
import PostDetail from '../pages/PostDetail';
import EditPost from '../pages/EditPost';
import EditUser from '../pages/EditUser';

function Routes (props) {

    return (
        <Switch >
            <Route exact path='/' render={() => <Home user={props.user} />}  />
            {/* USER ROUTES */}
            <Route exact path='/users/:id' render={() => <UserShow user={props.user} setUser={props.setUser}/>}/>
            <Route exact path='/users' component={ UserList }/>
            <Route exact path='/users/:id/edit' component={ EditUser }/>
            <Route path='/login' render={() => <LogIn user={props.user} setUser={props.setUser}/>}/>
            <Route path='/signup' render={() => <SignUp user={props.user} setUser={props.setUser}/>}/>
            {/* POST ROUTES */}
            <Route exact path='/posts' component={ PostList }/>
            <Route exact path='/posts/new' render={() => <NewPost user={props.user} setUser={props.setUser}/>}/>
            <Route exact path='/posts/:id/edit' component={ EditPost } />
            <Route exact path='/posts/:id' render={() => <PostDetail user={props.user} setUser={props.setUser}/>} />
        </Switch>
    )
}


export default Routes;