import {Link} from 'react-router-dom'

function SignUp() {
    return(
        <div className={'push-sign-up'}>
            <h6 className={'text-center'}>Есть аккаунт? <Link to={'sign-up'}>Вход</Link></h6>
        </div>
    )
}

export default SignUp