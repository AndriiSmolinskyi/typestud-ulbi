import { Dispatch } from "redux"
import { UserActionTypes } from "../../types/todo"
import axios from "axios"
import { UserAction } from "../../types/todo"

export const fetchUsers = () =>{
   return async (dispatch: Dispatch<UserAction>) =>{
    try {
        dispatch({type: UserActionTypes.FETCH_USERS})
        const response = await axios.get('https://jsonplaceholder.typicode.com/users')
        dispatch({type: UserActionTypes.FETCH_USERS_SUCCESS, payload: response.data})
    } catch (error) {
        dispatch({type: UserActionTypes.FETCH_USERS_ERROR, 
        payload: 'помилка при завантаженні юзерів'})
    }
   }
}