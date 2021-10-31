import {Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap'
import {AvForm, AvField} from 'availity-reactstrap-validation'

function Edit({isOpen, toggle, oneUser, submit}) {
    return(
        <Modal isOpen={isOpen} toggle={toggle}>
           <ModalHeader>
               Edit User
           </ModalHeader>
           <ModalBody>
               <AvForm onSubmit={submit} id={'edit-user'} model={oneUser ? oneUser : {}}>
                    <AvField type={'text'} name={'firstName'} label={'Имя'} />
                    <AvField type={'text'} name={'fullName'} label={'Имя пользователя'} />
                    <AvField type={'textarea'} name={'bio'} label={'О себе'} />
                    <AvField type={'number'} name={'mobileEmail'} label={'Номер телефона'} />
                    <AvField type={'text'} name={'password'} label={'Пароль'} />
               </AvForm>
           </ModalBody>
            <ModalFooter>
                <button onClick={toggle}>Отменить</button>
                <button type={'submit'} form={'edit-user'}>Сохранить</button>
            </ModalFooter>
        </Modal>
    )
}

export default Edit