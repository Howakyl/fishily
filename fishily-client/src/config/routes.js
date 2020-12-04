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

function Routes (props) {

    return (
        <Switch >
            <Route exact path='/' render={() => <Home user={props.user} />}  />
            <Route exact path='/users' component={ UserList }/>
            <Route exact path='/users/:id' component={ UserShow }/>
            <Route path='/login' render={() => <LogIn user={props.user} setUser={props.setUser}/>}/>
            <Route path='/signup' render={() => <SignUp user={props.user} setUser={props.setUser}/>}/>
            <Route exact path='/posts' component={ PostList }/>
            {/* <Route path='/posts/new' component={ NewPost }/> */}
            <Route exact path='/posts/new' render={() => <NewPost user={props.user} setUser={props.setUser}/>}/>
            <Route exact path='/posts/:id/edit' component={ EditPost } />
            <Route exact path='/posts/:id' component={ PostDetail }/>
        </Switch>
    )
}


export default Routes;