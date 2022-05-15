import {User} from '../User/User';
import {selectUsers} from '../store/users/userSelectors';
import {useSelector} from 'react-redux'


export const UserList = () => {
    const users = useSelector(selectUsers);


    return <div>
        {users.length ? <div>Users</div> : <div> loading... </div>}
    </div>
};

