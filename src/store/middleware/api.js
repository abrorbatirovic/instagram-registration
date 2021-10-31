import axios from "axios";

const api = ({dispatch}) => (next) => (action) => {
    if (action.type !== 'api/apiCall') {
        next(action)
        return
    }

    next(action)

    const {url, method, data, onSuccess, onFile} = action.payload

    axios({
        baseURL: 'http://localhost:3001',
        url,
        method,
        data
    }).then((res)=>{
        dispatch({
            type: onSuccess,
            payload: res.data
        })
    }).catch(err=>{
        dispatch({
            type: onFile,
            payload: err.data
        })
    })
}

export default api