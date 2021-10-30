import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import SendOutlinedIcon from '@material-ui/icons/SendOutlined';
import AddBoxOutlinedIcon from '@material-ui/icons/AddBoxOutlined';
import ExploreOutlinedIcon from '@material-ui/icons/ExploreOutlined';
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';
function Header() {
    return (
        <div className={'user-header'}>
            <div className={'text'}>
                <h3>Instagram</h3>
            </div>
            <div className={'user-search'}>
                <input type="search" className={'form-control'} placeholder={'Поиск'}/>
            </div>
            <div className={'icons'}>
                <span><HomeOutlinedIcon/></span>
                <span><SendOutlinedIcon/></span>
                <span><AddBoxOutlinedIcon/></span>
                <span><ExploreOutlinedIcon/></span>
                <span><FavoriteBorderOutlinedIcon/></span>
            </div>
        </div>
    )
}

export default Header