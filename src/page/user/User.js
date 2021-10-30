import {useEffect} from "react";
import Header from './component/Header'
import Body from './component/body/Body'

import './user.css'

function User({match, getOneUser, oneUser, editUser, user}){

    useEffect(()=>{
        getOneUser(match.params)
    },[user])

    return(
        <div className={'user-box'}>
            <Header />
            <Body getOneUser={getOneUser} user={user} oneUser={oneUser} editUser={editUser} />
        </div>
    )
}

export default User