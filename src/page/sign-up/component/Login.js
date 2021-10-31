import {AvField, AvForm} from "availity-reactstrap-validation";

function Login({submit}) {
    return (
        <div className={'py-5'}>
            <div className={'sign-up'}>
                <h2 className={'text-center mb-5'}>Instagram</h2>
                <AvForm onSubmit={submit} id={'login-user'}>
                    <AvField type={'text'} className={'my-3'} name={'name'}
                             placeholder={'Телефон, имя пользователя или эл.адрес'}/>
                    <AvField type={'password'} name={'password'} placeholder={'Пароль'}/>
                </AvForm>
                <button type={'submit'} form={'login-user'} className={'sign-in-enter'}>Войти</button>
                <div className={'row-line'}>
                    <div className={'col-md-5 div-line'}/>
                    <div className={'col-md-2 text-center'}>ИЛИ</div>
                    <div className={'col-md-5 div-line'}/>
                </div>
                <div className={'enter-facebook text-center'}>
                    <h5><a href="https://www.facebook.com/login">Войти через Facebook</a></h5>
                    <h6>Забыли парол?</h6>
                </div>
            </div>
        </div>
    )
}

export default Login