import {Link} from "react-router-dom";

function SignIn() {
    return(
        <div className={'push-sign-up'}>
            <h6 className={'text-center'}>У вас ещё нет аккаунта?<Link to={'/sign-in'}>Зарегистрироваться</Link></h6>
        </div>
    )
}

export default SignIn