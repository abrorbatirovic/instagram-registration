import {Link} from "react-router-dom";

function Enter() {
    return (
        <Link to={'/sign-up'}><button className={'btn-enter'}>Enter</button></Link>
    )
}

export default Enter