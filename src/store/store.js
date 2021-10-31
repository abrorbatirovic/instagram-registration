import {configureStore} from '@reduxjs/toolkit'
import user from './user/user'
import api from './middleware/api'

export default configureStore({
    reducer: {
        user
    },
    middleware: [
        api
    ]
})