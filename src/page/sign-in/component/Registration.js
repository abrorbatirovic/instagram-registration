import {AvField, AvForm} from "availity-reactstrap-validation";
import {Link} from "react-router-dom";

function Registration({submit}) {
    return (
        <div className={'py-5'}>
            <div className={'sign-in'}>
                <div className={'sign-in-text'}>
                    <h2 className={'text-center'}>Instagram</h2>
                    <h5 className={'text-center'}>Зарегистрируйтесь, чтобы смотреть фото и видео ваших друзей.</h5>
                </div>
                <button className={'sign-in-facebook'}>
                    <Link to={'https://www.facebook.com/login'}>Войти через
                        Facebook
                    </Link>
                </button>
                <div className={'row-line'}>
                    <div className={'col-md-5 div-line'}/>
                    <div className={'col-md-2 text-center'}>ИЛИ</div>
                    <div className={'col-md-5 div-line'}/>
                </div>
                <AvForm onSubmit={submit} id={'registration'}>
                    <AvField type={'text'} name={'mobileEmail'} placeholder={'Моб.телефон или эл.адрес'}/>
                    <AvField type={'text'} name={'fullName'} className={'my-2'} placeholder={'Имя и фамилия'}/>
                    <AvField type={'text'} name={'firstName'} className={'my-2'} placeholder={'Имя пользователя'}/>
                    <AvField type={'password'} name={'password'} placeholder={'Пароль'}/>
                </AvForm>
                <div>
                    <button type={'submit'} form={'registration'} className={'sign-in-registration'}>Регистрация</button>
                </div>
                <p className={'text-registration text-center'}>
                    Регистрируясь, вы принимаете наши Условия, Политику использования данных и Политику в отношении файлов
                    cookie.
                </p>
            </div>
        </div>
    )
}

export default Registration