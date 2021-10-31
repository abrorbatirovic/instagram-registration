import Login from "./component/Login";
import SignIn from "./component/SignIn";

import './sigin-up.css'

function SignUp({user, history}) {

    function submit(event, errors, values) {
        user.forEach(item => {
            if (item.mobileEmail === values.mobileEmail || item.password === values.password) {
                history.push('/user/' + item.id)
            }
        })
    }

    return (
        <>
            <Login submit={submit}/>
            <SignIn/>
        </>
    )
}

export default SignUp