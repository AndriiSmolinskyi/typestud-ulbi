import { useSelector } from "react-redux"
import { useTypedSelector } from "../hooks/useTypedSelector"
import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { fetchUsers } from "../store/action-creator/user"

export const UserList: React.FC = () =>{
    const {users, error, loading} = useTypedSelector(state => state.user)
    const dispatch = useDispatch()

    useEffect(()=> {
        dispatch(fetchUsers())
    }, [])

    if(loading){
        return <h1>Завантаження</h1>
    }

    if(error){
        return <h1>{error}</h1>
    }

    return(
        <div>
            {users.map(user =>
                <div>{user.name}</div>
            )}
        </div>
    )
}