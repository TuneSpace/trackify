import { createContext, useState } from 'react';
import Login from './Login';
import Browse from '../Pages/Browse';
import Profile from '../Pages/Profile';

export const UserContext = createContext(null);

export const UserContextProvider = ({ children }) => {
    const [userState, setUserState] = useState(null);
    const [faveList, setFaveList] = useState([]);
    const [imageUrl, setImageUrl] = useState("hfrhrufhrufhurfhu");
    const userInfo = {
        userState,
        faveList,
        imageUrl,
        setFaveList,
        setUserState,
        setImageUrl
    };

    return (
        <UserContext.Provider value={userInfo}>
            <Login value={userInfo}/>
        </UserContext.Provider>
    )
};

export default UserContextProvider;