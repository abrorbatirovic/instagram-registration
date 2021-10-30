import Edit from './modal/Edit'
import SettingsOutlinedIcon from '@material-ui/icons/SettingsOutlined';
import {useState} from 'react'


const color = ['blue', 'pink', 'yellow', 'green']

function Body({oneUser, editUser}) {


    const [imgColor, setImgColor] = useState(0)
    const [modalEdit, setModalEdit] = useState(false)

    const bgColor = {
        backgroundColor : color[imgColor]
    }

    const {fullName, firstName, bio, id, video} = oneUser

    function toggle() {
        setModalEdit(prev=>!prev)
    }

    function toggleImg() {
        setImgColor(prev=>prev + 1)
        if(imgColor >= color.length - 1) {
            setImgColor(0)
        }
    }

    function submit(event,errors,values){
        editUser({...values, id})
        toggle()
    }

    let a = fullName?.split('')

    return (
        <div className={'container p-5'}>
            <div className={'row'}>
                <div className="col-md-4 user-img" >
                    <div style={bgColor} onClick={toggleImg}><h1>{a? a[0].toUpperCase() : ''}</h1></div>
                    <h4 className={'text-center my-3'}>{firstName}</h4>
                </div>
                <div className="col-md-8 user-info">
                    <div className={'row'}>
                        <div className={'col-md-5'}>
                            <h2>{fullName}</h2>
                        </div>
                        <div className={'col-md-5'}>
                            <button onClick={toggle} className={'btn-edit'}>Редактировать профиль</button>
                        </div>
                        <div className={'col-md-2'}>
                            <span><SettingsOutlinedIcon/></span>
                        </div>
                    </div>
                    <div className={'row'}>
                        <div className={'col-md-4'}>
                            <h5>0 публикаций</h5>
                        </div>
                        <div className={'col-md-4'}>
                            <button className={'btn btn-outline'}><h5>0 подписчиков</h5></button>
                        </div>
                        <div className={'col-md-4'}>
                            <button className={'btn btn-outline'}><h5>0 подписок</h5></button>
                        </div>
                    </div>
                    <div className={'row'}>
                        <div className="col my-5">
                            <h5>{bio}</h5>
                        </div>
                    </div>
                </div>
            </div>
            <hr/>
            <div className={'row'}>
                {
                    video?.map((item,index)=><div className={'col-md-4 px-4'} key={index}>
                        <div className={'card'}>
                            <div className={'card-body video-card'}>
                                <video src={item} />
                            </div>
                        </div>
                    </div>)
                }
            </div>
            <Edit isOpen={modalEdit} toggle={toggle} oneUser={oneUser} submit={submit} />
        </div>
    )
}

export default Body