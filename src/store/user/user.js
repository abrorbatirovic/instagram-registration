import {createSlice} from '@reduxjs/toolkit'
import {apiCall} from "../api";

const user = createSlice({
    name :'user',
    initialState: {
        user: [],
        oneUser: ''
    },
    reducers: {
        getUser: (state, action)=>{
            state.user = action.payload
        },
        getOneUser: (state,action)=>{
            state.oneUser = action.payload
        },
        saveUser: (state,action)=>{
            state.user.push({
                id: action.payload.id,
                mobileEmail: action.payload.mobileEmail,
                fullName : action.payload.fullName,
                firstName: action.payload.firstName,
                password: action.payload.password,
                bio: '',
                video: []
            })
        },
        editUser:(state,action)=>{
            console.log(action.payload)
            state.user.map(item=>{
                if(item.id === action.payload.id){
                    item.mobileEmail = action.payload.mobileEmail
                    item.fullName = action.payload.fullName
                    item.firstName = action.payload.firstName
                    item.bio = action.payload.bio
                    item.password = action.payload.password
                }
            })
        }
    }
})

export const getUser = () => apiCall({
    url: '/user',
    method: 'get',
    onSuccess: user.actions.getUser.type
})

export const getOneUser = (data) => apiCall({
    url: '/user/' + data.id,
    method: 'get',
    onSuccess: user.actions.getOneUser.type
})

export const saveUser = (data) => apiCall({
    url: '/user',
    method: 'post',
    data,
    onSuccess: user.actions.saveUser.type
})

export const editUser = (data) => apiCall({
    url: '/user/' + data.id,
    method: 'put',
    data,
    onSuccess: user.actions.editUser.type
})

export default user.reducer