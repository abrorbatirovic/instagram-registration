import Registration from "./component/Registration";
import SignUp from "./component/SignUp";
import {toast} from 'react-toastify'

import './sign-in.css';

function SignIn({user, saveUser, history, location, match}) {

    let id = user.length + 1

    function submit(event, errors, values) {
        if (values.mobileEmail === '' || values.fullName === '' || values.firstName === '' || values.password === '') {
            toast.error('введите данные полностью')
        } else {
            saveUser(values)
            history.push('/user/' + id++)
        }
    }

    return (
        <>
            <Registration submit={submit}/>
            <SignUp/>
        </>
    );
}

export default SignIn