import {Switch, Route} from "react-router-dom";
import {useEffect, useState} from 'react';
import {connect} from 'react-redux';

import SignIn from "./page/sign-in/SignIn";
import SignUp from "./page/sign-up/SignUp";
import User from './page/user/User';
import Enter from './page/Enter'
import {getUser, saveUser, getOneUser, editUser} from './store/user/user';

import InstagramIcon from '@material-ui/icons/Instagram';
import './index.css';

function App({user, oneUser, getUser, saveUser, getOneUser, editUser}) {

    const [loading, setLoading] = useState(true)

    useEffect(() => {
        getUser()
    }, [])

    useEffect(()=>{
        setTimeout(()=>{
            setLoading(false)
        },5000)
    },[])

    if(loading) {
        return <div className={'loading'}>
            <InstagramIcon/>
        </div>
    }

    return (
        <div className={'bg-color'}>

            <Switch>
                <Route path={'/user/:id'}
                       render={(props) => <User
                           {...props} user={user} oneUser={oneUser} getOneUser={getOneUser} editUser={editUser} />}/>
                <Route path={'/sign-up'}
                       render={(props) => <SignUp
                           {...props} user={user}/>}/>
                <Route path={'/sign-in'}
                       render={(props) => <SignIn
                           {...props} user={user} oneUser={oneUser} saveUser={saveUser}/>}/>
                <Route path={''} component={Enter} />
            </Switch>
        </div>
    );
}

export default connect((state) => {
    return {
        user: state.user.user,
        oneUser: state.user.oneUser
    }
}, {getUser, saveUser, getOneUser, editUser})(App)